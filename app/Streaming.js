import React from "react";
import axios from "axios";

class Streaming extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  async componentDidMount(){
      console.log(this.videoRef)
      const {data} = await axios.get('/api/drone/streaming')
      this.stream(data)
  }
  async stream(streaming) {
      console.log('streaming', videoRef.current.value)
       videoRef.current.src = 'localhost:4000'
    //   streaming = videoRef.current.srcObject
  }
  render() {
    return (
      <div>
        <video id="videoRef" ref={this.videoRef} autoPlay={true} />
      </div>
    );
  }
}

export default Streaming;
