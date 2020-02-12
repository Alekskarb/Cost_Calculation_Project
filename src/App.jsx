import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
import Navigation from "./components/Navbar/Navigation";
import {Route} from "react-router-dom";
import StartDataDisplay from "./components/Display/StartDataDisplay";
import FinishingWorksDisplay from "./components/Display/FinishingWorksDisplay";
import AdditionalWorksDisplay from "./components/Display/AdditionalWorksDisplay";
import CalculationDisplay from "./components/Display/CalculationDisplay";

class App extends React.Component {

    componentDidMount() {
        return this.state
    };

    render() {
        return <div className={'app-wrapper'}>
            <div className={'wrapper'}>
                <Navigation/>
               <Display/>
                <Footer/>

            </div>
        </div>
    }
}

export default App;
