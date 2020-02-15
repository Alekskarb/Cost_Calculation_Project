import React from 'react';
import style from '../Navbar/Navigation.module.css'
import {Redirect} from "react-router-dom";
import Navbar from "./Navbar";

class NavigationPanel extends React.Component {

    render() {

        switch (this.props.numberStep) {
            case 1: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step1'}/>
                        <Navbar  numberStep={this.props.numberStep}
                                 stepNumber={this.props.stepNumber}
                                 steps={this.props.steps}/>
                    </div>)

            }
            case 2: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step2'}/>
                        <Navbar  numberStep={this.props.numberStep}
                                 stepNumber={this.props.stepNumber}
                                 steps={this.props.steps}/>
                    </div>)
            }
            case 3: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step3'}/>
                        <Navbar  numberStep={this.props.numberStep}
                                 stepNumber={this.props.stepNumber}
                                 steps={this.props.steps}/>
                    </div>)
            }
            case 4: {
                return (
                    <div className={`${style.item} ${style.active}`}>
                        <Redirect to={'/step4'}/>
                        <Navbar  numberStep={this.props.numberStep}
                                 stepNumber={this.props.stepNumber}
                                 steps={this.props.steps}/>
                    </div>)
            }
            default: return <Redirect to={'/step1'}/>
        }
    }
    return

}

export default NavigationPanel;

