import styled from "styled-components";

export const CloneItemStyle = styled.div`

/* -------------------- TITLE -------------------- */
.title {
  margin-top: 40px;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  font-family: Inter, sans-serif;
  margin-bottom: 40px;
  color: #000;
}

.highlight {
  color: #f52424;
}

/* -------------------- MAIN WRAPPER -------------------- */
.h {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Glance {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

/* -------------------- ROWS -------------------- */
.Glance1,
.Glance2 {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

/* -------------------- CARD (FIXED) -------------------- */
.Glance1-1,
.Glance1-2,
.Glance2-1,
.Glance2-2 {
  width: 550px;
  height: 170px;
  border-radius: 20px;
  padding: 25px 30px;
  padding-bottom: 40px;  /* space for image */
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
  position: relative;

  display: flex;
  flex-direction: column;     /* text stays at top */
  justify-content: flex-start; /* NO space at top */
}

/* -------------------- TEXT -------------------- */
.content p {
  font-size: 20px;
  color: #444;
  margin-bottom: 12px;
  font-weight: 500;
}

.content h5 {
  font-size: 36px;
  font-weight: 800;
  margin: 0;
  color: #000;
}

/* -------------------- IMAGE (BOTTOM RIGHT) -------------------- */
.image {
  position: relative;
  
    bottom:50px;
    left:380px;
}

.image img {
  width: 120px;
  height: auto;
}

/* -------------------- COLORS -------------------- */
.Glance1-1 {
  background-color: #ffe1e6;  /* pink */
}

.Glance1-2 {
  background-color: #e2f0fa;  /* blue */
}

.Glance2-1 {
  background-color: #deffec;  /* mint */
}

.Glance2-2 {
  background-color: #ffe7c9;  /* peach */
}



}
`;