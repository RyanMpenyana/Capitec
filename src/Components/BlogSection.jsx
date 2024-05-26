import React from 'react'
import Card from './Card'
import { CardFlex } from './About'
import styled from 'styled-components'
import Work from '../assets/workwithus.png'
import MoneyUp from '../assets/moneyup.png'
import Finance from '../assets/financialresults.png'
import { SecondCard } from '../Data'

export const Section = styled.section`
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
`

export const BlogSection = () => {
  return (
    <Section>
        <h1>We believe in giving back and paying it forward</h1>
    <CardFlex>
            {SecondCard.map((item, index) => (
                <Card key={index} more={'Read more'} padding={'35px 30px 30px'} Height={'200px'} Work={item.Image}  sub_heading={item.sub_heading} description={item.description}  Width='100%'  />
            ))}
    </CardFlex>
    </Section>
  )
}
