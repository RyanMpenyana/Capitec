import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.$bgColor ? props.$bgColor : '#009de0'};
    padding: ${props => props.$padding ? props.$padding : '10px 20px'};
    font-size : 14px;
    border: 2px solid #009de0;
    border-radius: 5px;
    color: ${props => props.$blue ? '#009de0' : 'white'};

    transition: .5s ease;
    
    &:hover{
        background-color: #0477BF;
        border: 2px solid  transparent;
        color : white;
    };

    @media only screen and (max-width : 500px){
        width : 100%;
        
    }
`
