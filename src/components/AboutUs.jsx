import React from 'react'
import styled from "styled-components";
import about from "../assets/about.png";
import { FaChevronCircleRight } from "react-icons/fa";
import Button from "./Button";

 

export default function AboutUs() {
  return <Section className='flex a-center gap'>
      <div className="content flex column gap">
        <div className="title-conatiner flex column j-center a-center gap-1">
            <div className="subtitle subdue">
                <h3> About Us</h3>
            </div>
            <div className="title">
                <h2>Why should you choose Market Watchman?</h2>
            </div>
        </div>
        <div className="flex gap"> 
        <div className="info flex column gap a-start j-start j-center margin-1">
        <p className="subdue margin-2">Easy To Learn Platform</p>
        <p className="subdue margin-2">
            We won’t ask you to link to your bank account, we just want
              everyone to have the opportunity to understand the potential of
              saving and investing for retirement or short term goals. We simply
              do data analytics and simplify the way you look at investment
              assets.
        </p>
        <Button text="Start Earning" icon={<FaChevronCircleRight/>}/>
        </div> 
        <div className="image margin-left">
            <img src={about} alt="about" className='half-width'/>
        </div>
        </div>
      </div>
    </Section>;
}

const Section = styled.section``;