import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink, Redirect} from "react-router-dom";

function Navbar(props) {

    return (
        <div className={`${style.item} ${style.active}`}>
            <NavLink to={`/${props.stepNumber}`} activeClassName={style.active}>
                {`step ${props.numberStep}: ${props.steps}`}
            </NavLink>
        </div>)
}

export default Navbar;

