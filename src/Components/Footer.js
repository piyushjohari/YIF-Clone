import React from 'react';
import logo from '../images/Logo.png'
import "./Footer.css";
function Footer() {
    return (
        <div className='Foot'>
            <div class="FooterHead">
                <div class="Fhead1">
                    <a><img src={logo} /></a>
                </div>

                <div class="Fhead1">
                    <p>Menu</p>
                    <ul className='an'>
                        <a><li >About</li></a>
                        <a><li>Our Work</li></a>
                        <a><li>Our Team</li></a>
                        <a><li>Events</li></a>
                    </ul>
                </div>

                <div class="Fhead1 MF">
                    <div className='icons'>a</div>
                    <div className='icons'>b</div>
                    <div className='icons'>c</div>
                    <div className='icons'>d</div>
                </div>
                <div class="Fhead1">
                </div>

            </div>
            <div className='FooterDown'>
                    <div className='CR'>&copy;Youth India foundation 2022</div>
                        <ul className='an'>
                            <a><li>Terms and Condition</li></a>
                            <a><li>Annual report</li></a>
                            <a><li>Privacy Policy</li></a>
                        </ul>
                    
                </div>

        </div>
    );
}

export default Footer;

