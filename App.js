import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
class App extends React.Component
{
  render(){
    return(
      <div>
        <ul>
          <li><Link to={'/Home'}>HOME</Link></li>
          <li><Link to={'/About'}>ABOUT</Link></li>
          <li><Link to={'/Contact'}>CONTACT</Link></li>
          </ul>
     
        </div>
    );
  }
}
export default App;



