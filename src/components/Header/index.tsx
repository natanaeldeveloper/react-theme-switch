import React from "react";
import Switch from "../Switch";
import { Container } from "./style";

const Header: React.FC<{ toggleTheme: () => void }> = (props) => {
    return (
        <Container>
            Hello World
            <Switch onChange={props.toggleTheme}></Switch>
        </Container>
    );
}

export default Header;