import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import mateusz from "../../assets/mateusz.jpg";
import patryk from "../../assets/patryk.jpg";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mateusz} alt="" />
                <div>
                  <h3>Mateusz Skupień</h3>
                  <span>Jordanów, Poland</span>
                </div>
              </div>
              <p>
              Fun and laughter in learning! Creative, curious, and always happy!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={patryk} alt="" />
                <div>
                  <h3>Patryk Bachul</h3>
                  <span>Nowy Targ, Poland</span>
                </div>
              </div>
              <p>
              Energetic leader with a clear vision, always positive and inspiring!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Aleksandra Bachul</h3>
                  <span>Oxford, GB</span>
                </div>
              </div>
              <p>
              Creative and upbeat, she brings fresh ideas and lights up every room!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chris Poniatowsky</h3>
                  <span>Oslo, Norway</span>
                </div>
              </div>
              <p>
              Engaging remote teacher, creative and dedicated to making learning fun!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials
