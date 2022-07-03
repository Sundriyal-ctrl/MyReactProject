import React from 'react'

export default function Footer() {
    return (
        <div className="foo ">
        <div className="container">
             <div  id="icon" className="d-flex justify-content-center border-bottom">
               <span >
                   
                   <i className="fa fa-facebook"></i>
                   <i className="fa fa-twitter"></i>
                   <i className="fa fa-google"></i>
                   <i className="fa fa-instagram"></i>
                   <i className="fa fa-linkedin"></i>
                   <i className="fa fa-Redhat"></i>

               </span>
             </div>
             <div className="row my-3">
                <div className="col-sm-4">
                    <h6 className="text-center">ITFETCH</h6>
                    <p className="text-center">ITFETCH is an organization who help needy student by giving them books in cheap price and provide the facility to upload pass out student books</p>
                </div> 
                <div className="col-sm-4">
                <h6 className="text-center">PRODUCTS</h6>
                <div className="text-center">
                    <p>React</p>
                    <p>Java</p>
                    <p>Github</p>
                    <p>php</p>
                </div>
                </div> 
                 <div className="col-sm-4 ">
                 <h6 className="text-center">CONTACTS</h6>
                    <div className="text-center">
                    <p><i className="fa fa-home"></i>   Dehradun Uttarakhand</p>
                    <p><i className="fa fa-gmail"></i>  anujsundriyal1234@gmail.com</p>
                    <p><i className="fa fa-phone"></i>   7895433045</p>
                    </div>
                 </div> 
             </div>
            
             <br></br>
        </div>
        <div className="d-flex justify-content-center " id="last">
                <p>@Sundriyal.github.SecondHand.in</p>
             </div>
        </div>
    )
}
