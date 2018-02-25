class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: (new Date()).toLocaleTimeString() }
    this.launchClock();
  }

  render() {
    console.log('renderin clock')
    return <div>{this.state.currentTime}</div>
  }

  launchClock() {
    setInterval(()=>{
      console.log('Updating time...')
      this.setState({
      currentTime: (new Date()).toLocaleTimeString()
      })
      }, 1000)
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('content')
)