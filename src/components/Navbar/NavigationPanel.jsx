import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink} from "react-router-dom";

function NavigationPanel(props) {
    return <div className={style.navigationText}>

        <NavLink to={`/${props.stepName}`} activeClassName={''}>
            {`${props.numberStep}: ${props.stepName}`}
        </NavLink>

    </div>
}

export default NavigationPanel;
