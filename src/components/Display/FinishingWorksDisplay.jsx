import React from 'react';
import style from './Display.module.css'

class FinishingWorksDisplay extends React.Component {

    render() {
        return <div className={'finishingWorks'}>
            <div className={style.text}>
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text"/>
                </form>
            </div>
        </div>
    }
}

export default FinishingWorksDisplay;
