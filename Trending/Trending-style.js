import styled from "styled-components";
export const TrendingStyle = styled.div`
  button{

height: 50px;
width: 170px;
border: none;
border-radius: 10px;
color: white;
background-color:#343434;
margin-left: 340px;
}
  .container{
  display: flex;
  justify-content: center;
  }
  .above{
  margin-left:150px;}

  .box{
    width: 510px;
    height: 530px;
    margin: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 20px;
  }

  .box img{
    width: 100%;
    height: 330px;
    border-radius: 20px;
  }

  .box h1{
  font-size: 20px;
  }

  .box .below2{
  display: flex;    
  gap: 20px;
  .p1{
    text-decoration:line-through;
    }
  .smallbox{
  display: flex;
  gap: 8px;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 7px;
    font-size: 12px;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10px;
    
  }
.smallbox{
background-color: #E6F9F2;
}

  .smallbox p,h5{
  color:#05AE74;
  }

  


`;