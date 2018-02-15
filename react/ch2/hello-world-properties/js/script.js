const h1 = React.createElement('h1', null, 'Hello World!');

class HellowWorld extends React.Component {
  render() {
    // render can only return 1 element
    return React.createElement('h1', this.props, `Hello ${this.props.frameworkName} world!`);
  }
}

const emberElement = React.createElement(HellowWorld, { id: 'ember', frameworkName: 'Ember.js', tile: 'A framework for creating ambitious web applications.' });
const backboneElement = React.createElement(HellowWorld, { id: 'backbone', frameworkName: 'Backbone.js', tile: 'Backbone.js gives structure to web applications...' });
const angularElement = React.createElement(HellowWorld, { id: 'angular', frameworkName: 'Angular.js', tile: 'Superheroic JavaScript MVW framework.' });
ReactDOM.render(React.createElement('div', null, emberElement, backboneElement, angularElement), document.getElementById('content'));
