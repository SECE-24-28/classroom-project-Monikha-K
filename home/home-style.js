import styled from 'styled-components';

export const HomeStyle = styled.div`

  font-family: 'Inter', sans-serif;

nav{
display:flex;
background-color:white; 
margin:10px;
justify-content:space-between;
align-items:center;
max-height: 50px;
}
 nav img{
 height: 50px;
 width: 150px;
 }
 nav h1{
 color:  #000000cc;
 font-size: 20px;
 font-weight: 600;
 background-color:white;
 padding: 10px 20px;
right:220px;
 position:relative;


 }
  nav a{
    text-decoration: none;
    color: #000000b8;
    font-size: 15px;
    font-weight: 500;
    margin: 0 20px;
  }
    nav .b1{
    background-color:white;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
   
    cursor: pointer;
  }
    nav .b2{
    background-color:#000000b8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    margin: 0 20px;
    cursor: pointer;
  }
    }
  .main{
  display:flex;
  margin:0;
  background-color: #FEF4E9;
  height: 530px;
  }

    .main .right img{
    border-radius:200px 0px 0px 200px;
    height:100%;
    width: 600px;
    margin-left: 150px;
    
    }
    .main .left{
    margin-left: 100px;
    margin-top: 100px;

    }
    .main .left h1{
    font-size: 50px;
    font-weight: 600;
    color: #000000b8;
    margin-bottom: 10px;
    }

    .main .left span{
    color:#F79522;
    }

    .main .left p{
    font-size: 20px;
    font-weight: 500;
    color: #000000df;
    margin-top: 20px;
    margin-bottom: 50px;
    }
    .main .left .b1{
    background-color:#000000b8;
    color: white;
    border: none;
    padding: 15px 50px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    margin-right: 20px;
    }
    .main .left .b2{
    background-color:white;
    color: black;
    border: 1px solid black;
     padding: 15px 50px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    
    }

        
`;
