import React from 'react';
import '../../App.css';
import StartDataDisplay from "./StartDataDisplay";
import FinishingWorksDisplay from "./FinishingWorksDisplay";
import AdditionalWorksDisplay from "./AdditionalWorksDisplay";
import CalculationDisplay from "./CalculationDisplay";
import style from '../Display/Display.module.css'
import {Route} from "react-router-dom";


function Display() {
    return <div className={style.display}>
        <Route path='step#1' component={StartDataDisplay}/>
        <Route path='step#2' component={FinishingWorksDisplay}/>
        <Route path='step#3' component={AdditionalWorksDisplay}/>
        <Route path='step#4' component={CalculationDisplay}/>
    </div>
}

export default Display;
