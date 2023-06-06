import React from 'react';
import styled from "styled-components";
import {AiOutlineMail} from'react-icons/ai';
import Button from './Button';

export default function Newsletter() {
  return (
    <Section className='flex j-between a-center  gap'>
      <div className="title-conatiner flex column gap-1">
        <h2>Newletter</h2>
        <h3>Get 20% discount across all products on your first order</h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-conatiner flex j-center a-center gap-1">
            <AiOutlineMail/>
            <input type=" " placeholder="Enter your e-mail address" />
        </div>
        <Button text="Subscribe"/>
      </div>
    </Section>
  )
}
const Section = styled.section`
margin: 0;
margin-bottom: 8rem;
background-color: var(--dark-background);
padding: 8rem;
.newsletter{
    .input-conatiner{
        background-color: var(--input-background);
        padding: 1rem;
        padding-right: 6rem;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        color: white;

        input{
            background-color: transparent;
            border: none;
            font-size: 1.2rem;
            width: 16rem;
            color: white;
            &:focus{
                outline: none;
            }
        }

    }
}
}
`;