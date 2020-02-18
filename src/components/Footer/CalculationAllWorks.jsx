import React from 'react';
import style from '../Footer/Footer.module.css'
import OrderCalculation from "./OrderCalculation";

class CalculationAllWorks extends React.Component {
    state = {
        isOrderTake: false
    };
    render() {
        return <div className={style.clickCalc}>
            {!this.state.isOrderTake &&
                <button className={style.title} disabled={false}>
                    Calculation <br/>All Works
                </button>}

            {this.state.isOrderTake && <OrderCalculation/>
            }
        </div>
    }
}
export default CalculationAllWorks;
