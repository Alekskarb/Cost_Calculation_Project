import React from 'react';
import '../../App.css';
import StartDataDisplay from "./StartDataDisplay";
import FinishingWorksDisplay from "./FinishingWorksDisplay";
import AdditionalWorksDisplay from "./AdditionalWorksDisplay";
import CalculationDisplay from "./CalculationDisplay";
import style from './Display.module.css'
import {Route} from "react-router-dom";

function Display() {
    return <div className={style.display}>
        <Route path='/step1' render={()=> <StartDataDisplay/>}
               // component={StartDataDisplay}
        />
        <Route path='/step2' component={FinishingWorksDisplay}/>
        <Route path='/step3' component={AdditionalWorksDisplay}/>
        <Route path='/step4' component={CalculationDisplay}/>
    </div>
}

export default Display;
