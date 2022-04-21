import styled from "styled-components";

export const Button = styled.button`
    background-color: ${ props => props.theme.colors.secundary };
    color: ${ props => props.theme.colors.primary };
    padding: 10px;
    border-radius: 7px;
    font-weight: 600;
    font-family: sans-serif;
`