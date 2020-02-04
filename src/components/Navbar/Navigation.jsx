import React from 'react';
import '../../App.css';
import ButtonNext from "./ButtonNext";
import ButtonAdvice from "./ButtonAdvice";
import NavigationPanel from "./NavigationPanel";

class Navigation extends React.Component {
    render() {
        return <div className={'navigation'}>
            <div className={'container'}>

                <ButtonNext/>
                <ButtonAdvice/>
                <NavigationPanel/>

            </div>
        </div>
    }
}

export default Navigation;
