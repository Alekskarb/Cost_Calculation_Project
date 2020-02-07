import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
import Navigation from "./components/Navbar/Navigation";

function App(props) {
    return <div className={'app-wrapper'}>
        <div className={'wrapper'}>

            <Navigation titleNavigation={props.titleNavigation}/>
            <Display/>
            <Footer/>

        </div>
    </div>
}

export default App;
