import React from 'react'
import Java from './Java.jpg';
import { useSelector } from 'react-redux'
import Crasol from './Crasol';
import Slider from "react-slick";
import {useDispatch} from 'react-redux';
import {actioncreators} from './Services/constants'
import {Link} from 'react-router-dom';
export default function Service() {
    const amount=useSelector(state=>state.amount);
    const dispatch = useDispatch();
    const Save=(data)=>{
      dispatch(actioncreators.SaveData(data)); 
    }
    const respon={
      res:[{
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode:true,
          centerPadding:'60px',
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true
          
        }
      }]
    }
    const renderSlides = () =>
    amount.map((num) => (
      <div className="mx-4">
            
            <div className="card " style={{"width": "18rem"}}>
  <img className="card-img-top" src={Java} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{num.Name}</h5>
    <h5 className="card-title">{num.Author}</h5>
    <h6 className="card-title">{num.price}</h6>
    <p className="card-text">{num.description}</p>
   <div className="">
    <Link className="btn btn-warning btn-lg btn-block" to="/login" onClick={()=>Save(num)} style={{"color":"white"}}>Buy</Link>
    </div>
  </div>
</div>
      </div>
    ));
    return (
        <div className="container">
            <div className="bg-info " style={{"padding":"10px"}}>
            <h4 className="text-center text-white">ALL THE CHOICES FOR {amount[0].BookType.toUpperCase()}</h4>
            </div>
            <br></br>
            <hr></hr>
            <div >
      <Slider    centerMode={true} centerPadding="10px" slidesToScroll={3} slidesToShow={3}   responsive={respon.res} infinite={true} arrows={true} autoplay={true} >{renderSlides()}</Slider>
     
    </div>
</div>






    )
}

function Arrow()
{
  return (
  <div className="a-right">
      <button className="btn btn-info"><i className="fa fa-chevron-left"></i></button>
      </div>
  )
}
function Arrow2()
{
  return (
  <div className="a-right">
      <button className="btn btn-info"><i className="fa fa-chevron-right"></i></button>
      </div>
  )
}