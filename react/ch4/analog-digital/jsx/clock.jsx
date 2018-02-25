class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime:(new Date()).toLocaleString() }
    this.launchClock();
  }
  
  render() {
    console.log('rendering main clock component');
    return <div>
      <AnalogDisplay time = {this.state.currentTime}/>
      <DigitalDisplay time = {this.state.currentTime}/>
    </div>
  }

  launchClock() {
    setInterval(()=>{
      console.log('Updating time...')
      this.setState({
      currentTime: (new Date()).toLocaleString()
      })
      }, 1000)
  }
}