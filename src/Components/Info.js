import React,{useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import I1 from '../images/1.svg';
import I2 from '../images/2.svg';
import I3 from '../images/3.svg';
import logo from '../images/88.png';
import I5 from '../images/5.svg';
import I6 from '../images/6.svg';
import I7 from '../images/7.svg';
import "./Info.css";
export const Info = () => {
    useEffect(()=>{
        Aos.init({once: true,duration:2000});
    },[]);
    return (
        <div>
            <div className='dsh'>
                <h1 class="state_head">OUT REACH IN INDIA</h1>
                <h4 className='fsp'>Check all the states we are planned into.</h4>
            </div>
            <div class="H">
        <div class="cardsh">
            <div class="card" data-aos="zoom-in" data-aos-once="">
                <div class="imgbox">
                    <img
                        src={I1} />
                    <h2><a>Tamil Nadu</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={I2} />
                    <h2><a>Odisha</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={I3} />
                    <h2><a>Maharastra</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
        </div>
        <div class="cardsh">
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={I5} />
                <h2><a>Karnatka</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={I6} />

                    <h2><a>Delhi</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={I7} />

                    <h2><a>West Bengal</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
        </div>
        <div class="cardsh">
            <div class="card" data-aos="zoom-in" data-aos-once="">

                <div class="imgbox">
                <img
                        src={logo} />
<h2><a>Outreach</a></h2>
                </div>
                <div class="content">
                    <p class="para">Youth Tamil Nadu is society with over 500 members. They have put their heart and
                        energy into developing a society that we are pleased to be a part of. </p>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};


