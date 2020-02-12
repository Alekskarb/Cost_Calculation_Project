import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink} from "react-router-dom";

function NavigationPanel(props) {
debugger
    return <div className={style.navigationText}>

        <NavLink to={`/${props.stepNumber}`} activeClassName={''}>
            {`step ${props.numberStep}: ${props.steps}`}
        </NavLink>

    </div>
}

export default NavigationPanel;
