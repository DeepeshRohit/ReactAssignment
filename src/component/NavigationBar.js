import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom';
import './NavigationBar.css';

const navbar = () =>{
   return(
       <div className='NavigationBar'>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/contact">CONTACT</a></li>
         </ul>
         <Router>
         
         <Route path='/' exact render={() => {
            return(
               <h2>You Selected  <button>HOME</button></h2>
            )
        }}/>
        <Route path='/projects' exact render={() => {
            return(
               <h2>You Selected  <button>PROJECTS</button></h2>
            )
        }}/>
        <Route path='/services' exact render={() => {
            return(
               <h2>You Selected <button>SERVICES</button></h2>
            )
        }}/>
        <Route path='/contact' exact render={() => {
            return(
               <h2> You Selected  <button>CONTACT</button></h2>
            )
        }}/>
            
            </Router>
       </div>
   ) 
}
export default navbar;