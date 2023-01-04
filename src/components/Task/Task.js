import React, { useState } from "react";
import Timer from "../Timer/Timer";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

// static defaultProps = {
//   id: Math.random(),
//   done: false,
// };

// static get propTypes() {
//   return {
//     id: PropTypes.number,
//     done: PropTypes.bool,
//   };
// }

const Task = ({ completedItem, data, onDeleted }) => {
  // state = {
  // value: this.props.data.nameTask,
  //   isEdit: false,
  // };

  const [value, setValue] = useState(data.nameTask);
  const [isEdit, setIsEdit] = useState(false);

  const clickMarkerButton = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (text) => {
    setValue(text);
  };

  const inputEditFocus = (e) => {
    if (e.key === "Enter") {
      if (value.trim() === "") return;
      e.preventDefault();
      setValue(data, {isEdit: !isEdit})
    }
  };

  const createTime = formatDistanceToNow(data.newTime, {
    includeSeconds: true,
  });

  const padding = {
    padding: 0,
    marginLeft: 40,
    height: 60,
  };

  const displayblock = {
    display: "block",
    height: "100%",
  };
  console.log(value);
  const inputText = value.length > 0 ? value : !value;
  console.log(value, "value 2 ");
  return (
    <div>
      <input
        id="checkboxId"
        className="toggle"
        type="checkbox"
        checked={data.done ? true : false}
        onChange={() => completedItem(data.id)}
      />
      <label
        htmlFor="checkboxId"
        className="editing"
        style={isEdit ? padding : null}
        //  style={isEdit ? setIsEdit(padding) : setIsEdit(null) }
      >
        {isEdit && (
          <>
            <input
              type="text"
              className="edit"
              style={displayblock}
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyUp={(e) => inputEditFocus(e)}
            />
          </>
        )}
        {!isEdit && (
          <>
            <span className={data.done ? "throughText" : ""}>{inputText}</span>
            <Timer data={data} />
            <span className="created">created {createTime} ago</span>
          </>
        )}
      </label>
      {!isEdit && (
        <>
          <button
            className="icon icon-edit"
            onClick={() => clickMarkerButton()}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDeleted(data.id)}
          ></button>
        </>
      )}
    </div>
  );
};
export default Task;
// export default class Task extends Component {
//   state = {
//     value: this.props.data.nameTask,
//     isEdit: false,
//   };

//   static defaultProps = {
//     id: Math.random(),
//     done: false,
//   };

//   static get propTypes() {
//     return {
//       id: PropTypes.number,
//       done: PropTypes.bool,
//     };
//   }

//   clickMarkerButton = () => {
//     this.setState(() => {
//       return {
//         ...this.state,
//         isEdit: !this.state.isEdit,
//       };
//     });
//   };

//   handleInputChange(text) {
//     this.setState(() => {
//       return {
//         ...this.state,
//         value: text,
//       };
//     });
//   }

//   inputEditFocus(e) {
//     this.setState(() => {
//       if (e.key === "Enter") {
//         if (this.state.value.trim() === "") return;
//         e.preventDefault();
//         return { ...this.state, isEdit: !this.state.isEdit };
//       }
//     });
//   }

//   render() {
//     const createTime = formatDistanceToNow(this.props.data.newTime, {
//       includeSeconds: true,
//     });

//     const padding = {
//       padding: 0,
//       marginLeft: 40,
//       height: 60,
//     };

//     const displayblock = {
//       display: "block",
//       height: "100%",
//     };
//     const inputText =
//       this.state.value.length > 0 ? this.state.value : !this.state.value;

//     return (
//       <div>
//         <input
//           id="checkboxId"
//           className="toggle"
//           type="checkbox"
//           checked={this.props.data.done ? true : false}
//           onChange={() => this.props.onCompleted(this.props.data.id)}
//         />
//         <label
//           htmlFor="checkboxId"
//           className="editing"
//           style={this.state.isEdit ? padding : null}
//         >
//           {this.state.isEdit && (
//             <>
//               <input
//                 type="text"
//                 className="edit"
//                 style={displayblock}
//                 value={this.state.value}
//                 onChange={(e) => this.handleInputChange(e.target.value)}
//                 onKeyUp={(e) => this.inputEditFocus(e)}
//               />
//             </>
//           )}
//           {!this.state.isEdit && (
//             <>
//               <span className={this.props.data.done ? 'throughText' : ''}   > {inputText} </span>
//               <Timer data={this.props.data} />
//               <span className="created">created {createTime} ago</span>
//             </>
//           )}
//         </label>
//         {!this.state.isEdit && (
//           <>
//             <button
//               className="icon icon-edit"
//               onClick={() => this.clickMarkerButton()}
//             ></button>
//             <button
//               className="icon icon-destroy"
//               onClick={() => this.props.onDeleted(this.props.data.id)}
//             ></button>
//           </>
//         )}
//       </div>
//     );
//   }
// }
