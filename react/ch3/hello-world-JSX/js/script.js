const h1 = React.createElement('h1', null, 'Hello World!');

class HellowWorld extends React.Component {
  render() {
    // render can only return 1 element
    return React.createElement('div', null, h1, h1);
  }
}

ReactDOM.render(
<h1>Hello world!</h1>,
document.getElementById('content')
)
