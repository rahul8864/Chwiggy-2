import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const About = () => {
  
  return (
    <div>
      
      <div className="about-container">
        <div className="about-left">
          <h1>
           Delivering   <br /> Delicious Moments<br />{" "}
            <span className="pink-text">to Your Doorstep</span>
          </h1>
          <h4>
            Elevating Your Dining Experience, <span>Anytime</span><span>, Anywhere.</span>
          </h4>
        </div>
        <div className="about-right">
          <img src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=1060&t=st=1691512370~exp=1691512970~hmac=7a4ce9f9f45ddd1e0bd618763ecb999edbc3756992b79273d5b5d9519f4ac035" alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
