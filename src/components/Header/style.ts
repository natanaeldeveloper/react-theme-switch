import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`