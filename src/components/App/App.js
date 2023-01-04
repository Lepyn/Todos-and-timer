import React, { useState, Component } from "react";
import "../../style";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import { nanoid } from "nanoid";

const App = () => {
  const [data, setData] = useState([]);
  const [filterBtn, setFilterBtn] = useState("all");

  const onAdded = (nameTask, min, sec) => {
    setData((state) => [
      ...state,
      {
        nameTask,
        min: min || 0,
        sec: sec || 0,
        done: false,
        id: nanoid(5),
        newTime: new Date(),
      },
    ]);
  };

  const completedItem = (id) => {
    setData((state) =>
      state.map((task) => {
        if (id === task.id) {
          return { done: !task.done };
        }
        return task;
      })
    );
  };

 

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
      <NewTaskForm data={data} onAdded={onAdded} />
      <TaskList
        filterBtn={filterBtn}
        // activeButton={activeButton}
        data={data}
        onDeleted={deletedItem}
        completedItem={completedItem}
      />
      <Footer
        data={data}
        taskFilter={taskFilter}
        filterBtn={filterBtn}
        // actived={this.state.actived}
        onClearCompleted={onClearCompleted}
        // activeButton={activeButton}
      />
    </section>
  );
};
export default App;

//   export default class App extends Component {
//   state = {
//     data: [],
//     activeButton: "all",
//   };

//   completedItem = (id) => {
//     this.setState(() => {
//       const a = this.state.data.map((task) => {
//         if (id === task.id) {
//           return { ...task, done: !task.done };
//         }
//         return task;
//       });
//       return {
//         data: a,
//       };
//     });
//   };

//   onAdded = (nameTask, min, sec) => {
//     let copy = [
//       ...this.state.data,
//       {
//         nameTask,
//         min:  min || 0,
//         sec:  sec || 0,
//         done: false,
//         id: nanoid(5),
//         newTime: new Date(),

//       },
//     ];

//     this.setState(() => {
//       return {
//         data: copy,
//       };
//     });
//   };

//   deletedItem = (id) => {
//     this.setState(() => {
//       const newdata = this.state.data.filter((el) => id !== el.id);
//       return {
//         data: newdata,
//       };
//     });
//   };

//   taskFilter = (activeButton) => {
//     this.setState(() => {
//       return { ...this.state, activeButton };
//     });
//   };

//   onClearCompleted = () => {
//     this.setState(() => {
//       let clearItem = this.state.data.filter((el) => el.done !== true);
//       return {
//         data: clearItem,
//       };
//     });
//   };

//   render() {
//     return (
//       <section className="todoapp">
//         <NewTaskForm onAdded={this.onAdded} />
//         <TaskList
//           activeButton={this.state.activeButton}
//           data={this.state.data}
//           onDeleted={this.deletedItem}
//           onCompleted={this.completedItem}
//         />
//         <Footer
//           data={this.state.data}
//           taskFilter={this.taskFilter}
//           actived={this.state.actived}
//           onClearCompleted={this.onClearCompleted}
//           activeButton={this.state.activeButton}
//         />
//       </section>
//     );
//   }
// }
