import React from 'react';
import '../../App.css';
import StartDataDisplay from "./StartDataDisplay";
import FinishingWorksDisplay from "./FinishingWorksDisplay";
import AdditionalWorksDisplay from "./AdditionalWorksDisplay";
import CalculationDisplay from "./CalculationDisplay";
import style from '../Display/Display.module.css'
import {Route} from "react-router-dom";

function Display(props) {
    return <div className={style.display}>
        <Route path='step#1' component={StartDataDisplay}
               stepName={props.numberNavigation}/>
        <Route component={FinishingWorksDisplay}/>
        <Route component={AdditionalWorksDisplay}/>
        <Route component={CalculationDisplay}/>
    </div>
}

export default Display;
