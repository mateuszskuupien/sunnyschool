import React from "react";
import "./Campus.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <a href="https://www.facebook.com/profile.php?id=100055228221279&sk=photos">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </a>
    </div>
  );
};

export default Campus;
