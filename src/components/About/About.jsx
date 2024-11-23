import React from "react";
import "./About.css";
import mainphoto from "../../assets/mainphoto.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={mainphoto} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT SUNNYSCHOOL</h3>
        <h2>Inspiring Confidence, Unlocking Potential</h2>
        <p>
          At SunnySchool, we believe every student has the power to succeed. Our
          language tutoring programs are designed to ignite curiosity, build
          confidence, and make learning an exciting adventure.
        </p>
        <p>
          With personalized lessons and a focus on real-world communication, we
          help students master languages in a way that feels natural and fun.
          Whether it’s boosting grades, preparing for exams, or simply exploring
          the joy of learning, we’re here to guide every step of the way.
        </p>
        <p>
          Join us at SunnySchool, where passion meets progress, and every lesson
          is a step closer to your goals! Let’s learn, grow, and shine together.
        </p>
      </div>
    </div>
  );
};

export default About;
