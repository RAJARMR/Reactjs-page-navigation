import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

class About extends React.Component
{
    render()
    {
        return(
            <div>
                <div>
                       <img src="outdoor.jpg" alt="test"/>
                       About
                         </div>
                 <ul>
               
                 <li><Link to={'/Home'}>HOME</Link></li>
                 <li><Link to={'/'}>ABOUT</Link></li>
                 <li><Link to={'/Contact'}>CONTACT</Link></li>
          </ul>
                    </div>
        );
    }
}
export default About;