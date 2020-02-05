import React from 'react';
import style from '../Navbar/Navigation.module.css';

class ButtonNext extends React.Component {
    state = {
        nextStep: '',
        name: this.nextStep,
        isConditionsTrue: false
    }

    buttonNextStep = () => {
        this.setState({nextStep: 'step#1'})
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
