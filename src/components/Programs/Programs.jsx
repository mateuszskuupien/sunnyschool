import React from 'react'
import './Programs.css'
import group from "../../assets/groupclass.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import laugh from "../../assets/laugh.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={group} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Group Classes</p>
        </div>
      </div>
      <div className="program">
        <img src={photo2} alt="" />
        <div className="caption">
          <img src={laugh} alt="" />
          <p>Fun Activities</p>
        </div>
      </div>
      <div className="program">
        <img src={photo3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>One-on-one Tutoring</p>
        </div>
      </div>
    </div>
  );
};

export default Programs
