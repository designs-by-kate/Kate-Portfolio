import React from 'react';
import '../../assets/styles/About.css';
import ProfilePhoto from "../../assets/images/ProfileKateBW.jpg"

function About() {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2>Life is a constant lesson.</h2>
        <h3>I've embraced each challenge as an opportunity to grow.</h3>
        <p>I believe that through hard work and perseverance, we can achieve remarkable things.</p>
        <p>My journey is fueled by a deep passion for learning, a commitment to continuous improvement, and the belief that success comes to those who work tirelessly toward their goals.</p>
        <p>I value the wisdom gained from every experience and cherish the lessons learned from others.</p>
        <p>In this space, I invite you to explore my projects, share in my enthusiasm for technology, and witness the dedication I bring to every endeavor.</p>
        <p>Let's connect, collaborate, and embark on a journey of shared knowledge and endless possibilities.</p>
        <p>Thank you for being a part of this adventure.</p>
      </div>
      <div className="image-section">
        <img src={ProfilePhoto} alt="About Me" />
      </div>
    </div>
  );
}

export default About;
