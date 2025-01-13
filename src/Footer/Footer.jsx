import React from "react";
import paynet_logo from '../Homepage/Assets/paynet.svg'
import mastercard_logo from '../Homepage/Assets/mastercard.svg'
import visa_logo from '../Homepage/Assets/visa.svg'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path transform="rotate(180 500 5)" d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>
            <div className="footer">

                <div className="f-column">

                    <ul>
                        <li>Codecraft Academy © 2024</li>
                        <li>All rights are protected</li>
                        <li><a href="#/privacy-policy" target="_blank">Privacy Policy</a></li>
                        <li><a href='#/terms-and-conditions' target="_blank">Terms And Conditions</a></li>
                    </ul>
                </div>
                <div className="f-column">
                    <ul>
                        <li>Manual Testing</li>
                        <li>Software Testing</li>
                        <li>Java Basics</li>
                    </ul>
                </div>
                <div className="f-column">
                    <ul>
                        <li>We Accept:</li>
                        <li><img src={mastercard_logo} alt="" /></li>
                        <li><img src={visa_logo} alt="" /></li>
                        <li><img src={paynet_logo} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Footer