import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const TitleContainer = styled.div`
    padding : 0 10px 32px ;
    font-family : helvetica;
    h1{
        font-size: 36px;
        color : #009de0;
        margin-bottom : 32px
    }
    button{
        width: 100%;
    }
`

const Title = () => {
  return (
    <TitleContainer>
        <h1>Simple moments <br /> made better</h1>
        <Button $bgColor='white' $blue={true}>Learn More</Button>
    </TitleContainer>
  )
}

export default Title