import React,{useState} from 'react'
import './App.css';
import "antd/dist/antd.css";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {actioncreators} from './Services/constants'
import {notification} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
export default function ImagePage() {
    const dispatch = useDispatch();
     //const [v,setV]=useState(0);
     const history =useHistory();
     const [searchdata,setSearch]=useState("");
     //const [val,setVal]=useState(false);    
     const fun2=()=>{
        var req=new XMLHttpRequest();
        req.open("POST","https://hoteltechfix.000webhostapp.com/BookBuddy/jsonsearch.php?search="+searchdata+"",true);
            
        
        
        req.onreadystatechange =()=>{
          var b=JSON.parse(req.responseText);
         
          if(req.readyState === 4 && req.status===200)
          {
            
            dispatch(actioncreators.SearchData(b)); 
           history.push("/service");
          }
          else if(b.status===false)
          {
         
              notification.open({
                message:'SEARCHED BOOK NOT AVAILABLE',
                description:b.Message,
              className:'bg-warning text-white',
              icon:<SmileOutlined style={{color:'white'}}/>
              });
              return false;
          }
        
         
           
         
           return false;
          
      }
      req.send();  
      return false;
      
  
        
     }
  
    return (

        <div id="d">
            
            <p className="text-center" style={{"marginTop":"10px"}} id="tex">BEST BOOK IN BEST PRICE</p>
            <div id="search" className="input-group">
             <input type="text" className="form-control" placeholder="   SEARCH YOUR CLASS" onChange={(val)=>setSearch(val.target.value)}/>
             <div className="input-group-btn" id="bs" >
               <button className="btn"  onClick={fun2}>Search</button>
             </div>
             </div>
        </div>
    )
}
