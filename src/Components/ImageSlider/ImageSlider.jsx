import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Sliderjs } from './SliderData';



export const Slider = styled.div`
    display : grid;
    grid-template-columns: repeat(2, 1fr);  
    border-radius: 10px;
    background-color: #f7f7f7;
    border : 1.8px solid #D9D9D9;
    margin-bottom : 80px;
    width : 90%;
    margin : 0 auto 80px;
    padding : ${props => props.$customPadding};
    
    @media (max-width: 1024px){
        display : flex;
        flex-direction : column;
    }
    @media screen and (max-width : 500px){
        width : 95%;
        display : flex;
        flex-direction : column;
        margin-top : 32px
    }
    
    `
export const SliderContainer = styled.div`
padding : 60px 80px;
    width: 100%;
    h1, p{
        margin-bottom : 25px
    }
    @media screen and (max-width : 500px){
        padding : 40px 20px;
        h1{
            font-size : 20px
        }
    }
    `
    const SliderImage = styled.div`
    width : 100%;
    height : 400px;
    background-image : url(${props => props.$background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 0 0;
    
    @media (max-width: 1024px){
        height : 200px
    }
    @media screen and (max-width: 500px){
        border-radius: 10px 10px 0 0;
    }
`


const ImageSlider = () => {
    return (
        <Splide options={{
            autoplay: true,
            rewind: true,
            breakpoints: {
                600: {
                    arrows: false
                }
            }
        }
        }>
            {Sliderjs.map((item, index) => (
                <SplideSlide key={index}>
                    <Slider>
                        <SliderImage $background={item.Image} />
                        <SliderContainer>
                            <h1>Take your banking to the next level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quae at beatae repudiandae deleniti molestias quod qui aspernatur odit veniam?</p>
                            <Button>Find out more</Button>
                        </SliderContainer>
                    </Slider>
                </SplideSlide>
            ))}
        </Splide>

    )
}

export default ImageSlider