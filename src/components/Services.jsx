import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Services() {
  const servicesData = [
    {
      image: service1,
      title: "Manage your portfolio",
      description:
        "Buy and sell popular digital currencies, track in one place.",
    },
    {
      image: service2,
      title: "Vault Protection",
      description:
        "For added security, store your funds in a vault with time delayed withdrawals.",
    },
    {
      image: service3,
      title: "Mobile apps",
      description:
        "Stay on top of the markets with the Coinbase app for Android/ iOS.",
    },
  ];
  return <Section className="flex column j-center a-center gap">
    <div className="title-container flex column gap-1">
        <div className="title text-center">
            <h2>Start your trading journey with us!</h2>
        </div>
        <div className="subtitle text-center subdue margin-top">
            <h3>Market Watchmen has a variety of features that makes it the best
            place to start trading</h3>
        </div>
       <div className="services flex j-center a-center gap margin-top-2">
         {servicesData.map(({image,title,description})=>{
            return (
                <div className="service text-center flex column gap-1" key={title}>
                    <div className="image">
                        <img src={image} alt="service" />
                    </div>
                    <h3 className="title">{title}</h3>
                    <p className="description subdue">{description}</p>
                </div>
            )
         })}
        </div> 
    </div>

  </Section>
}
const Section = styled.section`
.services{
    padding: 0 5rem;
    gap: 10rem;
    .service{
        .title{
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        .description{
            font-size: 0.9rem;
            font-weight: semi-bold;
            line-height: 1.3rem;
        }
    }
}`;