import React from 'react';
import "./Info1.css";
import Game from "../images/Game.jfif";
import Game1 from "../images/Beyond_the_idea.jfif";
import Game2 from "../images/Youthon.jfif";

function Info1() {
  return (
      <div>
           <div className='pro_head'>
               <p>Our Cases</p>
               <h1>Our Recent Leadership Program for YOUTH</h1>
           </div> 
           <div id="program">
               <div class="Pcard" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img src={Game}></img>
                    <div class="data">
                    <p>
                        img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                        img elements must have an alt prop
                        sdhbs ujfents must have an alt prop
                        jfa feoiwfjew dww
                    </p>
                    </div>
                    <div class="register">
                    <button>To Register</button>
                    </div>
               </div>
               <div class="Pcard" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img src={Game1}></img>
                    <div class="data">
                    <p>
                        img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                        img elements must have an alt prop
                        sdhbs ujfents must have an alt prop
                        jfa feoiwfjew dww
                    </p>
                    </div>
                    <div class="register">
                    <button>To Register</button>
                    </div>
               </div>
               <div class="Pcard" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img src={Game2}></img>
                    <div class="data">
                    <p>
                        img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                        img elements must have an alt prop
                        sdhbs ujfents must have an alt prop
                        jfa feoiwfjew dww
                    </p>
                    </div>
                    <div class="register">
                    <button>To Register</button>
                    </div>
               </div>

           </div>
      </div>
  );
}

export default Info1;