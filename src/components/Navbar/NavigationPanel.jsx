import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink} from "react-router-dom";

class NavigationPanel extends React.Component {

    componentDidMount() {
        return this.props.state
    }

    render() {
        return <div className={`${style.item} ${style.active}`}>

            <NavLink to={`/${this.props.stepNumber}`} activeClassName={style.active} >
                {`step ${this.props.numberStep}: ${this.props.steps}`}
            </NavLink>

        </div>
    }
}

export default NavigationPanel;
