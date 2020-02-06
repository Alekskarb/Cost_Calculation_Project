import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink} from "react-router-dom";

class NavigationPanel extends React.Component {
    render() {
        return <div className={style.navigationText}>

            <NavLink to={`/${this.props.stepNumber}`} activeClassName={''}>
                {`${this.props.stepNumber}: ${this.props.stepName}`}
            </NavLink>

        </div>
    }
}

export default NavigationPanel;
