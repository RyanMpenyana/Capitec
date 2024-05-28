import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalHero from '../assets/globalhero.png'
import Business from '../assets/Male.png'
import LiveBetter from '../assets/liveBetter.png'
import { Center } from './Containers'
import { CardFlex } from './About'
import One from '../assets/globalonesvg.svg'
import Live from '../assets/LiveBetter.svg'
import Biz from '../assets/GlobalBiz.svg'
import { Button } from './Button'
import { Slider } from './ImageSlider/ImageSlider'
import Mobile from '../assets/global_one_group_landing.png'
import MobileAd from '../assets/live-better-ad-card.png'


const ServiceDiv = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(2, 1fr);
margin : 0 0 80px;
width : 100%;
max-height : 500px;
    
    p{
        font-size: 16px;
        max-width: 500px
    }
    @media screen and (max-width : 900px){
        margin : 0 0 50px;
        width : 100%;
        padding : 0 35px;
        
        img:nth-child(2){
            align-self : end;
            justify-self: end;
            height : 400px;
            width : 60%;
        }
        
    }
    
    @media screen and (max-width : 430px){
        padding : 0 5px 
    }
    `
    export const ServiceContainer = styled.div`
       padding : 0 10px;
       width: 100%;
    
       
       `
       export const SubTitle = styled.div`
       margin-bottom: 100px;
       padding: 0 12.5%;
       justify-self : center;
       width:100%;
       
       h1{
           margin-bottom:20px;
        };
        strong{
            color: #009de0;
            text-decoration: none;
            font-weight : 600;
            
        }
        @media only screen and (max-width: 500px){
        margin-bottom: 50px;
        padding : 0 15px;
    }

    
    `
 
    const ServiceContent = styled.div`
    width : inherit;
    justify-Content : center;
    padding : ${props => props.$customPadding ? props.$customPadding: '10% 25%'   };
    img, p{
        margin-bottom:25px
    };
    h2{
        justify-Content : space-around;
        font-size: 42px;
        margin-bottom: 15px;
    }

    @media only screen and (max-width : 1024px){
        padding : 10% 10% 0 ;
        
        }

    @media only screen and (max-width : 977px){
        padding : 15% 0px 0 10px;
        img:nth-child(1){
            margin-bottom: 10px;
        }
        h2{
            justify-Content : space-around;
            font-size: 30px;
            margin-bottom: 15px;
            font-weight: 600;
            line-height : 1.2em
        }
      
    }
`

const Services = () => {
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize',  () => {
            setWidth(window.innerWidth)
        })
        return() => {
            window.removeEventListener('resize', window)
        }
    })
  return (
    <>
        <SubTitle>
        <h1>Everyone should have access to simplified banking</h1>
        <p>That’s why we offer affordable transactions, the right <strong>type of credit</strong> when you need it, <strong>insurance </strong>for you and your family, and real cash back and <strong>rewards</strong> for good banking behaviour. And you can do it all on our app, anywhere 24/7.</p>
        </SubTitle>
        <ServiceContainer>
        
        <ServiceDiv>
            <ServiceContent >
                <img src={One} height={30} alt="icon" />
                <h2>Open an account</h2>
                <p>Switch to Capitec with a selfie and get your card delivered free! Get simplified banking and rewards to help you live better and easily manage it all on our app.</p>
                <Button>Find out more</Button>
            </ServiceContent>
            
                <img  src={width <= 900 ? Mobile : GlobalHero} height={width <= 900  ? '100%' : '85%'}  alt="" />
            
        </ServiceDiv>
        <Slider $customPadding={ width <= 500 ? '40px 10px' :'60px'} >
            <img  src={Business} height={300}  alt="img" />
            <ServiceContent $customPadding={ width <= 500 ? '20px 0' :'0px 50px'}>
            <img src={Biz} alt="icon" />
                <h2>Open an account</h2>
                <p>It doesn’t matter if your business is big or small. We have payments, credit, savings and insurance solutions to help you build a successful enterprise.</p>
                <Button>Here's How</Button>
            </ServiceContent>
        </Slider>
        <ServiceDiv >
            <ServiceContent >
            <img src={Live} alt="icon"   height={width <= 500 && '50px'}/>
                <h2>Open an account</h2>
                <p>Our Live Better rewards have no complicated levels and no fees, so you can get real cash back, partner discounts and easy ways to save your money.</p>
                <Button>I want cash Back</Button>
            </ServiceContent>
            <img src={ width <= 900 ? MobileAd : LiveBetter} height={width <= 900  ? '100%' : '100%'} width={'40%'} alt="img" />
        </ServiceDiv>
    
        </ServiceContainer>
        </>
  )
}

export default Services