import React, { useState } from "react";
import PropTypes from "prop-types";

const NewTaskForm = ({ onAdded }) => {
  const [value, setValue] = useState("");
  const [sec, setSec] = useState("");
  const [min, setMin] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const onMinChange = (e) => {
    setMin(+e.target.value);
  };

  const onSecChange = (e) => {
    setSec(+e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onAdded(value, min, sec);
    setValue("");
    setSec("");
    setMin("");
  };

  return (
    <header>
      <h1>Todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          value={value}
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="new-todo-form__timer new-todo"
          placeholder="Min"
          value={min}
          onChange={onMinChange}
        />
        <input
          type="number"
          className="new-todo-form__timer new-todo"
          placeholder="Sec"
          value={sec}
          onChange={onSecChange}
        />
        <input type="submit" hidden></input>
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  isTask: PropTypes.bool,
  onAdded: PropTypes.func.isRequired,
};

export default NewTaskForm;
