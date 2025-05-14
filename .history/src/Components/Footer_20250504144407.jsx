import React from "react";
import img1 from '../Images/Ellipse 1.png';
import Instagram from '../Images/Instagram.png';
import Facebook from '../Images/Facebook.png';
import Youtube from '../Images/Youtube.png';
import './CSS/Footer.css';
import App from '../Images/App.png';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="logo-text"> <img className="logo" src={img1} />
            <div className="logo-cont">
            <h2 className="logo-text1">माझं कवितांचं गाव </h2>
           <h3 className="logo-text2"> जकातवाडी राजधानी सातारा .</h3>
           <div className="social"><p>Follow us on</p>
            <div className="social-icon">
                <img className="s-icon" src={Instagram}/>
                <img className="s-icon" src={Facebook}/>
                <img className="s-icon" src={Youtube}/>
            </div></div>
           </div>
             </div>
          
            <div className="pages">
                <ul className="page-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Kavita</Link></li>
                <li><Link to="/">Gallery</Link></li>
                <li><Link to="/">Blogs</Link></li>
                <li><Link to="/">Testimonials</Link></li>


                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>

                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
            </div>
            <div className="download">
                <h4 className="download-text"><a>Download Our Application</a></h4>
                <a><img className="download-logo" src={App} /></a>
            </div>
            </div>
            <div className="copyright">
                <p>@ 2025 Maz Kavitancha Gaav- Rajdhani Satara. All rights reserved.</p>
                <p>@ 2025 Designed and Developed by Designvio Pvt.ltd</p>
            </div>
             
        </>
    )
};
export default Footer;