import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink} from "react-router-dom";

class NavigationPanel extends React.Component {
    render() {
        return <div className={style.navigationText}>

            <NavLink to={'/step1'
                // this.props.nextStep
            } activeClassName={''}>
                step 1: add data
            </NavLink>

        </div>
    }
}

export default NavigationPanel;
