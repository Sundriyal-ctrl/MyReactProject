import React from 'react'

export default function Latest() {
    return (
        <div className=" container my-4 bg-info" id="ll">
             <h4 style={{"color":"white"}} >Which One you like to Buy</h4>
            <div className="row" id="latest">
              
               <div className="col-sm-4 my-2 text-center" >
                   <div className="card">
                     <span style={{"fontWeight":"500"}}>Java &rarr; <span className="mx-2">Class 12th</span> <i className="fa fa-rupee mx-2 ">100</i> <i className="fa fa-"></i></span>
                     
                   </div>
               </div>
               <div className="col-sm-4 my-2 text-center">
                   <div className="card">
                     <span style={{"fontWeight":"500"}}>Java &rarr; <span className="mx-2">Class 12th</span> <i className="fa fa-rupee mx-2 ">100</i> <i className="fa fa-"></i></span>
                     
                   </div>
               </div>
               <div className="col-sm-4 my-2 text-center">
                   <div className="card">
                     <span style={{"fontWeight":"500"}}>Java &rarr; <span className="mx-2">Class 12th</span> <i className="fa fa-rupee mx-2 ">100</i> <i className="fa fa-"></i></span>
                     
                   </div>
               </div>
            </div>
        </div>
    )
}
