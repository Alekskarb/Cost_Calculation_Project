import React from 'react';
import '../../App.css';
import CalculationAllWorks from "./CalculationAllWorks";
import CalculationFinishingWorks from "./CalculationFinishingWorks";
import CalculationAdditionalWorks from "./CalculationAdditionalWorks";

class Footer extends React.Component {
    render() {
        return <div className={'footer'}>
            <div className={'container'}>

                <CalculationAllWorks/>
                <CalculationFinishingWorks/>
                <CalculationAdditionalWorks/>

            </div>
        </div>
    }
}

export default Footer;
