import React from 'react';
import back from '../images/back.jpg'
import './Front.css';
import child from '../images/kidsround.png';
function Front() {
  return (
    <div class='Front'>
      <img src={back} class="BI" />
      {/* <div class="Text"> */}
        <div class="T" data-aos="fade-up" data-aos-delay="200">
          <h1>Youth India Foundation</h1>
          <h4>A community for everyone to look beyond their own
            <br />interests. Join us in our journey of a better and brighter
            <br />tomorrow.</h4>
          <a>
            <button class="btn1"><b>Get Started</b></button>
          </a>
        </div>
          <div class="TI" data-aos="zoom-in-down" data-aos-delay="200">
              <img src={child} />
          </div>
      {/* </div> */}
    </div>

  );
}

export default Front;
