import React from "react";

import { Button } from './style';

type SwitchProps = {
    onChange: () => void,
    checked?: boolean,
    offColor?: string,
    onColor?: string,
}

const Switch: React.FC<SwitchProps> = (props) => {

    return (
        <Button onClick={props.onChange}>
            Theme
        </Button>
    )
}

export default Switch;