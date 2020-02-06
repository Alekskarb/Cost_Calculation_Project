import React from 'react';
import '../../App.css';
import StartDataDisplay from "./StartDataDisplay";
import FinishingWorksDisplay from "./FinishingWorksDisplay";
import AdditionalWorksDisplay from "./AdditionalWorksDisplay";
import CalculationDisplay from "./CalculationDisplay";
import style from '../Display/Display.module.css'
import {Route} from "react-router-dom";

class Display extends React.Component {
    render() {
        return <div className={style.display}>

        <Route path={`/${this.props.stepNumber}`} component={StartDataDisplay} stepName={this.props.stepName}
        />
        <Route component={FinishingWorksDisplay}
        />
        <Route component={AdditionalWorksDisplay}
        />
        <Route component={CalculationDisplay}
        />

            </div>
    }
}

export default Display;
