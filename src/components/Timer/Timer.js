import React, { Component } from "react";
import PropTypes from "prop-types";
// import { formatDistanceToNow } from "date-fns";

export default class Timer extends Component {
  state = {
    value: this.props.data.nameTask,
    min: this.props.data.min,
    sec: this.props.data.sec,
    zero: false,
    active: false,
  };

  static defaultProps = {
    update: () => {},
    startTimer: () => {},
    stopTimer: () => {},
  };

  static propTypes = {
    min: PropTypes.number,
    sec: PropTypes.number,
    zero: PropTypes.bool,
    active: PropTypes.bool,
    update: PropTypes.func,
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
  };

  update = () => {
    const { zero, min, sec } = this.state;
    if (zero) {
      this.setState({ min, sec: sec + 1 });
      sec === 59 && this.setState({ min: min + 1, sec: 0 });
    } else {
      this.setState({ min, sec: sec - 1 });
      sec === 0 && this.setState({ min: min - 1, sec: 59 });
      if (min === 0 && sec === 0) {
        this.setState({ min: 0, sec: 0 });
        clearInterval(this.interval);
      }
    }
  };

  startTimer = () => {
    this.setState({ active: true });
    this.interval = setInterval(() => this.update(), 1000);
  };

  stopTimer = () => {
    this.setState({ active: false });
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    const { min, sec } = this.state;
    if (min === 0 && sec === 0) {
      this.setState({ zero: true });
    }
  }

  render() {
    const { active, sec, min } = this.state;

    return (
      <>
        <span className="description">
          <button
            type="button"
            className="icon-play"
            onClick={this.startTimer}
            disabled={active}
          />
          <button
            type="button"
            className="icon-pause"
            onClick={this.stopTimer}
          />
          <span className="timer"> {`${min}:${sec}`} </span>
        </span>
      </>
    );
  }
}
