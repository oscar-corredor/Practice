class Content extends React.Component {
  constructor(props) {
    super();
    this.state = { counter: 0 };
  }

  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleClick.bind(this), className: 'btn btn-primary' },
        'Dont click me ',
        this.state.counter,
        ' times!'
      )
    );
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));