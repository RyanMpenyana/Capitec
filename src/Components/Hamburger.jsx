import React, { useState } from 'react'
import styled from 'styled-components'
import Search from './Search'
import Banking from '../assets/internet-banking.svg'

export const Ham_burger = styled.div`

width : 2rem ;
align-content : center;
div {
width : 15px;
height: 2px;
background-color : black;
margin-bottom: 5px;
border-radius:3px;
transition: all 0.2s ease-in;
transform-origin: 1px;

&:nth-child(1){
    transform: ${props => props.$open ? 'rotate(35deg)' : 'rotate(0deg)'}
}
&:nth-child(2){
    opacity :${props => props.$open ? 0 : 1};
}
&:nth-child(3){
    transform: ${props => props.$open ? 'rotate(-35deg)' : 'rotate(0deg)'}
}

};

@media only screen and (max-width: 500px) and (min-width: 375px) {
    display: block;
    top:0;
    z-index : 3000;
    right:10px;
  }
`
const NavDiv = styled.div`
  display: flex;
  align-items:center;
  font-size: 14px;
  
  img{
    margin : 0 10px
  }

`
const MobileNav = styled.div`
  width : 200px;
  display:flex;
  justify-content: space-between;
  align-content: center
`




const Hamburger = () => {
const [isActive, setIsActive] = useState(false)

const modalDisplay = () => {
      if(!isActive){
        setIsActive(true)
        
      }else{
        setIsActive(false)
      }

}

  return (
    <MobileNav>  

         <NavDiv>
            <img src={Banking} width={16} alt="" />
            <p>sign in</p>
         </NavDiv>
        <Search width={''}/>
        <Ham_burger $open={isActive} onClick={() => {
            modalDisplay()

        }}>
            <div/>
            <div/>
            <div/>
        </Ham_burger>
    </MobileNav>
  )
}
export default Hamburger
