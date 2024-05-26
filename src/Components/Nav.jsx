import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Chevron from '../assets/more-chevron.svg'
import Banking from '../assets/internet-banking.svg'

import Input from './Input'
import { Search } from './Input'
const Nav = styled.nav`
    width : inherit;
    display: flex;
    justify-content : space-between;
    background: ${props => props.$NavBackground ? props.$NavBackground : '#ffff'};
    padding: 10px;
    justify-content: ${props =>  props.$end ?  'flex-end' : 'space-between'};

`
const Logo = styled.img`
    font-size: 24px;
    width : 132px;
`
const Header = styled.header`
    display : flex;
    justify-content : center;
    position: sticky;
    top : 0;
    z-index:2;

`
const UL = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width : 360px;
    li > a{
        font-weight : 500;
        text-decoration: none;
        color:#3a3a3a
    }
`

    const MoreButton = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width : 275px
    `
    const SubNav = styled.nav`
    display : flex;
    width : 300px;
    justify-content : space-between;
    gap : 10
`




const MoreBtnDiv = styled.div`
    display:flex;
    align-items : center
`
const SignIn = styled.div`
    align-items: center
`
const Navbar = () => {
  return (
    <Header>
           <Nav> 
            <UL>
                <Logo src="../../public/capitec-logo.svg" alt="" />
                <li><a href="#">Personal</a></li>
                <li><a href='#'>Business</a></li>
            </UL>

                <Input placeholder={'Find ways to bank better'}/>

            <MoreButton>
             <MoreBtnDiv>
             <p>Menu</p>
                <Search>
                    <img src={Chevron} alt="" />
                </Search>
             </MoreBtnDiv>
            <div>
                <img src={Banking} alt="icon" />
            </div>
            <SignIn>
                <div>Online Banking</div>
                <p>Sign in</p>
            </SignIn>
            </MoreButton>
           </Nav>
           <Nav $end $NavBackground={'rgba(247,247,247,.8)'}>
                <SubNav>
                    <Button>
                        Get the App
                    </Button>
                    <Button>
                        Switch to Capitec
                    </Button>
                </SubNav>
           </Nav>
    </Header>
  )
}

export default Navbar      
//<nav id='navbar'>
// <div id='services'>
// <img className='logo' src="../../public/capitec-logo.svg" alt="Logo" />

// </div>
// </nav>