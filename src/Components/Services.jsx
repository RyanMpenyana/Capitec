import React from 'react'
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
import { Slider } from './ImageSlider'


const ServiceDiv = styled.div`
    display: grid;
    // justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    margin : 0 0 80px;
    
    p{
        font-size: 16px;
        max-width: 500px
    }
    `
    export const ServiceContainer = styled.div`
    // padding : 0 10x;
    // margin-left: 50px;
    width: 100%;
    // height:10px;
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

    
    `
    const Image = styled.div`
    height : 10
    width : 200px;
    `
    const ServiceContent = styled.div`
    justify-Content : center;
    padding : ${props => props.$customPadding ? '10% 25%' : props.$customPadding };
    img, p{
        margin-bottom:25px
    };
    h2{
        font-size: 42px;
        margin-bottom: 15px;
    }
`

const Services = () => {
  return (
    <Center>
        <SubTitle>
        <h1>Everyone should have access to simplified banking</h1>
        <p>That’s why we offer affordable transactions, the right <strong>type of credit</strong> when you need it, <strong>insurance </strong>for you and your family, and real cash back and <strong>rewards</strong> for good banking behaviour. And you can do it all on our app, anywhere 24/7.</p>
        </SubTitle>
        <ServiceContainer>
        
        <ServiceDiv>
            <ServiceContent $customPadding={true}>
                <img src={One} height={30} alt="icon" />
                <h2>Open an account</h2>
                <p>Switch to Capitec with a selfie and get your card delivered free! Get simplified banking and rewards to help you live better and easily manage it all on our app.</p>
                <Button>Find out more</Button>
            </ServiceContent>
            <Image>
                <img src={GlobalHero} height={500} alt="" />
            </Image>
        </ServiceDiv>
        <Slider  $customPadding={'5% 5%'}>
            <img src={Business} height={300}  alt="img" />
            <ServiceContent>
            <img src={Biz} alt="icon" />
                <h2>Open an account</h2>
                <p>It doesn’t matter if your business is big or small. We have payments, credit, savings and insurance solutions to help you build a successful enterprise.</p>
                <Button>Here's How</Button>
            </ServiceContent>
        </Slider>
        <ServiceDiv >
            <ServiceContent $customPadding>
            <img src={Live} alt="icon" />
                <h2>Open an account</h2>
                <p>Our Live Better rewards have no complicated levels and no fees, so you can get real cash back, partner discounts and easy ways to save your money.</p>
                <Button>I want cash Back</Button>
            </ServiceContent>
            <img src={LiveBetter} width={400} alt="img" />
        </ServiceDiv>
    
        </ServiceContainer>
        </Center>
  )
}

export default Services