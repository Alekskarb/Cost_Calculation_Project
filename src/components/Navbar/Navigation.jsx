import React from 'react';
import NavigationPanel from "./NavigationPanel";
import style from '../Navbar/Navigation.module.css'
import Button from "./Button";
import {connect} from "react-redux";
import {pressButtonAC} from "../../redux/reducer";

class Navigation extends React.Component {

    state = {
        numberStep: 1,
        stepNumber: '',
        stepName: 'Add Your Room Data',
        isConditionsTrue: true,
    };

    buttonNext = () => {
        if (this.state.isConditionsTrue && this.props.numberStep <= 3) {
            this.setState({
                    numberStep: this.props.numberStep + 1,
                }, () => {
                    this.pressButton(this.props.numberStep)
                }
            )
        }
    };

    buttonBack = () => {

        if (this.state.isConditionsTrue && this.state.numberStep > 1) {
            this.setState({
                numberStep: this.state.numberStep - 1,
            },()=> this.pressButton(this.state.numberStep))
        }
    };

    // pressButton = (number) => {
    //
    //     switch (number) {
    //         case 1:
    //             this.setState({
    //                     numberStep: number,
    //                     stepNumber: `step#${number}`,
    //                     stepName: 'Add Your Room Data'
    //                 }, ()=>this.props.pressButton(this.state.numberStep, this.state.stepNumber, this.state.stepName )
    //             );
    //             break;
    //         case 2:
    //
    //             this.setState({
    //                     numberStep: number,
    //                     stepNumber: `step#${number}`,
    //                     stepName: 'Add finishings works'
    //                 }, ()=>this.props.pressButton(this.state.numberStep, this.state.stepNumber, this.state.stepName )
    //             );
    //             break;
    //         case 3:
    //             debugger
    //             this.setState({
    //                     numberStep: number,
    //                     stepNumber: `step#${number}`,
    //                     stepName: 'Select additional works'
    //                 }, ()=>this.props.pressButton(this.state.numberStep, this.state.stepNumber, this.state.stepName )
    //             );
    //             break;
    //         case 4:
    //             this.setState({
    //                     numberStep: number,
    //                     stepNumber: `step#${number}`,
    //                     stepName: 'The cost of work'
    //                 }, ()=>this.props.pressButton(this.state.numberStep, this.state.stepNumber, this.state.stepName )
    //             );
    //             break;
    //         default:
    //             return this.state;
    //     }
    // };

    componentDidMount() {
        return this.props.state
    };

    render() {
        return <div className={style.navigation}>
            <div className={style.container}>

                <Button title={'Back'} setData={this.buttonBack}/>
                <NavigationPanel numberStep={this.state.numberStep}
                                 stepName={this.state.stepName}/>
                <Button title={'Next'} setData={this.buttonNext}/>

                {/*<ButtonAdvice/>*/}
                <Button title={'Advice'} setData={this.buttonAdvice}/>
            </div>
        </div>
    }
}

const mapStateToProps=(state)=> {
    return {
        numberStep: state.numberStep,
        stepNumber: state.stepNumber,
        stepName: state.stepName,
    }
};
const mapDispatchToProps =(dispatch)=> {
    return {
        pressButton: (num, step, name)=> {
            dispatch(pressButtonAC(num, step, name))
        }
    }
}
export const NavigationContainer=connect(mapStateToProps, mapDispatchToProps)(Navigation);
export default NavigationContainer;
