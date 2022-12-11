import React, { Component } from "react";

import TasksFilter from "../TasksFilter/TasksFilter";

export default class Footer extends Component {
  render() {
    const { onClearCompleted, taskFilter, activeButton, data } = this.props;
    const actuallyTasks = data;
    let newArr = [];
    if (activeButton === "completed") {
      actuallyTasks.filter((el) => {
        if (el.done) {
          newArr.push(el);
        }
      });
    } else if (activeButton === "active") {
      actuallyTasks.filter((el) => {
        if (!el.done) {
          newArr.push(el);
        }
      });
    } else if (activeButton === "all") {
      actuallyTasks.filter((el) => {
        newArr.push(el);
      });
    }

    let countTasks = newArr.length;
    return (
      <footer className="footer">
        <span className="todo-count">{countTasks} items left</span>
        <TasksFilter data={this.props.data} taskFilter={taskFilter} activeButton={this.props.activeButton} />
        <button className="clear-completed" onClick={() => onClearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
