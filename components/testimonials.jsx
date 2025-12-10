import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./cart";

// ============================================================================
// NEW PREMIUM FRONTEND UI
// ============================================================================

// Outer Layout
const Wrapper = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: #f1f3f8;
  display: flex;
  justify-content: center;
`;

// Card Container
const Container = styled.div`
  width: 90%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 20px;
  padding: 4rem 3rem 3rem 3rem;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  position: relative;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
  }
`;

// Profile Image
const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);

  border: 5px solid #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

// Name
const Name = styled.h2`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
`;

// Job Title
const Job = styled.h3`
  text-align: center;
  margin-top: 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #6366f1; /* soft blue */
`;

// Quote Text
const Quote = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.08rem;
  line-height: 1.7;
  color: #4b5563;
  padding: 0 1rem;
`;

// Navigation Container
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2.2rem;
`;

// Navigation Button
const NavButton = styled.button`
  background: #f1f3f8;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  color: #6b7280;
  cursor: pointer;

  transition: 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #6366f1;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(99, 102, 241, 0.35);
  }
`;

// Surprise Button
const Surprise = styled.button`
  display: block;
  margin: 2rem auto 0 auto;

  background: linear-gradient(135deg, #6366f1, #9490d3ff);
  border: none;
  padding: 0.9rem 3rem;
  border-radius: 50px;

  color: white;
  font-weight: 700;
  font-size: 1.1rem;

  cursor: pointer;
  transition: 0.25s ease;

  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);

  &:hover {
    background: linear-gradient(135deg, #9490d3ff, #6366f1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);
  }
`;

// ============================================================================
// LOGIC + UI
// ============================================================================

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const left = () =>{
    if(index<=0){
    return;
    }
    setIndex(index-1);
  }

  const right = () =>{
    if(index>=reviews.length-1){
    return;
  }
  setIndex(index+1);
  }

  const surprise = () => {
    let r = Math.floor(Math.random() * reviews.length);
    if (r === index) r = (index + 1) % reviews.length;
    setIndex(r);
  };

  const person = reviews[index];

  return (
    <Wrapper>
      <Container>
        <ProfileImg src={person.image} alt={person.name} />

        <Name>{person.name}</Name>
        <Job>{person.job.toUpperCase()}</Job>

        <Quote>“{person.text}”</Quote>

        <Navigation>
          <NavButton onClick={left}>
            <FiChevronLeft />
          </NavButton>

          <NavButton onClick={right}>
            <FiChevronRight />
          </NavButton>
        </Navigation>

        <Surprise onClick={surprise}>Surprise Me</Surprise>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;