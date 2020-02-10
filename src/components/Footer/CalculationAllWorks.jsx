import React from 'react';
import style from '../Footer/Footer.module.css'
import OrderCalculation from "./OrderCalculation";

class CalculationAllWorks extends React.Component {
    render() {
        return <div className={style.clickCalc}>
            <div  className={style.title}> Calculation <br/>All Works </div>
                <OrderCalculation/>

            </div>
    }
}

export default CalculationAllWorks;
