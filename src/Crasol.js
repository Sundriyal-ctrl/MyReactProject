import React,{useState} from "react";
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import LogGoo from "./LogGoo";
import {useForm} from 'react-hook-form'
import {notification} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import {actioncreators} from './Services/constants'
export default function Crasol() {
  const amount=useSelector(state=>state.amount);
  const history=useHistory();  
  const{register,handleSubmit,formState:{errors}}=useForm(); 
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const dispatch = useDispatch();

  const change=()=>{
    var req=new XMLHttpRequest();
    req.open("POST","https://hoteltechfix.000webhostapp.com/BookBuddy/SelectData.php?email="+email+"&pass="+pass+"",true);
   
    req.onreadystatechange =()=>{
      var b=JSON.parse(req.responseText);
    
      if(req.readyState === 4 && req.status===200 && b.status==true)
      {
        dispatch(actioncreators.UserData(b.Name));
        dispatch(actioncreators.RegistrationData(b.Name,email,pass));  
       history.push("/checkout");
      }
      else if(b.status===false)
      {
        notification.open({
            message:'Warning',
            description:b.Message,
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
          <h4>Welcome back</h4>
         
          
          <form onSubmit={handleSubmit(change)}>
          <div>
            <label>Email</label>
             <input  {...register("email1",{required:true,minLength:15,pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} type="text" className="form-control" placeholder="itfetch123@gmail.com" onChange={(v)=>setEmail(v.target.value)}/>
             {errors.email1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 15 or ex.Itfetch1234@gmail.com</span>}
             </div>
             <div>
            <label>Password</label>
             <input  {...register("pass1",{required:true,minLength:5,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})} type="password" className="form-control" placeholder="Itfetch1@" onChange={(v1)=>setPass(v1.target.value)}/>
             {errors.pass1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field or length must be greater then 3 or ex. Sundriyal1@</span>}
             </div>
             <Link to="/forget" className="float-right my-2" style={{"color":"black"}}><strong>Forgot Password?</strong></Link>
             
             <button className="btn btn-warning  btn-block my-2" style={{"color":"white","fontWeight":"600"}}>Log in</button>
             <Link to="/registration" className="float-right my-1 " style={{"color":"black"}}><strong>Registration Now</strong></Link>
             
          </form>
           <div className="border my-3 mx-4"></div>
           <strong>you can continue with</strong>
          <LogGoo/>
       </div>
    </div>
    </div>
  );
}