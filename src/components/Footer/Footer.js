import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";

const Footer = ({
  onClearCompleted,
  taskFilter = ["all", "completed", "active"],
  data,
  filterBtn,
}) => {
  const filterTasksCount = data.filter((el) => {
    if (filterBtn === "completed" && el.done) {
      return el;
    }
    if (filterBtn === "active" && !el.done) {
      return el;
    }
    if (filterBtn === "all") {
      return el;
    }
  });
  let countTasks = filterTasksCount.length;

  return (
    <footer className="footer">
      <span className="todo-count"> {countTasks} items left</span>
      <TasksFilter data={data} taskFilter={taskFilter} />
      <button className="clear-completed" onClick={() => onClearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
