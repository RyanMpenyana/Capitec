import React from 'react'
import Card from './Card'
import { CardFlex } from './About'
import styled from 'styled-components'
import { SecondCard } from '../Data'

export const Section = styled.section`
padding : 2.2px ;
h1{
   text-align :center;
   justify-self : center;
   font-size : 42px;
   margin-bottom : 32px
}
a{
    color: #009de0;
    text-decoration: none;
    font-weight : 600;
    font-size : 14px;
    align-content: flex-end;
    height: 50px
}

@media only screen and (max-width : 500px){
    h1{
        text-align :center;
        justify-self : center;
        font-size : 30px;
        margin-bottom : 32px;
        font-weight : 600;

     }
}
`

export const BlogSection = () => {
  return (
    <Section>
        <h1>We believe in giving back and paying it forward</h1>
    <CardFlex>
            {SecondCard.map((item, index) => (
                <Card key={index} bg={item.Image} more={'Read more'} padding={'35px 30px 30px'} Height={'200px'} Work={true}   sub_heading={item.sub_heading} description={item.description}  Width='100%'  />
            ))}
    </CardFlex>
    </Section>
  )
}
