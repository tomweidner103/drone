import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.fly = this.fly.bind(this);
  }
  fly(name) {
    Axios.get(`/api/drone/${name}`);
  }

  render() {
    return (
      <div>
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
            this.fly("reset");
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            this.fly("battery");
          }}
        >
          battery
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
