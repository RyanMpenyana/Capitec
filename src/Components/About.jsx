import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Services from './Services'
import { CardData } from '../Data'

export const CardFlex = styled.div`
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 500px){
        
        flex-direction: column;

    }
`

const About = () => {
  return (
    <>
    <CardFlex>
        {CardData.map((item, index ) => (
            <Card fontSize={'14px'} key={index}  padding={'60px 34px 28px'} Width={item.Width}  Image={item.Image} description={item.description} sub_heading={item.sub_heading}/>
        ))}
    </CardFlex>
     <ImageSlider/>
     <Services/>
    </>
  )
}

export default About