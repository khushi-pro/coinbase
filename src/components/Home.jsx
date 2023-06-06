import React from 'react';
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

export default function Home() {
  return (
    <Section className="flex j-center a-center">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              {<img src={badgePercent} alt="percent" />}
            </span>
            Investment made easy!
          </h3>
        </div>
        <div className="title">
          <h1>The Easiest Way to Track Multiple Currencies</h1>
          <div className="description">
            <p className="subdue">
              Market Watchman allows you to monitor your balances, trade without limits, and earn rewards for specific coins.
            </p>
          </div>
          <div className="buttons flex margin-2 gap-1">
            <Button text="Try Now" icon={<FaChevronCircleRight />} />
            <Button text="How it Works?" subduedButton />
          </div>
        </div>
      </div>
      <div className="image margin-left"><img src={home} alt="home" className='margin-2' /></div>
    </Section>
  );
}

const Section = styled.section`

`;
