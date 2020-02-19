import React from 'react';
import style from './StartDataDisplay.module.css'
import {connect} from "react-redux";
import {
    squareValueAC,
    heightValueAC,
    lengthValueAC,
    levelValueAC,
    widthValueAC,
    inputErrorAC
} from "../../redux/reducer";

class StartDataDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        isDataRight: true,
        inputError: true,
    };

    // saveState = () => {
    //     let string = JSON.stringify(this.state);
    //     localStorage.setItem('calcState', string)
    // };
    // restoreState = () => {
    //     let state = {
    //         numberStep: 1,
    //         isDataRight: true,
    //     };
    //     let toObject = localStorage.getItem('calcState');
    //     if (state !== null) {
    //         state = JSON.parse(toObject)
    //     }
    // };
    // componentDidMount() {
    //     return this.restoreState()
    // };

    lengthValue = (e) => {
        let value = +e.currentTarget.value;
        this.props.lengthValue(value)
    }
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
    inputError = () => {
        this.props.inputError();
    };
    widthError = this.props.inputError ? `${style.error}` : '';
    // lengthError = this.props.inputError ? 'error' : '';
    // heightError = this.props.inputError ? 'error' : '';

    render() {

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
                           onChange={this.widthValue} step={0.1} className={this.widthError}
                        // className={`${style.this.widthError}`}
                    />
                    <input type="number" value={this.props.length} placeholder={'length room'} name={'length'}
                           onChange={this.lengthValue} step={0.1} min={1.4} className={this.widthError}
                         // className={lengthError}
                    />
                    <input type="number" value={this.props.height} placeholder={'height room'}
                           onChange={this.heightValue} step={0.01} min="1.6"
                        // className={heightError}
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
        inputError: state.inputError,
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
        squareValue: (value) => {
            dispatch(squareValueAC(value))
        },
        heightValue: (value) => {
            dispatch(heightValueAC(value))
        },
        levelValue: (value) => {
            dispatch(levelValueAC(value))
        },
        inputError: (boolean) => {
            dispatch(inputErrorAC(boolean))
        }
    }
}

export const StartDataDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(StartDataDisplay);
export default StartDataDisplayContainer;
