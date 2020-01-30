import React from 'react';
import './App.css';
import LevelPerfect from "./LevelPerfect";
import StartData from "./StartData";
import FinishingWorks from "./FinishingWorks";
import AdditionalWorks from "./AdditionalWorks";
import CostCalculation from "./CostCalculation";
import Advice from "./Advice";

class App extends React.Component {
    render() {
        return <div className={'startData'}>
            <div>

                <LevelPerfect/>
                <StartData/>
                <FinishingWorks/>
                <AdditionalWorks/>
                <CostCalculation/>
                <Advice/>

            </div>
        </div>
    }
}

export default App;
