import React from 'react';
import SmartChoice from './smartchoice-style';
const Smart=()=>{
       return(
        <SmartChoice>
            <div className="header">
            <div>
                <img className="img" src="/public/img2.png" alt="ipsum"  ></img>
            </div>
            <div className="option">
                <div><h5>Home</h5></div>
                <div><h5>Courses</h5></div>
                <div><h5>Our Service</h5></div>
                <div><h5>Contact Us</h5></div>
                <div className="sign"><h5 className="signin">Sign In</h5></div>
            </div>
            </div>
            <div className="body">
                <div>
                    <h4 className="head">The <span className="bold">Smart</span></h4>
                    <h4 className="head">Choice For <span className="bold">Future</span></h4>
                    <p className="para">Elearn is a global training provider based across the UK that specialises <br></br> in accredited and bespoke training courses. We crush the...</p>
                    <div className="search">
                        <h6 className="searchcourse">Search Courses...</h6>
                        <div className="cont"><h5 className="conti">Continue</h5></div>
                    </div>
                </div>
                <div>
                    <img src="\public\img.png" alt="image" ></img>
                </div>
            </div>
            <h3 className="track">Our Tracks</h3>
            <p className="lorem">Lorem Ipsum is simply dummy text of the printing.</p>
            <div className="ourtrack">
                <div className="box">
                    <img src="\public\img3.jpg" alt="img" className="img2"></img>
                    <div className="course-info">
                    <p className="category">UI/UX Design</p>
                    <h3 className="title">UI/UX Design for Beginners</h3>
                    <p className="price">$98</p>

                    <div className="details-row">
                        <span>⏰ 22hr 30min</span>
                        <span>📘 34 Courses</span>
                        <span>🛒 250 Sales</span>
                    </div>

                    <button className="join-btn">Join Course</button>

                 </div>
                </div>
                                 
                <div className="box">
                    <img src="\public\img4.jpg" alt="img" className="img2"></img>
                    <div className="course-info">
                    <p className="category">Web Dev</p>
                    <h3 className="title">Front-end Developer</h3>
                    <p className="price">$128</p>

                    <div className="details-row">
                        <span>⏰ 32hr 30min</span>
                        <span>📘 34 Courses</span>
                        <span>🛒 150 Sales</span>
                    </div>

                    <button className="join-btn">Join Course</button>
                    </div>
                </div>

                <div className="box">
                    <img src="\public\img5.jpg" alt="img" className="img2"></img>
                    <div className="course-info">
                    <p className="category">Web Dev</p>
                    <h3 className="title">MERN Stack</h3>
                    <p className="price">$238</p>

                    <div className="details-row">
                        <span>⏰ 42hr 30min</span>
                        <span>📘 24 Courses</span>
                        <span>🛒 250 Sales</span>
                    </div>

                    <button className="join-btn">Join Course</button>
                    </div>
                </div>
            </div>
            <section className="learning-section">
        <div className="learning-experience-outerbox">

          <h2 className="title">
            Premium <span>Learning</span> Experience
          </h2>

          <div className="learning-experience-innerbox">

            <div className="upper-box">
              <div className="upperbox-left">
                <img src="\img6.jpeg" className="image" />
                <div className="text-block">
                  <h3 className="subtitle">Easily Accessible</h3>
                  <p className="description">
                    Learning will feel very comfortable with Courslab
                  </p>
                </div>
              </div>

              <div className="upperbox-right">
                <img src="./img7.jpeg" className="image" />
                <div className="text-block">
                  <h3 className="subtitle">Fun learning experience</h3>
                  <p className="description">
                    Experience learning through activities and smart interactions
                  </p>
                </div>
              </div>
            </div>

            <div className="lower-box">
              <div className="lowerbox-left">
                <img src="./img8.jpeg" className="image" />
                <div className="text-block">
                  <h3 className="subtitle">Personalized Learning Journey</h3>
                  <p className="description">
                    Get tailored recommendations and a custom learning path
                  </p>
                </div>
              </div>

              <div className="lowerbox-right">
                <img src="./img9.jpeg" className="image" />
                <div className="text-block">
                  <h3 className="subtitle">Learn Anytime, Anywhere</h3>
                  <p className="description">
                    Your courses stay with you — study at your own pace
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="newsletter-box">

          <div className="decor-left1"></div>
          <div className="decor-left2"></div>
          <div className="decor-right1"></div>
          <div className="decor-right2"></div>

          <div className="content">
            <h2 className="heading">Subscribe to our newsletter</h2>
            <p className="sub">Lorem Ipsum is simply dummy text of the printing.</p>

        <div className="subscribe-input">
        <input type="text" placeholder="Email Address" className="email-input" />
        <button className="sign-btn">Sign in</button>
        </div>
        </div>

        </div>
      </section>
    
<footer className="footer">
  <div className="footer-content">

    <div className="footer-left">
      <img src="./logo.jpeg" alt="Ipsum Logo" className="footer-logo" />
    </div>

    <div className="footer-right">
      <img src="./instagram.jpeg" className="social-icon" alt="Instagram" />
      <img src="./facebook.jpeg" className="social-icon" alt="Facebook" />
      <img src="./youtube.jpeg" className="social-icon" alt="YouTube" />
    </div>

  </div>

  <hr className="footer-divider" />

<div className="footer-bottom">
  <p className="copyright">
    Copyright © 2025 Velora. All rights reserved 
    <span className="policy-links">Privacy Policy   Terms of Use</span>
  </p>
</div>

</footer>
        </SmartChoice>
       );
};
export default Smart;