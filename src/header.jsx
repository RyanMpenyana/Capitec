import React, { useState } from 'react'
import Navbar from './Components/Nav'
import styled from 'styled-components'
import { Button } from './Components/Button'
import { createPortal } from 'react-dom'
// const HeaderContainer = styled.div`
//     padding : 0 15%;

const HeaderContainer = styled.header`
    width:100%;
    display : flex;
    justify-content : center;
    position: sticky;
    top : 0;
    z-index:2;
    // background-color: blue;
    font-family : helvetica;
    flex-direction: column;

    @media screen and (max-width : 430px){
        width : 100%;
        // background : red
    }
    
    `
    const SubNav = styled.nav`
    padding: 0px 5%;
    display : flex;
    justify-content : flex-end;
    width :100%;
    background-color : rgba(247,247,247,.8);
    @media only screen and (max-width : 500px){
        
        justify-content: center
    }
    `
    const SubNavContent = styled.div`
    display : flex;
    width :300px;
    justify-content: space-between;
    padding: 10px 0;
    
    @media only screen and (max-width : 500px){
        width : 100%;
        justify-content: space-around;
        button{
            margin : 0 8px;
            padding: 5px 0;
            
        }
    }
        
`

const Header = () => {
    const [state, setState] = useState(true)

  return (
    createPortal(  <HeaderContainer>
        <Navbar onClick={() => setState(false)}/>
       {!state && <Navbar/>}
         <SubNav>
            <SubNavContent>
            <Button $bgColor='white' $blue $padding={'0 30px'}>
                Get the App
            </Button>
            <Button>
                Switch to Capitec
            </Button>
            </SubNavContent>
        </SubNav>
    </HeaderContainer>, document.getElementById('header'))
  )
}

export default Header