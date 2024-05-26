import React from 'react'
import styled from 'styled-components'
import Glass from '../assets/magnifying-glass.svg'

const Form = styled.form`
    display:flex;
    align-items: center;
    width :350px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    z-index : 2;
    `

export const InputField = styled.input`
    border-radius: 5px;
    width : 100%;
    border:none;
    height:100%;
    padding :5px 15px;
    font-weight: 500;

    `
    export const Search = styled.button`
    height:100%;
    border: none;
    background : transparent;
    padding : 8px 16px;`

const Input = ({placeholder}) => {
  return (
    <Form id='nav-form'>
            <InputField type="text" placeholder={placeholder} />
            <Search>
                <img src={Glass} alt="" />
            </Search>
            </Form>
  )
}

export default Input