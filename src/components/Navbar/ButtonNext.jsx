import React from 'react';
import style from  '../Navbar/Navigation.module.css';

class ButtonNext extends React.Component {
    render() {
        return <div className={style.button}>
            <button onClick={()=>this.setState({isShowCase: 2})}
                    disabled={this.props.nextStep}>
                NEXT
            </button>
            </div>
    }
}

export default ButtonNext;
