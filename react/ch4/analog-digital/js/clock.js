class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toLocaleString() };
    this.launchClock();
  }

  render() {
    console.log('rendering main clock component');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
}