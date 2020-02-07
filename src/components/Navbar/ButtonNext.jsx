import React from 'react';
import style from '../Navbar/Navigation.module.css';

class ButtonNext extends React.Component {


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
