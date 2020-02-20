import React from 'react';
// import style from './StartDataDisplay.module.css'
import style from "./Display.module.css";
import {connect} from "react-redux";
import {heightValueAC, inputErrorAC, lengthValueAC, levelValueAC, widthValueAC} from "../../redux/reducer";

class StartDataDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        isDataRight: true,
        // inputError: true,
    };

    saveState = () => {
        let string = JSON.stringify(this.state);
        localStorage.setItem('calcState', string)
    };
    restoreState = () => {
        let state = {
            numberStep: 1,
            isDataRight: true,
        };
        let toObject = localStorage.getItem('calcState');
        if (state !== null) {
            state = JSON.parse(toObject)
        }
    };
    componentDidMount() {
        return this.restoreState()
    };

    lengthValue = (e) => {
        let value = +e.currentTarget.value;
        this.props.lengthValue(value)
    };
    widthValue = (e) => {
        let value = +e.currentTarget.value;
        this.props.widthValue(value)
    };
    heightValue = (e) => {
        let value = +e.currentTarget.value;
        this.props.heightValue(value)
    };
    levelValue = (e) => {
        let level = +e.currentTarget.value;
        this.props.levelValue(level)
    };

    render() {
        let widthError = this.props.widthError ? `${style.error}` : '';
        let lengthError = this.props.lengthError ? `${style.error}` : '';
        let heightError = this.props.heightError ? `${style.error}` : '';
        return <>
            <div className={style.text}> {this.props.steps} </div>
            <div className={'startData'}>
                <div>
                    <select onChange={this.levelValue}>
                        <option value={null}>Please, select</option>
                        <option value={1}>standard</option>
                        <option value={2}>premium</option>
                        <option value={3}>VIP</option>
                    </select>
                </div>
                <div>
                    <input type="number" value={this.props.width} placeholder={'width room'}
                           onChange={this.widthValue} step={0.1} className={widthError}
                    />
                    <input type="number" value={this.props.length} placeholder={'length room'} name={'length'}
                           onChange={this.lengthValue} step={0.1}  className={lengthError}
                    />
                    <input type="number" value={this.props.height} placeholder={'height room'}
                           onChange={this.heightValue} step={0.01}  className={heightError}
                    />
                    <input type="number" value={this.props.square} placeholder={'floor area'}
                           readOnly={true}
                    />
                </div>
            </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        steps: state.steps,
        length: state.length,
        width: state.width,
        height: state.height,
        square: state.square,
        coefficient: state.coefficient,
        widthError: state.widthError,
        lengthError: state.lengthError,
        heightError: state.heightError,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        lengthValue: (value) => {
            dispatch(lengthValueAC(value))
        },
        widthValue: (value) => {
            dispatch(widthValueAC(value))
        },
        heightValue: (value) => {
            dispatch(heightValueAC(value))
        },
        levelValue: (value) => {
            dispatch(levelValueAC(value))
        },
    }
};

export const StartDataDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(StartDataDisplay);
export default StartDataDisplayContainer;
