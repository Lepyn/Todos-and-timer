import React, { Component } from "react";

import "../../style";

import NewTaskForm from "../NewTaskForm/NewTaskForm";

import TaskList from "../TaskList/TaskList";

import Footer from "../Footer/Footer";

import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    arr: [],
    activeButton: "all",
  };

  completedItem = (id) => {
    this.setState(() => {
      const a = this.state.arr.map((task) => {
        if (id === task.id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return {
        arr: a,
      };
    });
  };

  onAdded = (e, nameTask,  timer = [0, '00']) => {
    const copy = this.state.arr.slice();
    copy.push({
      nameTask,
      done: false,
      id: nanoid(5),
      newTime: new Date(),
      timer: timer,
    });
    this.setState(() => {
      e.preventDefault();
      return {
        arr: copy,
      };
    });
  };

  deletedItem = (id) => {
    this.setState(() => {
      const newArr = this.state.arr.filter((el) => id !== el.id);
      return {
        arr: newArr,
      };
    });
  };

  taskFilter = (activeButton) => {
    this.setState(() => {
      return { ...this.state, activeButton };
    });
  };

  onClearCompleted = () => {
    this.setState(() => {
      let clearItem = this.state.arr.filter((el) => el.done !== true);
      return {
        arr: clearItem,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm onAdded={this.onAdded} />
        <TaskList
          activeButton={this.state.activeButton}
          data={this.state.arr}
          onDeleted={this.deletedItem}
          onCompleted={this.completedItem}
        />
        <Footer
          data={this.state.arr}
          taskFilter={this.taskFilter}
          actived={this.state.actived}
          onClearCompleted={this.onClearCompleted}
          activeButton={this.state.activeButton}
        />
      </section>
    );
  }
}
