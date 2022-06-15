import React from 'react'
import '../Style-sheets/Footer.css'
import telegram from '../images/telegram-3.png'
import discord from '../images/iconmonstr-discord-3.png'
import medium from '../images/iconmonstr-medium-3.png'
import linkedin from '../images/iconmonstr-linkedin-3.png'
import facebook from '../images/iconmonstr-facebook-3.png'
import twitter from '../images/iconmonstr-twitter-3.png'
import instagram from '../images/iconmonstr-instagram-8.png'
import youtube from '../images/iconmonstr-youtube-8.png'


export default function Footer() {
  return (
    <footer className='footer'>
      <p className="footer-p-invest">INVEST </p>
      <p className="footer-p-in">IN </p>
      <p className="footer-p-future">FUTURE </p>
      <div className="footer-div-links">
        <a href="" className="footer-a-links"><div className="footer-div-text">Buy</div></a>
        <a href="" className="footer-a-links"><div className="footer-div-text">About</div></a>
        <a href="" className="footer-a-links"><div className="footer-div-text">Terms</div></a>
        <a href="" className="footer-a-links"><div className="footer-div-contact">Contact</div></a>
      </div>
      <div className="footer-handles">
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={telegram} alt="" />
          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
          <img className="footer-handle-img" src={discord} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={medium} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={linkedin} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={facebook} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={twitter} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={instagram} alt="" />

          </a>
        </div>
        <div className="footer-handle-items">
          <a href="" className="footer-a-handle">
            <img className="footer-handle-img" src={youtube} alt="" />

          </a>
        </div>

      </div>
      <p className="footer-disclaimer">
        COPYRIGHT &#64; 2021 CAVALOX
      <br />
      <span className='footer-span'>
        <a href="" className="footer-a-privacy">
          PRIVACY POLICY
        </a>
        <a href="" className="footer-a-terms">
          TERMS &amp; CONDITIONS
        </a>
      </span>
      </p>
    </footer>
  )
}