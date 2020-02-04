import React from 'react';
import style from '../Footer/Footer.module.css'
import OrderCalculation from "./OrderCalculation";

class CalculationAllWorks extends React.Component {
    render() {
        return <div className={style.calculationAllWorks}>
            <h3> CalculationAllWorks </h3>
                <OrderCalculation/>

            </div>
    }
}

export default CalculationAllWorks;
