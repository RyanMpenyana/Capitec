import React from 'react'
import Glass from '../assets/magnifying-glass.svg'
import styled from 'styled-components'

export const SearchIcon = styled.button`
height:100%;
border: none;
background : transparent;
display : flex;
align-self : center;
padding : 16px;
`


const Search = () => {
  return (
    <>
             <SearchIcon>
                <img src={Glass} alt="" />
            </SearchIcon>
    </>
  )
}

export default Search