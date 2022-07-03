
import React from 'react'
import useState from 'react'
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router'
import { useSelector } from 'react-redux';
export default function Checkout() {
  const location=useLocation();
  const history=useHistory();
  const amount=useSelector(state=>state.userData);
  const at=useSelector(state=>state.Booking);
  const d=useSelector(state=>state.regis);
  var a=at.price;
     var e=d.email;
     var r=amount;
   const change=()=>{
     
   window.location.assign("https://hoteltechfix.000webhostapp.com/api/PHP API/pgRedirect.php?TXN_AMOUNT="+a+"&email="+e+"&Region="+r+"");
      
 
   
   }
  return (
    <div id="loginimg" >
    <div className="bg-white  container col-sm-5" style={{"margin":"0 10px 0 10px"}} >
    <div  style={{padding:"10px"}}>
    <h3 className="text-center">BILL HISTORY</h3>
    <hr></hr>
      <form >
		
				
				
				<div>
				
				
					<input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value="Retail" className="form-control" readOnly type="hidden"/>
          </div>
          <br></br>
				<div>
        
					<input id="INDUSTRY_TYPE_ID"  autocomplete="off" value={e} className="form-control" readOnly/>
          </div>
          <br></br>
				<div>
					
					<input id="CHANNEL_ID" tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value="WEB" className="form-control" readOnly/>
				</div>
        <br></br>	
        <div>
      
					<input  tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value={at.Name} className="form-control" readOnly/>
				</div>
        <br></br>
        
				<div>
					
					<input title="TXN_AMOUNT" tabindex="10"
						type="text" name="TXN_AMOUNT"
						value={a} className="form-control" readOnly/>
					</div>
          <br></br>
					<div className="d-grid gap-2">
					<input value="CHECKOUT" type="submit"	onClick={change} className="btn btn-warning btn-block my-2" formTarget="_blank" style={{"color":'white'}}/>
          </div>
          <br></br>
	</form>
  </div>
    </div>
    </div>
  )
}

