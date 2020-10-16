import React from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: new Date(),
        time: new Date(),
        timerSeconds: 0
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date()})

        var a = (this.state.time.getTime() - this.state.startTime.getTime()) /1000;
        this.setState({ timerSeconds: Math.trunc(a)})
      ;




    }
    render() {
        
      return (
        <p >
           {this.state.timerSeconds}
        </p>
      );
    }
  }
export default Clock;