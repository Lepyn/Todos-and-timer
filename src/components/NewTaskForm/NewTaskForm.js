import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      min: "",
      sec: "",
      isTask: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static defaultProps = {
    isTask: false,
  };

  static get propTypes() {
    return {
      isTask: PropTypes.bool,
    };
  }

  handleInputChange(e) {
    this.setState(() => {
      return {
        ...this.state,
        value: e.target.value,
      };
    });
  }

  onMinChange(e) {
    console.log(e);
    this.setState(() => {
      return {
        ...this.state,
        min: e.target.value,
      };
    });
  }
  onSecChange(e) {
    this.setState(() => {
      return {
        ...this.state,
        sec: e.target.value,
      };
    });
  }

  onSubmit(e) {
    const { value, min, sec } = this.state;
    e.preventDefault();
    if (value.trim() === "") return;
    this.props.onAdded(value, min, sec);
    this.setState(() => {
      return {
        value: "",
        min: "",
        sec: "",
      };
    });
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <form onSubmit={this.onSubmit} className="new-todo-form">
          <input
            value={this.state.value}
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            type="number"
            className="new-todo-form__timer new-todo"
            placeholder="Min"
            value={this.state.min}
            onChange={(e) => this.onMinChange(e)}
            min={0}
          />
          <input
            type="number"
            className="new-todo-form__timer new-todo"
            placeholder="Sec"
            value={this.state.sec}
            onChange={(e) => this.onSecChange(e)}
            sec={0}
          />
          <input type="submit" hidden></input>
        </form>
      </header>
    );
  }
}
