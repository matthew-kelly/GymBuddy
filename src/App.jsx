import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import logo from './logo.svg';
import NavBar from './NavBar.jsx'
import Profile from './Profile.jsx'
import ChatHead from './ChatHead.jsx'
import Calendar from './Calendar.jsx'
import Friends from './Friends.jsx'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Fred'},
    };
  }

  render() {
    return (
      <Router>
      <div>
      <NavBar/>
        <Route exact path="/" component={NavBar}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/connections" component={ChatHead}/>
        <Route path="/friends" component={Friends}/>
      </div>
      </Router>
    );
  }
}

export default App;
