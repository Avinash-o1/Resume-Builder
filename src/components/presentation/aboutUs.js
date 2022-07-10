import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any comments or questions? I will be happy to assist you. Send me a message.
                    </p>
        
                    <h2 className="email text-large">
                        avinashchandra1701@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                        I am Avinash , i am passionate and aspiring web developer . This is one of the main projects 
                        that i have been working on and very happy to present you the resume builder, if you want to connect you can connect through links down below. 
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;