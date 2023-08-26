import React from 'react';

import "../styles/components/Switch.scss";

interface Props {
    option_1: string;
    option_2: string;
    isState: boolean;
    setIsState: React.Dispatch<React.SetStateAction<boolean>>;
}

function Switch(props: Props) {
    return (
        <div className="switch">
            <button className={props.isState ? "active" : ""} onClick={() => props.setIsState(true)} disabled={props.isState}>{props.option_1}</button>
            <button className={!props.isState ? "active" : ""} onClick={() => props.setIsState(false)} disabled={!props.isState}>{props.option_2}</button>
        </div>
    );
}

export default Switch;