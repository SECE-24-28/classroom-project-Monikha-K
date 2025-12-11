import styled from 'styled-components';

const SmartChoice = styled.div`
  font-family:Roboto;
  .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top:5px;
        padding-bottom:5px;
        padding-right:30px;
        border-bottom:10px;
        padding-left:100px;
        font-size:20px;
        box-shadow:100px;
        length:80px;
  }
  .option{
        display:flex;
        gap:40px;
        font-family:Roboto;
   }
  .sign{
        border-radius:40px;
        border-top:20 px; 
        margin-bottom:10px;  
        background-color:#425461;
        width:170px;
        length:5px;
  }
  .signin{
        color:white;
        text-align:center;
        align-item:center;
   }
        .body{
        background-color:#FDF8EE;
        display:flex;
        padding-Top:114px;
        padding-Right:120px;
        padding-Bottom:114px;
        padding-Left:120px;
        gap:45px;
        
        }
        .head{
        font-size:56px;
        font-family:Roboto;
        line-height:0%;
        }
        .bold{
        color:#0094FF;
        }
        .para{
        font-size:16px;
        font-family:Roboto;
        width:700px;
        line-height:200%;
        color:#8A8A8A;
        }
        .img{
        height:50px;
        width:119px;
        }
        .search{
        border-radius:40px;
        background-color:white;
        display:flex;
        width:550px;
        gap:200px;
        }
        .cont{
        border-radius:40px;
        background-color:#425461;
        color:white;
        width:200px;
        text-align:center;
        height:70px;
        margin-top:10px;
        margin-right:10px;
        }
        .conti{
        text-align:center;
        font-size:20px;
        position:relative;
        bottom:15px;
        }
        .searchcourse{
        font-size:15px;
        width:150px;
        }
        .track{
        text-align:center;
        Weight:600;
        font-size:32px;
        }
        .lorem{
        text-align:center;
        color:#8A8A8A;
        line-height:0%;
        }
        .img2{
        width:354.67px;
        height:205px;
        }
        .ourtrack{
        display:flex;
        gap:120px;
        align-item:center;
        justify-content:center;
        margin-top:70px;
        }
        .box{
        box-shadow:10px;
        shadow-color:#00000040;
        padding:10px 10px 10px 10px;
        border-size:30px;
        border-bottom:20px;
        }
        .courses-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.box {
  width: 300px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.course-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.course-info {
  padding: 15px;
}

.category {
  color: gray;
  font-size: 14px;
}

.title {
  font-size: 18px;
  margin: 8px 0;
  font-weight: 600;
}

.price {
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

.details-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;
  margin-bottom: 15px;
}

.join-btn {
  width: 100%;
  padding: 10px;
  border: none;
  background: #3b4d61;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s ease;
}

.join-btn:hover {
  background: #2c3947;
}
.learning-section {
    margin-left: 0;
    background: #FDF8EE;
    padding: 40px;
  }

  .learning-experience-outerbox {
    width: 100%;
    margin: 0 auto 70px auto;
  }

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 80px;
    color: #211d1dff;
    font-family: sans-serif;
  }

  .title span {
    color: #008cff;
    font-weight: 800;
  }

  .learning-experience-innerbox {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .upper-box,
  .lower-box {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 180px;
  }

  .upperbox-left,
  .upperbox-right,
  .lowerbox-left,
  .lowerbox-right {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 500px;
  }

  .image {
    width: 100px;
    height: 95px;
    border-radius: 20px;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }

  .subtitle {
    font-size: 24px;
    font-weight: 700;
    color: #0c0c0c;
    font-family: "Poppins", sans-serif;
    margin: 0;
  }

  .description {
    font-size: 18px;
    color: #555;
    font-weight: 400;
    margin: 0;
    width: 490px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 1000px) {
    .upper-box,
    .lower-box {
      flex-direction: column;
      gap: 50px;
    }

    .upperbox-left,
    .upperbox-right,
    .lowerbox-left,
    .lowerbox-right {
      width: 100%;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .text-block {
      align-items: center;
    }
  }

  .subscribe-section {
    width: 100%;
    background: #ffffff;
    padding: 80px 0;
    display: flex;
    justify-content: center;
  }

  .subscribe {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
  }

  .newsletter-box {
    width: 1000px;
    margin: 0 auto;
    background: #3f4b52;
    padding: 80px 50px;
    border-radius: 16px;
    position: relative;
    color: #fff;
    text-align: center;
  }

  .decor-left1,
  .decor-right1,
  .decor-left2,
  .decor-right2 {
    position: absolute;
    border: 3px solid #ffffff;
    border-radius: 50%;
  }

  .decor-left1 {
    width: 200px;
    height: 200px;
    top: -80px;
    left: -3px;
  }

  .decor-right1 {
    width: 200px;
    height: 200px;
    top: -70px;
    right: -5px;
  }

  .decor-left2 {
    width: 200px;
    height: 250px;
    top: -70px;
    left: -60px;
  }

  .decor-right2 {
    width: 200px;
    height: 250px;
    top: -70px;
    right: -50px;
  }

  .heading {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 14px;
  }

  .sub {
    font-size: 16px;
    opacity: 0.9;
    margin-bottom: 40px;
  }

.subscribe-input {
  width: 550px;
  height: 54px;
  background: #ffffff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 3px solid #ffffff;
  overflow: hidden;
  margin: 0 auto;                /* centers horizontally */
}

.email-input {
  flex: 1;
  height: 100%;
  border: none;
  padding: 0 20px;
  font-size: 18px;
  color: #666;
  outline: none;
  border-radius: 100px;
}

.email-input::placeholder {
  color: #bababa;
  font-size: 18px;
}

.sign-btn {
  height: 100%;
  padding: 0 26px;
  border: none;
  background: #3f4b52;
  color: #ffffff;
  font-size: 18px;
  border-radius: 100px;
  cursor: pointer;
}

.footer {
  padding-left:50px;
  padding-right:50px;
  padding-top:50px;
  padding-bottom: 50px;
  background: #dcdcdc;
  padding: 100px 200x;
  color: #222;
  font-family: "Poppins", sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  width: 150px;
  height: auto;
}

.footer-right {
  display: flex;
  gap: 30px;
}

.social-icon {
  width: 40px;
  height: 35px;
}

.social-icon:hover {
  opacity: 1;
}

.footer-divider {
  border: none;
  height: 1px;
  background: #bfbfbf;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;   /* left + right alignment */
  align-items: center;              /* vertical centering */
  width: 100%;
  margin-top: 20px;
}

.copyright {
  font-size: 15px;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Right-aligned Policy & Terms */
.policy-links {
  margin-left: auto;                /* pushes it to right */
  font-weight: 600;
  color: #222;
  display: flex;
  gap: 20px;                        /* space between the links */
  cursor: pointer;
}

.policy-links span:hover {
  color: #000;
}


.copyright {
  font-size: 15px;
  font-weight: 400;
}


`;

export default SmartChoice;