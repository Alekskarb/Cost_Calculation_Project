import React from 'react';
import style from '../Navbar/Navigation.module.css'

function ButtonBack() {
    return <div className={style.button}>
        <button onClick={()=> alert('back')}> BACK </button>
    </div>
}

export default ButtonBack;
