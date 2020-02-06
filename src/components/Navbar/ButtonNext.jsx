import React from 'react';
import style from '../Navbar/Navigation.module.css';

class ButtonNext extends React.Component {
    state = {
        numberStep: '1',
        stepNumber: `step#${this.numberStep}`,
        stepName: 'Add Data',
        navigateUrl: '/',
        isConditionsTrue: false,

    }

    buttonNextStep = () => {
        this.setState({numberStep: +this.numberStep + 1})
    }

    render() {
        return <div className={style.button}>
            <button onClick={this.buttonNextStep}
                    name={this.state.nextStep}
                    disabled={this.props.isConditionsTrue}>
                NEXT
            </button>
        </div>
    }
}

export default ButtonNext;
