import React from 'react';
import CalculationAllWorks from "./CalculationAllWorks";
import CalculationFinishingWorks from "./CalculationFinishingWorks";
import CalculationAdditionalWorks from "./CalculationAdditionalWorks";
import style from '../Footer/Footer.module.css'


class Footer extends React.Component {
    render() {
        return <div className={style.footer}>
            <div className={style.container}>

                <CalculationAllWorks/>
                <CalculationFinishingWorks/>
                <CalculationAdditionalWorks/>

            </div>
        </div>
    }
}

export default Footer;
