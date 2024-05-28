import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Chevron from '../assets/more-chevron.svg'
import Banking from '../assets/internet-banking.svg'
import Hamburger from '../Components/Hamburger'
import Input from './Input'
const Nav = styled.nav`
    width : inherit;
    display: flex;
    justify-content : space-between;
    background: ${props => props.$NavBackground ? props.$NavBackground : '#ffff'};
    padding: 10px 5%;
    justify-content: ${props =>  props.$end ?  'flex-end' : 'space-between'};
    

    @media only screen and (max-width: 1024px){
        padding: 10px 2%;
    }
    @media only screen and (max-width:768px){

        form{
            display : none ;
        }
    }
`
const Logo = styled.img`
    font-size: 24px;
    width : 132px;
    @media screen and (max-width : 430px){
        width : 100px;
    };
    
`
const UL = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width : 360px;
    width : 100%;
    li > a{
        font-weight : 500;
        text-decoration: none;
        color:#3a3a3a
    }
    @media only screen and (max-width: 768px){
        width : max-content ;
        li{
            display: none;
        }
    }
`

    const MoreButton = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width : 275px;
  
    `
const MoreBtnDiv = styled.div`
    display:flex;
    align-items : center;
    justify-content: space-between;
    width : 60px;

    @media only screen and (max-width:786px){
     display : none;
    }
`
const SignIn = styled.div`
    align-items: center;
     color: #3a3a4a;
    span{
        font-weight: 600 !important;
        &:hover{
            color : #009de0;
        }
    }
    p{
        font-size: 10px;
    }
    
  
`
const BankingDiv = styled.div`
display : flex;

  
`
const Navbar = ({onClick}) => {
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize',  () => {
            setWidth(window.innerWidth)
        })
        return() => {
            window.removeEventListener('resize', window)
        }
    })

  return (
    <>
        <Nav onClick={onClick}> 
            <UL>
                <Logo src="../../public/capitec-logo.svg" alt="" />
                <li><a href="#">Personal</a></li>
                <li><a href='#'>Business</a></li>
            </UL>

                <Input placeholder={'Find ways to bank better'}/>
                {width <= 768 
                ?
                <Hamburger/> :
            <MoreButton>
            <MoreBtnDiv>
               <p>Menu</p>
               <img src={Chevron} alt="" />
            </MoreBtnDiv>

            <BankingDiv>
               <img src={Banking} alt="icon" />
                
             </BankingDiv>
             <SignIn> 
                <span>Online Banking</span> 
                <p>Sign in</p> 
             </SignIn> 
            </MoreButton> 
                }
        </Nav>
      
    </>
  )
}

export default Navbar      
