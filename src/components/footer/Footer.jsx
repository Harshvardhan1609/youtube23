import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Software</span>
            <span>Digital Marketing</span>
            <span>Hardware</span>
            <span>IOT</span>
            <span>Agriculture</span>
            <span>Artificial and intelligence</span>
            <span>Design</span>
            <span>Blockchain</span>
            <span>Business</span>
            <span>Web portals</span>
            <span>UI designs</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Project hosting</span>
            <span>Partnership</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Organization relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on insight army</span>
            <span>Buying on insight army</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From insight army</h2>
            <span>Insight army Business</span>
            <span>Insight army Pro</span>
            <span>Insight Maker</span>
            <span>Insight  Guides</span>
            <span>Get Inspired</span>
            <span>Insight Select</span>
            <span>ClearVoice</span>
            <span>Insight army Workspace</span>
            <span>Learn</span>
            <span>Get ideas </span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Insight army</h2>
            <span>© Insight army Pvt Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
