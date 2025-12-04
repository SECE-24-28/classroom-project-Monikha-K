// ...existing code...
import styled from 'styled-components';

export const AptitudeGuruStyle = styled.div`
  
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container1 {
  margin-top:100px;
    text-align: center;
    width:1500px;
    height:400px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
}
  }


  .container1-header1 {
    font-size: 90px;
    color: red;
  }

  .container1-header2 {
    font-size: 35px;
    margin-bottom:0;
    font-weight:superbold;
  }
.container1-italic{
font-size:40px;
color:red;
font-weight:bold;

}




.sub-container1 p{
  font-size:25px;
  line-height:1.5;
  margin-top:80px;
  color:grey;
 
}
 
.button-group-container1 .button1
{
padding:15px 30px;
font-size:25px;
border:none;
font-weight:bold;
border-radius:5px;
margin-right:25px;
}
.button-group-container1 .button2{
padding:15px 30px;
font-size:25px;
border:none;
background-color:red;
color:white;
font-weight:bold;
border-radius:5px;
}
.container3{
 text-align: center;
    width:1500px;
    height:600px;

}
    .container3-sub1 h1{
      font-size:60px;
      font-weight:bold;
}
      .container3-sub1 p{
      line-height:1.8;
      color:grey;
      font-size:25px;
      font-weight:semi-bold;
}
      .container3-sub2 {
        display: flex;
        text-align: left;   
}
        .container3-sub2 .sub2-left h1 {
            font-size:40px;
            color:orange;
        }
        .container3-sub2 .sub2-left p {
        color:grey;
        font-size:23px;
        line-height:2;
}
         .container3-sub2 .sub2-right h1 {
            font-size:40px;
            color:	#20a7db;
        }
        .container3-sub2 .sub2-right p {
        color:grey;
        font-size:23px;
        line-height:2;
         
}
        .container3 .line1{
        padding:2px;
        background-color:lightgrey;
        margin:25px;
        }
        .container4{
        margin-top:1px;
       background-color: #ff3d3dff;
  color: white;
  padding: 15px 25px;
  width: 1550px;
  border-radius: 70px;
  text-align: center;         
  display: flex;             
  align-items: center;        
  justify-content: center;     
  flex-direction: column;      
    
        }
  .container4 h1, .container5 h1{
  font-size:40px;
 margin-bottom:1px;
  }
    .container4 p{
    margin-top:4px;
    font-size:25px;
}
   .container5{
   margin-top:100px;
   text-align: center;             
  align-items: center;        
  justify-content: center;  
  width: 1150px;   
  
   }
  .container5 p{
  font-size:25px;
  font-weight:bold;
  }

  .container6{
    display: flex;
    gap:30px;
    }

    .container6 .box{
    padding:10px;
    border:1px solid lightgrey;
    border-radius:10px;
}
    .container6 .box-up img{
    border:1px solid lightgrey;
}
    .container6 .box-bottom{
    margin:0 10px 0 10px;
}
    .container6 .box-bottom h3{
    font-size:27px;

}
    .container6 .box-bottom p{
    font-size:22px;
    margin:5px 0;
    
}
    .container6 .box-button .b1{
    padding:15px 35px;
    font-size:25px;
    font-weight:bold;
    color:white;
    background-color:red;
    border:none;
    margin-right:15px;
}
    .container6 .box-button .b2{
    padding:15px 35px;
    font-size:25px;
    font-weight:bold;
    color:black;
    background-color:lightgrey;
    border:none;


}

.container6-viewmore{
margin-top:50px;
color:#3d85c6;
}
// .container7 .fullbox{
// display:flex;
// }
// .container7 .fullbox .box{
// }


.container8{
background-color:#fe5757;
color:white;
padding:50px;
display:flex;
align-items:center;

}

.container8 .left{
text-align:left;
align-items:left;
margin-left:100px;
}

.container8 h1{
font-size:65px;
margin-bottom:5px;
font-weight:bold;
}
.container8 p{
font-size:20px;
margin-top:1px;
margin-bottom:1px;
}

.container8 button{
margin-top:20px;
padding: 10px 25px;
font-size:25px;
border:none;
border-radius:10px;

}
.container8 {
positon:absolute;
}
.container8 img{
   margin-left:600px;
   height:400px;
   width:400px;
   border-radius:50%;
   position:relative;
   }   
.container8 .circle1{
background-color:#d55757;
border-radius:50%;
height:450px;
width:450px;
position:relative;
top:790px;
left:650px;

}
.container8 .circle2{
background-color:#d55757;
border-radius:50%;
height:450px;
width:450px;
position:relative;
top:350px;
left:400px;
}
      
}
`;
// ...existing code...