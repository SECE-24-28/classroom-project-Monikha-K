import styled from "styled-components";
export const ExploreStyle = styled.div`

.explore{
display:flex;
flex-direction: column;
}

.above{
margin-left:150px;
}
.below{
display:flex;
justify-content: center;
}

.below .box{
margin-left: 20px;
    }
.below .img1{
height: 250px;
width: 350px;
// border-radius: 50px;
}
.below img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.below .des{
display: flex;
justify-content: space-between;
align-items: center;

height: 20px;
width: 300px;
padding: 15px;
border-radius: 20px;
position: relative;
top: -70px;
left: 12px;
background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px); 
}

.below .circle{
height: 30px;
width: 30px;
border-radius: 50%;
background-color: #000000ff;
}

.below h1{
color: white;
font-size: 22px;
position: relative;
top: -13px;
left: 5px;
font-weight: 700;
}
   
   
`;