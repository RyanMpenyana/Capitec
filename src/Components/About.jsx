import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import ImageSlider, { Slider } from './ImageSlider/ImageSlider'
import Services from './Services'
import { CardData } from '../Data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

export const CardFlex = styled.div`
    display: flex;
    justify-content: center;
    padding : 0 10px;
    
    @media only screen and (max-width: 1024px){
        justify-content: center;
        flex-direction: column;
    }
    @media only screen and (max-width: 500px){
        display:flex;
        flex-direction: column;

    }
`


const About = () => {
  return (
    <>
    <CardFlex>
        {CardData.map((item, index ) => (
                <Card fontSize={'14px'} key={index}  padding={'60px 34px 28px'} Width={item.Width} Height={item.Height} Image={item.Image} description={item.description} sub_heading={item.sub_heading}/>
        ))}
    </CardFlex>
     <ImageSlider/>
     <Services/>
    </>
  )
}

export default About