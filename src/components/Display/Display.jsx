import React from 'react';
import '../../App.css';
import LevelPerfectDisplay from "./LevelPerfectDisplay";
import StartDataDisplay from "./StartDataDisplay";
import FinishingWorksDisplay from "./FinishingWorksDisplay";
import AdditionalWorksDisplay from "./AdditionalWorksDisplay";
import CalculationDisplay from "./CalculationDisplay";

class Display extends React.Component {
    render() {
        return <div className={'display'}>

                <LevelPerfectDisplay/>
                <StartDataDisplay/>
                <FinishingWorksDisplay/>
                <AdditionalWorksDisplay/>
                <CalculationDisplay/>

            </div>
    }
}

export default Display;
