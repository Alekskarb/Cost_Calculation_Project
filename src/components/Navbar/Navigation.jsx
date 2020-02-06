import React from 'react';
import ButtonNext from "./ButtonNext";
import ButtonBack from "./ButtonBack";
import NavigationPanel from "./NavigationPanel";
import style from '../Navbar/Navigation.module.css'
import ButtonAdvice from "./ButtonAdvice";

class Navigation extends React.Component {
    render() {
        return <div className={style.navigation}>
            <div className={style.container}>
                <ButtonBack/>
                <NavigationPanel />
                <ButtonNext/>
                <ButtonAdvice/>
            </div>
        </div>
    }
}

export default Navigation;
