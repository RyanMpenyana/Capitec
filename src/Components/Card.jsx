import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    border : 1px solid #D9D9D9;
    display: flex;
    flex-direction: column;
    // padding : ${props => !props.$cardPadding ? '30px 34px 28px' : props.$cardPadding };
    color: #3a3a3a;
    border-radius : 8px;
    // max-height : 435px auto;
    margin : 10px 15px;
    max-width : 350px;
    transition: .1s ease-in ;
    background: linear-gradient(140deg, rgba(109,109,109,0) 0%, rgba(244,244,244,0.5) 57%, rgba(214,214,214,0.5) 100%, rgba(2,0,36,0) 100%);
    justify-content : flex-start;
    margin-bottom: 60px;
    &:hover{
        background: white  ;
        box-shadow:0 30px 60px 0 rgba(187, 187, 187, 0.6);
    }
    img{
        margin-bottom: 10px;
    }
    // h3{
    //     font-size: 18px;
    // }

    
    `
    const CardImage = styled.img`
    border-radius:5px 5px 0 ;
    align-self : flex-start;
    
    `
    const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
    align-self : flex-start;
    padding : ${props => props.$cardPadding};
    // height : 100%
    
    `
    const H3 = styled.h3`
    font-size : 18px;
    margin-bottom: 10px;
    
`
const P = styled.p`
    line-height :1.5rem;
    font-size : ${props => props.$fontSize ? props.$fontSize : '16px'};

`


const Card = ({Image, Width, padding, Height, sub_heading, description, Work, fontSize, more}) => {
  return (
           <>
           
    <CardDiv >
           <div>
            <CardImage src={Work} width={Width} height={Height}  />
           </div>
           <Div $cardPadding={padding}>
           {!Work && <CardImage src={Image} width={Width} height={Height}  /> }
            <H3>{sub_heading}</H3>
            <P $fontSize={fontSize}>{description}</P>
           <a href="">{more}</a>
           </Div>
    </CardDiv>
           </>
  )
}

export default Card