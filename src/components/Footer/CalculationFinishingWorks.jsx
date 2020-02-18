import React from 'react';
import style from '../Footer/Footer.module.css'

class CalculationFinishingWorks extends React.Component {
    render() {
        return <div className={style.clickCalc}>
            <button className={style.title} disabled={false}>
                Calculation Finishing Works </button>
            </div>
    }
}

export default CalculationFinishingWorks;
