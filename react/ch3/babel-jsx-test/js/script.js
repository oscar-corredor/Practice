const h1 = React.createElement('h1', null, 'Hello World!');

class HellowWorld extends React.Component {
  render() {
    // render can only return 1 element
    return React.createElement('div', null, h1, h1);
  }
}

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello world!'
), document.getElementById('content'));
