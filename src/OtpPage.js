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
export default function OtpPage() {
  const amount=useSelector(state=>state.regis);
  
  const history =useHistory();
  const [otp,setOtp]=useState("");
  const{register,handleSubmit,formState:{errors}}=useForm(); 
  const Pass1=(v3)=>{
    setOtp(v3.target.value);
     
  }
  const change1=(e)=>{
    var req=new XMLHttpRequest();
    req.open("POST","https://hoteltechfix.000webhostapp.com/BookBuddy/insertData.php?otp="+otp+"&name="+amount.name+"&email="+amount.email+"&password="+amount.password+"",true);
   
    req.onreadystatechange =()=>{
      var b=JSON.parse(req.responseText);
    
      if(req.readyState === 4 && req.status===200 && b.status==true)
      {
       history.push("/login");
      }
      else if(req.status===500)
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
          <h4>Enter OTP which is sent in your Registered Email</h4>
         
          
          <form onSubmit={handleSubmit(change1)}>
        
             <div>
            <label>OTP</label>
             <input  {...register("opt1",{required:true,minLength:4,pattern:/^(([0-9]{4}))/})} type="text" className="form-control" placeholder="ex  4678" onChange={Pass1}/>
             {errors.otp1 && <span style={{color:"red",fontWeight:"700",fontSize:"12px"}}>Empty Field not allowed only 4 digit Number is allowed</span>}
             </div>

            <br></br>
             <div>
             <input type="submit" className="btn btn-warning  btn-block my-2" style={{"color":"white","fontWeight":"600"}} value="Verify" />
            </div>
             
          </form>
           <div className="border my-3 mx-4"></div>
          
       </div>
    </div>
    </div>
  );
}
