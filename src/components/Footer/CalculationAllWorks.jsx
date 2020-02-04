import React from 'react';
import '../../App.css';
import OrderCalculation from "./OrderCalculation";

class CalculationAllWorks extends React.Component {
    render() {
        return <div className={'wrapper'}>
            <div className={'calculationAllWorks'}>

                <OrderCalculation/>

            </div>
        </div>
    }
}

export default CalculationAllWorks;
