import React from 'react'; 
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
class Home extends React.Component
{
    render()
    {
        return(
            <div>
                      <div>
                       <img src="game.jpg" alt="test"/>
                       Home
                         </div>
                
                   
                 <ul>
                 <li><Link to={'/'}>HOME</Link></li>
                  <li><Link to={'/About'}>ABOUT</Link></li>
                 <li><Link to={'/Contact'}>CONTACT</Link></li>
          </ul>
                </div>
            
        );
    }
} 
export default Home;