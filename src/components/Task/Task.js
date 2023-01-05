import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Task = ({ onCountTimer, completedItem, data, onDeleted }) => {
  const [value, setValue] = useState(data.nameTask);
  const [isEdit, setIsEdit] = useState(false);

  const [created, setCreated] = useState(
    formatDistanceToNow(data.newTime, {
      includeSeconds: true,
    })
  );

  const [countTimer, setcountTimer] = useState(true);

  let timer;

  const clickMarkerButton = () => {
    setIsEdit(true);
  };

  const handleInputChange = (text) => {
    setValue(text);
  };

  const inputEditFocus = (e) => {
    if (e.key === "Enter") {
      if (value.trim() === "") return;
      e.preventDefault();
      setValue(e.target.value);
      setIsEdit(false);
    }
  };

  const padding = {
    padding: 0,
    marginLeft: 40,
    height: 60,
  };

  const displayblock = {
    display: "block",
    height: "100%",
  };

  const timeSec = () => {
    setCreated(
      formatDistanceToNow(data.newTime, {
        includeSeconds: true,
      })
    );
  };

  const startTimer = () => {
    setcountTimer(true);
  };

  const stopTimer = () => {
    setcountTimer(false);
  };
  useEffect(() => {
    const time = setInterval(() => timeSec(), 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const checkedCompletedTimer = () => {
    completedItem(data.id);
    if (!data.done) stopTimer();
    if (data.done) startTimer();
  };

  const min = Math.floor(data.timer / 60);
  const sec = data.timer % 60;

  useEffect(() => {
    if (countTimer) {
      timer = setInterval(() => onCountTimer(), 1000);
    }
    if (!countTimer) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countTimer]);

  return (
    <div>
      <input
        id="checkboxId"
        className="toggle"
        type="checkbox"
        checked={data.done ? true : false}
        onChange={checkedCompletedTimer}
      />
      <label
        htmlFor="checkboxId"
        className="editing"
        style={isEdit ? padding : null}
      >
        {isEdit && (
          <>
            <input
              type="text"
              className="edit"
              style={displayblock}
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyUp={(e) => inputEditFocus(e)}
            />
          </>
        )}
        {!isEdit && (
          <>
            <span className={data.done ? "throughText" : ""}>
              {value.length > 0 ? value : ""}
            </span>
            <span className="description">
              <button
                type="button"
                className="icon-play"
                onClick={() => startTimer()}
              />
              <button
                type="button"
                className="icon-pause"
                onClick={() => stopTimer()}
              />
              <span className="timer"> {`${min}:${sec}`} </span>
            </span>

            <span className="created">created {created} ago</span>
          </>
        )}
      </label>
      {!isEdit && (
        <>
          <button
            className="icon icon-edit"
            onClick={() => clickMarkerButton()}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDeleted(data.id)}
          ></button>
        </>
      )}
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  completedItem: PropTypes.func.isRequired,
};

export default Task;
