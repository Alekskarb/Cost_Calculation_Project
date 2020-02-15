import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {NavLink, Redirect} from "react-router-dom";

class NavigationPanel extends React.Component {

    render() {

        switch (this.props.numberStep) {
            case 1: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step1'}/>
                        <NavLink to={`/${this.props.stepNumber}`} activeClassName={style.active}>
                            {`step ${this.props.numberStep}: ${this.props.steps}`}
                        </NavLink>
                    </div>)

            }
            case 2: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step2'}/>
                        <NavLink to={`/${this.props.stepNumber}`} activeClassName={style.active}>
                            {`step ${this.props.numberStep}: ${this.props.steps}`}
                        </NavLink>
                    </div>)
            }
            case 3: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step3'}/>
                        <NavLink to={`/${this.props.stepNumber}`} activeClassName={style.active}>
                            {`step ${this.props.numberStep}: ${this.props.steps}`}
                        </NavLink>
                    </div>)
            }
            case 4: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step4'}/>
                        <NavLink to={`/${this.props.stepNumber}`} activeClassName={style.active}>
                            {`step ${this.props.numberStep}: ${this.props.steps}`}
                        </NavLink>
                    </div>)
            }
            default:
                return <Redirect to={'/step3'}/>
        }
    }
}

export default NavigationPanel;

