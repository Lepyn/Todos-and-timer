import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      inputMinute: "",
      inputSeconds: "",
      isTask: false,
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
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
        inputMinute: e.target.inputMinute,
        inputSeconds: e.target.inputSeconds,
      };
    });
  }

  handleKeyUp(e) {
    const { value, inputMinute, inputSeconds } = this.state
     
    e.preventDefault();
    if (value.trim() === "") return;
    this.props.onAdded(e, value, inputMinute, inputSeconds);
    this.setState(() => {
      return {
        ...this.state,
        value: "",
        inputMinute: "",
        inputSeconds: "",
      };
    });
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <form onSubmit={this.handleKeyUp} className="new-todo-form">
          <input
            value={this.state.value}
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => this.handleInputChange(e)}
          />
          {/* <input
            className="new-todo-form__timer new-todo"
            placeholder="Min"
            value={this.state.inputMinute}
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className="new-todo-form__timer new-todo"
            placeholder="Sec"
            value={this.state.inputSeconds}
            onChange={(e) => this.handleInputChange(e)}
          /> */}
        </form>
      </header>
    );
  }
}
