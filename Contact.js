import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
class Contact extends React.Component
{
    render()
    {
        return(
            <div>
                <div>
                       <img src="indoor.jpg" alt="test"/>
                     Contact
                         </div>
                <ul>
                  <li><Link to={'/Home'}>HOME</Link></li>
                 <li><Link to={'/About'}>ABOUT</Link></li>
                 <li><Link to={'/'}>CONTACT</Link></li>
                 </ul>
                </div>
        );
    }
}
export default Contact;