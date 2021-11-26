import React from 'react';
import './OurTeam.css'
import reportWebVitals from './../../../reportWebVitals';
const OurTeam = () => {
    return (
        <div className="p-5" style={{backgroundColor:"#EDEDED"}}>
           <div className="row container p-3 d-flex align-items-center">
               <div className="col-lg-8 col-md-6 col-sm-12  ">
                   <h1>OUR BEST</h1>
                   <p>An expert in Yoga.Can teach Yoga to beginners and even to advanced learners as well.Been practicing Yoga for the past 5 years atherapist and health coach. I work with people going through physical and emotional challenges and help from yoga.</p>
                   
               </div>

               <div className="col-lg-4 col-md-6 col-sm-12">
                   <img className="img-fluid w-100" src="https://i.ibb.co/s5RrYFX/pexels-rfstudio-3820296.jpg" alt=""/>
               </div>
           </div>
        </div>
    );
};

export default OurTeam;