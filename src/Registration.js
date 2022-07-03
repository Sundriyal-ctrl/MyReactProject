import React, { useDebugValue,useState} from "react";
import './App.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import LogGoo from "./LogGoo";
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {notification} from 'antd';
import {actioncreators} from './Services/constants'
import {SmileOutlined} from '@ant-design/icons';
export default function Registration() {
  const amount=useSelector(state=>state.amount);
  
  const history =useHistory();
  const [name,setName]=useState("");
  const dispatch = useDispatch();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const{register,handleSubmit,formState:{errors}}=useForm(); 
  const Name1=(v1)=>{
    setName(v1.target.value)
  }
  const Email1=(v2)=>{
      setEmail(v2.target.value);
  }
  const Pass1=(v3)=>{
    setPassword(v3.target.value);
     
  }
  const change1=(e)=>{
    var req=new XMLHttpRequest();
    req.open("POST","https://hoteltechfix.000webhostapp.com/BookBuddy/forget.php?email="+email+"",true);
   
    req.onreadystatechange =()=>{
      //var b=JSON.parse(req.responseText);
    
      if(req.readyState === 4 && req.status===200 )
      {
    dispatch(actioncreators.RegistrationData(name,email,password)); 
    notification.open({
      message:'Success',
      description:'Otp is sent to your registered mail id',
    className:'bg-success text-white',
    icon:<SmileOutlined style={{color:'white'}}/>
    });
    history.push("/otp");
  }
  else if(req.status==500)
  {
    notification.open({
        message:'Warning',
        description:'some error occur try again',
      className:'bg-warning text-white',
      icon:<SmileOutlined style={{color:'white'}}/>
      });
  }
}
req.send();
  }
  return (
    <div className="" id="loginimg">
    <div className="my-3">
       <div className="card shadow  p-4 " id="formm">
          <strong>Hi there,</strong>
          <h4>Create an account</h4>
         
          
          <form onSubmit={handleSubmit(change1)}>
          <div>
            <label>UserName</label>
             <input  {...register("name",{required:true,minLength:4,pattern:/^(([a-zA-Z]{4,}))/})} type="text" className="form-control" placeholder="itfetch" onChange={Name1}/>
             {errors.name && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 15 or ex.Itfetch1234@gmail.com</span>}
             </div>
          <div>
            <label>Email</label>
             <input  {...register("email1",{required:true,minLength:15,pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} type="text" className="form-control" placeholder="itfetch123@gmail.com" onChange={Email1}/>
             {errors.email1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 15 or ex.Itfetch1234@gmail.com</span>}
             </div>
             <div>
            <label>Password</label>
             <input  {...register("pass1",{required:true,minLength:5,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})} type="password" className="form-control" placeholder="Itfetch1@" onChange={Pass1}/>
             {errors.pass1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 3 or ex. Sundriyal1@</span>}
             </div>
             <div>
            <label>Confirm Password</label>
             <input  {...register("pass2",{required:true,minLength:5,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})} type="password" className="form-control" placeholder="Itfetch1@"/>
             {errors.pass1!=errors.pass2 &&errors.pass2 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 3 or ex. Sundriyal1@</span>}
             </div>
             <Link to="/forget" className="float-right my-2" style={{"color":"black"}}><strong>Forgot Password?</strong></Link>
             
             <input type="submit" className="btn btn-warning  btn-block my-2" style={{"color":"white","fontWeight":"600"}} value="Sign-up" />
             <Link to="/login" className="float-right my-1 " style={{"color":"black"}}><strong>Login</strong></Link>
             
          </form>
           <div className="border my-3 mx-4"></div>
          
       </div>
    </div>
    </div>
  );
}