import React from 'react';
import style from '../Navbar/Navigation.module.css';

class ButtonNext extends React.Component {
    state = {
        numberStep: 1,
        stepNumber: `step#1`,
        stepName: 'Add Data',
        isConditionsTrue: true,
    };

    buttonNextStep = () => {if (this.state.isConditionsTrue) {
        this.setState({numberStep: this.state.numberStep + 1, stepNumber: `step#${this.state.numberStep + 1}`, stepName: 'Add finishings works'},
            ()=>this.setState()
        )}
    this.props.numberNavigation(this.state.numberStep);
    this.props.titleNavigation(this.state.stepName)
    };

    render() {
        return <div className={style.button}>
            <button onClick={this.buttonNextStep}
                    disabled={!this.state.isConditionsTrue}>
                NEXT
            </button>
        </div>
    }
}

export default ButtonNext;
