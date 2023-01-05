import React from "react";
import PropTypes from "prop-types";
import Task from "./../Task/Task";

const TaskList = ({
  data,
  onDeleted,
  filterBtn,
  onCountTimer,
  completedItem,
}) => {
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
              completedItem={completedItem}
              onCountTimer={() => onCountTimer(task.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterBtn: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
};

export default TaskList;
