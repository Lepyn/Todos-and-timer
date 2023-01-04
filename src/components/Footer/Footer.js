import { el } from "date-fns/locale";
import React, { Component } from "react";

import TasksFilter from "../TasksFilter/TasksFilter";

const Footer = ({ onClearCompleted, taskFilter = ['all', 'completed', 'active'], data }) => {
 
  // const newArr = data.filter((el) => {
  //   if (activeButton === "completed" && el.done) {
  //     return el;
  //   }
  //   if (activeButton === "active" && !el.done) {
  //     return el;
  //   }
  //   if (activeButton === "all") {
  //     return el;
  //   }
  // });

  // let countTasks = data.length;
  // console.log(countTasks);

  return (
    <footer className="footer">
      <span className="todo-count">{data.filter((task) => task.done).length} items left</span>
      <TasksFilter
        data={data}
        taskFilter={taskFilter}
        // filterBtn={filterBtn}
        // activeButton={activeButton}
      />
      <button className="clear-completed" onClick={() => onClearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
