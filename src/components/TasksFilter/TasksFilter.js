import React from "react";

const TasksFilter = ({ activeButton, taskFilter }) => {
  return (
    <ul className="filters">
      <li className="lifirst">
        <button
          type="radio"
          className={activeButton === "all" ? "selected" : ""}
          onClick={() => taskFilter("all")}
        >
          all
        </button>
      </li>
      <li>
        <button
          type="radio"
          className={activeButton === "active" ? "selected" : ""}
          onClick={() => taskFilter("active")}
        >
          active
        </button>
      </li>
      <li>
        <button
          className={activeButton === "completed" ? "selected" : ""}
          type="radio"
          onClick={() => taskFilter("completed")}
        >
          completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
