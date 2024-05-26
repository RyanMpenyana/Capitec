import React from 'react'
import styled from 'styled-components'
import Image from '../assets/international.png'
import { ServiceContainer } from './Services'
import { Button } from './Button'

export const Slider = styled.div`
    display : grid;
    grid-template-columns: repeat(2, 1fr);  
    border-radius: 10px;
    background-color: #f7f7f7;
    border : 1.8px solid #D9D9D9;
    margin-bottom : 80px;
    width : 90%;
    margin : 0 auto 80px;
    padding : ${props => props.$customPadding}
    `
    export const SliderContainer = styled.div`
    padding : 60px 80px;
    width: 100%;
    h1, p{
        margin-bottom : 25px
    }

    `
    const SliderImage = styled.img`
    width : 100%;
    height : 400px;
    background-size : cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 10px 0 0;
`


const ImageSlider = () => {
  return (
      
       <Slider>
                <SliderImage src={Image}/>
        <SliderContainer>
               <h1>Take your banking to the next level</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quae at beatae repudiandae deleniti molestias quod qui aspernatur odit veniam?</p>
               <Button>Find out more</Button>
        </SliderContainer>
    </Slider>
     
  )
}

export default ImageSlider