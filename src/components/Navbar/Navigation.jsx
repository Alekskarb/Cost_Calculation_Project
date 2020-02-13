import React from 'react';
import NavigationPanel from "./NavigationPanel";
import style from '../Navbar/Navigation.module.css'
import Button from "./Button";
import {connect} from "react-redux";
import {pressButtonAC} from "../../redux/reducer";

class Navigation extends React.Component {

    state = {
        numberStep: 1,
        isConditionsTrue: true,
    };

    saveState= ()=>{
        let string = JSON.stringify(this.state);
        localStorage.setItem('calcState', string)
    };
    restoreState= ()=>{
        let  state = {
            numberStep: 1,
            isConditionsTrue: true,
        };
    };

    componentDidMount() {
        return this.restoreState()
    };

    buttonNext = () => {
        if (this.state.isConditionsTrue && this.props.numberStep <= 3) {
            this.setState({
                    numberStep: this.state.numberStep + 1,
                }, () => {
                    this.props.pressButton(this.state.numberStep)
                }
            )
        }
    };

    buttonBack = () => {

        if (this.state.isConditionsTrue && this.state.numberStep > 1) {
            this.setState({
                numberStep: this.state.numberStep - 1,
            },()=> this.props.pressButton(this.state.numberStep))
        }
    };

    pressButton=(num)=> {
        switch (num) {
            case 1:
                return {}
        }

    }

    render() {
        return <div className={style.navigation}>
            <div className={style.container}>

                <Button title={'Back'} setData={this.buttonBack}/>
                <NavigationPanel
                    numberStep={this.props.numberStep}
                    stepNumber={this.props.stepNumber}
                    steps={this.props.steps}
                />
                <Button title={'Next'} setData={this.buttonNext} disabledButton={!this.state.isConditionsTrue}/>

                {/*<ButtonAdvice/>*/}
                <Button title={'Advice'} setData={this.buttonAdvice} />
            </div>
        </div>
    }
}

const mapStateToProps=(state)=> {
    return {
        numberStep: state.numberStep,
        stepNumber: state.stepNumber,
        steps: state.steps,
    }
};
const mapDispatchToProps =(dispatch)=> {
    return {
        pressButton: (num)=> {
            dispatch(pressButtonAC(num))
        }
    }
}
export const NavigationContainer=connect(mapStateToProps, mapDispatchToProps)(Navigation);
export default NavigationContainer;
