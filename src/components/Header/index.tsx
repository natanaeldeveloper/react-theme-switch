import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from "react-switch";
import { shade } from 'polished';

import { Container } from './styles';

type Props = {
    toggleTheme: () => void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { title, colors } = useContext(ThemeContext);

    return (
        <Container>
            Theme Switch
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={40}
                handleDiameter={25}
                onColor={shade(0.60, colors.secundary)}
                offColor={shade(0.15, colors.primary)}
                
            />
        </Container>
    )
}

export default Header;