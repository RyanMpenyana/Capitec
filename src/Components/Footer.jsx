import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { CardFlex } from './About'
import { Center } from './Containers'

export const FooterContainer = styled.footer`
  height : auto;

  div{
    height : 100vh;

  }

  @media only screen and (max-width : 500px){
    margin-top: 25px
  }
` 

export const FooterBanner = styled.label`
width : 100%;
background: #00486d;
padding: 66px 10%;
display : flex;
justify-content: space-around;
color : white ;

h1{
    font-size : 42px;
    font-family : helvetica;
}

@media only screen and (max-width : 768px){
    flex-direction : column;
    padding : 24px 5%;
    h1{
        align-self: center;
        font-size : 16px;
        font-family : helvetica;
        margin-bottom : 10px
    }
    
}
`

export const Footer = () => {
    
  return (
    <FooterContainer>
        <FooterBanner>
             <h1>You deserve to bank simpler</h1>
             <Button>Open an account</Button>
        </FooterBanner>
        

    </FooterContainer>
  )
}
