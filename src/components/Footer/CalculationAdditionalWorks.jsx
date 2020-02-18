import React from 'react';
import style from '../Footer/Footer.module.css'

class CalculationAdditionalWorks extends React.Component {
    render() {
        return <div className={style.clickCalc}>
            <button className={style.title} disabled={false}>
                Calculation Additional Works
            </button>
        </div>
    }
}

export default CalculationAdditionalWorks;
