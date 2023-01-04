import React, { Component } from "react";
// import PropTypes from "prop-types";
import Task from "./../Task/Task";

  // static defaultProps = {
  //   activeButton: "all",
  // };

  // static get propTypes() {
  //   return {
  //     activeButton: PropTypes.string,
  //   };
  // }


const TaskList = ({ data, onDeleted, onCompleted, filterBtn }) => {
  console.log(filterBtn);
 
  let taskFilterList = data;
  if (filterBtn === "active") {
    taskFilterList = data.filter((el) => !el.done);
  }
  if (filterBtn === "completed") {
    taskFilterList = data.filter((el) => el.done);
  }

  return (
    <ul className="todo-list">
      {taskFilterList.map((task) => {
        return (
          <li key={task.id} className={data.done ? "completed" : "toggle"}>
            <Task
              data={task}
              onDeleted={onDeleted}
              onCompleted={onCompleted}
              // newTime={this.timeAddTask}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
