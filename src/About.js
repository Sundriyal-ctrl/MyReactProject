import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import  './App.css';
export default function About(props) {
  const state1 = useSelector(state=>state.userdata);
   ///const amount=useSelector(state=>state.amount);
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-white " >
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto " >
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">Services</Link>
            </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            
          <button id="ji" className="mx-2"><i className="fa fa-plus " ></i></button>  <span>Plublish your Account</span>  <button className="btn btn-info mx-2" type="submit"  style={{"borderRadius":"30px"}}><i className="fa fa-user" style={{"fontSize":"30px"}}></i></button><span>{state1}</span>
          </form>
        </div>
        
      </nav>
        
    )
}
