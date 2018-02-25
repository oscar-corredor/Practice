class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toLocaleTimeString() };
    this.launchClock();
  }

  render() {
    console.log('renderin clock');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }, 1000);
  }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));