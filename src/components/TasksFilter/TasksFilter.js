import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TasksFilter extends Component {
  state = {
    count: 0,

  };

  static defaultProps = {
    count: 0,
  };

  static get propTypes() {
    return {
      count: PropTypes.number,
    };
  }

  render() {

    return (
      <ul className="filters">
        <li className="lifirst">
          <button type="radio" className={this.props.activeButton === 'all' ? "selected" : ''}    onClick={() => this.props.taskFilter("all")}>
            all
          </button>
        </li>
        <li>
          <button type="radio" className={this.props.activeButton === 'active'? "selected" : ''}  onClick={() => this.props.taskFilter("active")}>
            active
          </button>
        </li>
        <li>
          <button className={this.props.activeButton === 'completed' ? "selected" : ''} 
            type="radio"
            onClick={() => this.props.taskFilter("completed")}
          >
            completed
          </button>
        </li>
      </ul>
    );
  }
}
