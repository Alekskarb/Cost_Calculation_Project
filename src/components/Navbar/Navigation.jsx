import React from 'react';
import NavigationPanel from "./NavigationPanel";
import style from '../Navbar/Navigation.module.css'
import ButtonAdvice from "./ButtonAdvice";
import Button from "./Button";

class Navigation extends React.Component {
    render() {
        return <div className={style.navigation}>
            <div className={style.container}>
                <Button title={'Back'} setData={this.setData}/>
                <NavigationPanel numberNavigation={this.props.numberNavigation} titleNavigation={this.props.titleNavigation}/>
                <Button title={'Next'} setData={this.setData}/>
                <Button title={'Advice'} setData={this.setData}/>
                {/*<ButtonAdvice/>*/}
            </div>
        </div>
    }
}

export default Navigation;
