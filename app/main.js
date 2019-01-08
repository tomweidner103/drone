import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";


export default class Main extends React.Component {
  constructor() {
    super();
    this.fly = this.fly.bind(this);
  }
  async fly(name) {
    const { data } = await Axios.get(`/api/drone/${name}`);
    if (name === "battery") {
      const minutes = this.minutes(data);
      console.log("minutes left: ", minutes);
    }
    console.log(data);
  }

  minutes(time) {
    const minutes = 24 * (time / 100);
    return minutes;
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.fly("flight1");
          }}
        >
          flight1
        </button>
        <button
          onClick={() => {
            this.fly("video");
          }}
        >
          video
        </button>
        <button
          onClick={() => {
            this.fly("takeoff");
          }}
        >
          takeoff
        </button>
        <button
          onClick={() => {
            this.fly("land");
          }}
        >
          land
        </button>
        <button
          onClick={() => {
            this.fly("clockwise");
          }}
        >
          clockwise
        </button>
        <button
          onClick={() => {
            this.fly("battery");
          }}
        >
          battery
        </button>
        <button
          onClick={() => {
            this.fly("navData");
          }}
        >
          navData
        </button>
        <button
          onClick={() => {
            this.fly("up");
          }}
        >
          up
        </button>
        <button
          onClick={() => {
            this.fly("down");
          }}
        >
          down
        </button>
        <button
          onClick={() => {
            this.fly("calibrate");
          }}
        >
          calibrate
        </button>
        <button
          onClick={() => {
            this.fly("pitchForward");
          }}
        >
          pitchForward
        </button>
        <button
          onClick={() => {
            this.fly("pitchBack");
          }}
        >
          pitchBack
        </button>
        <button
          onClick={() => {
            this.fly("stop");
          }}
        >
          stop
        </button>
        <button
          onClick={() => {
            this.fly("leftYaw");
          }}
        >
          leftYaw
        </button>
        <button
          onClick={() => {
            this.fly("rightYaw");
          }}
        >
          rightYaw
        </button>
        <button
          onClick={() => {
            this.fly("leftRoll");
          }}
        >
          leftRoll
        </button>
        <button
          onClick={() => {
            this.fly("rightRoll");
          }}
        >
          rightRoll
        </button>
        <button
          onClick={() => {
            this.fly("disableEmergency");
          }}
        >
          disableEmergency
        </button>
      </div>
    );
  }
}

ReactDOM.render(
    <Main />,
  document.getElementById("app")
);
