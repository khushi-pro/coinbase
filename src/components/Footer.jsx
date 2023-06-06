import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";
export default function Footer() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const learnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto waller",
    "How to send crypto",
  ];
  const supportLinks = [
    "Help center",
    "Contact us",
    "Create account",
    "ID verification",
    "Account information",
    "Payment methods",
    "Account access",
    "Supported crypto",
    "Supported countries",
    "Status",
  ];


  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
  return (
    <Foot className="flex column gap">
      <div className="upper-footer">
        <div className=" flex column gap-1">
          <div className="brand">
            <h2>Coinbase</h2>
          </div>
          <div className="address margin-right">
            <p>548 Market St, San Francisco, CA 94104, United States</p>
          </div>
          <div className="info">
            <span>T : +1-202-555-0184 </span>
            <span>{MdEmail}</span>
            <span>hello@coinbase.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {learnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Support</h3>
          </div>
          <ul className="flex column gap-half">
            {supportLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="col1">
          <span>&copy; Coinbase clone by @khushi.pro</span>
        </div>
        <div className="col2 flex a-center gap-2 margin-right-1">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className="cards">
            <img src={cards} alt="cards" />
          </span>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 4rem;
 
    .info{
      margin-top: 2rem;
      line-height: 1.6rem;
    }
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -25rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .lower-footer {
      grid-template-columns: 1fr;
      gap: 2rem;

      .col2{
        margin-right: 4rem;
        font-size: 2rem;
      }
      
    }
    .spacemen {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
        margin-left: 4rem;
      }
    }
  }
`;