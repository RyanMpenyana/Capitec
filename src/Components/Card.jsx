import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    border : 1px solid #D9D9D9;
    display: flex;
    flex-direction: column;
    // padding : ${props => !props.$cardPadding ? '30px 34px 28px' : props.$cardPadding };
    color: #3a3a3a;
    max-width : 350px;
    min-height: 235px;
    border-radius : 8px;
    margin : 10px 15px;
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
    
    @media only screen and (max-width : 1024px){
        max-width : 720px;
        width: 100%;
        align-self : center;
        margin : 0 0 35px;
    }

    @media only screen and (max-width : 500px){
        max-width : 430px;
        margin : 10px ;
        
    }

    
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
    height : 100%
    

    
    `
    const H3 = styled.h3`
    font-size : 18px;
    margin-bottom: 10px;
    
`
const P = styled.p`
    line-height :1.5rem;
    font-size : ${props => props.$fontSize ? props.$fontSize : '16px'};

`
const ImageBg = styled.div`
background-image :url( ${props => props.$background});
background-size: cover;
background-position: center;
// height: 100%;
// width : 100%;
height : 250px
`


const Card = ({Image, Width, padding, Height, sub_heading, description, Work, fontSize, more, bg}) => {
  return (
           <>
           
    <CardDiv >
          {bg && <ImageBg $background={bg}></ImageBg>}
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