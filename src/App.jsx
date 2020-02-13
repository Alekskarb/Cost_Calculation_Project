import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
import Navigation from "./components/Navbar/Navigation";

class App extends React.Component {

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
