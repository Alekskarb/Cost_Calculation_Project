import React from 'react';
import style from '../Navbar/Navigation.module.css'

function ButtonAdvice() {
    return <div className={style.button}>
        <button onClick={()=> alert('ADVICE')}> ? </button>
        {/*<div className={'adviceFinishing'}>*/}
        {/*    <ul>*/}
        {/*        <li>1</li>*/}
        {/*        <li>2</li>*/}
        {/*        <li>3</li>*/}
        {/*        <li>4</li>*/}
        {/*        <li>5</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}
        {/*<div className={'adviceAdditional'}>*/}
        {/*    <ul>*/}
        {/*        <li>1</li>*/}
        {/*        <li>2</li>*/}
        {/*        <li>3</li>*/}
        {/*        <li>4</li>*/}
        {/*        <li>5</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}
        {/*<div className={'adviceLevels'}>*/}
        {/*    <ul>*/}
        {/*        <li>1</li>*/}
        {/*        <li>2</li>*/}
        {/*        <li>3</li>*/}
        {/*        <li>4</li>*/}
        {/*        <li>5</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}
    </div>
}

export default ButtonAdvice;
