import React, { useState } from "react";
import "../../style";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import { nanoid } from "nanoid";

const App = () => {
  const [filterBtn, setFilterBtn] = useState("all");
  const [data, setData] = useState([
    { nameTask: "task", timer: 0, done: false, id: 1, newTime: new Date() },
  ]);

  const onAdded = (nameTask, min, sec) => {
    setData((state) => [
      ...state,
      {
        nameTask,
        timer: min * 60 + sec,
        done: false,
        id: nanoid(5),
        newTime: new Date(),
      },
    ]);
  };

  const completedItem = (id) => {
    setData((state) =>
      state.map((task) => {
        if (task.id === id) return { ...task, done: !task.done };
        return { ...task };
      })
    );
  };

  const onCountTimer = (id) =>
    setData((state) =>
      state.map((task) => ({
        ...task,
        timer: task.id === id && task.timer > 0 ? task.timer - 1 : task.timer,
      }))
    );

  const deletedItem = (id) => {
    setData((state) => state.filter((el) => id !== el.id));
  };

  const taskFilter = (activeButton) => {
    setFilterBtn(activeButton);
  };

  const onClearCompleted = () => {
    setData((state) => state.filter((el) => el.done !== true));
  };

  return (
    <section className="todoapp">
      <NewTaskForm onAdded={onAdded} />
      <TaskList
        filterBtn={filterBtn}
        onCountTimer={onCountTimer}
        data={data}
        onDeleted={deletedItem}
        completedItem={completedItem}
      />
      <Footer
        data={data}
        taskFilter={taskFilter}
        filterBtn={filterBtn}
        onClearCompleted={onClearCompleted}
      />
    </section>
  );
};
export default App;
