import About from './About.js'
import {useDispatch} from 'react-redux';
//import {actioncreators} from './Services/constants.js'
import ImagePage from './ImagePage.js';
import Data from './Data.js';
import Latest from './Latest.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
 
} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Service from './Service.js';
import Footer from './Footer.js';
import Crasol from './Crasol.js';
import Registration from './Registration.js';
import OtpPage from './OtpPage.js';
import Checkout from './Checkout.js';
function App() {
//const dispatch = useDispatch();
  return (
   <div>
     
     
   
    <Router>
    <About/>
    <Switch>
        <Route exact path="/">
       
        <ImagePage/>
           <Data/>
             <Latest/>
        </Route>
        <Route exact path="/home">
       
        <ImagePage/>
           <Data/>
             <Latest/>
        </Route>
        <Route exact path="/service">
          <Service/>
        </Route>
        <Route exact path="/login">
           <Crasol/>
        </Route>
        <Route exact path="/registration">
           <Registration/>
        </Route>
        <Route exact path="/otp">
           <OtpPage/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
     </Switch>
     <Footer/> 
    </Router>
   
     
   </div>
  );
}

export default App;
