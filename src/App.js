import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';

const Navigation = props => (
  <div>
    <ul>
      <IndexLink to="/" activeStyle={{color: '#48abee'}} >Home</IndexLink>
      <IndexLink to="/contact" activeStyle={{color: '#48abee'}} >contact</IndexLink>
    </ul>
    {props.children}
  </div>
);

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/hello/:name' component={Hello} />
          <Route path='*' component={PageNotFound} />
        </Route>
      </Router>
    )
  }
}
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;
export default App