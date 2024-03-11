import React from 'react'
import './Footer.css'
function Footer(){

    return(
    <div className="footer">
        <div className='questions'><p> Questions? Call <span className='contact'>000-800-919-1694</span></p></div>
        <div className='seconddiv'>
            <div className='options'>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className='options'>
                <ul>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div className='options'>
                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </ul>
            </div>
            <div className='options'>
                <ul>
                    <li>Media Centre</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                    
                </ul>
            </div>

        </div>
        <div className='languagediv'>
        <select className='ButtonLanguage'>
          <option value="english">English</option>
          <option value="spanish">Hindi</option>
        </select>
        </div>
        <div className='enddiv'>
            <p>Netflix India</p>
        </div>

    </div>
    )
}

export default Footer