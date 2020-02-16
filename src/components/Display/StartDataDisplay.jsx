import React from 'react';
import style from '../Display/Display.module.css'
import {connect} from "react-redux";
import {squareValueAC, heightValueAC, lengthValueAC, levelValueAC, widthValueAC} from "../../redux/reducer";

class StartDataDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        isDataRight: true
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
        this.setState({length: value}, () => this.saveState());
        this.props.lengthValue(value)
    }
    widthValue = (e) => {
        let value = +e.currentTarget.value;
        this.setState({width: value}, () => this.saveState());
        this.props.widthValue(value)
    };

    squareValue = (e) => {
        debugger
        let square = this.props.length * this.props.width;
        this.setState({square: square}, () => this.saveState());
        this.props.squareValue(square)
    };
    heightValue = (e) => {
        let value = +e.currentTarget.value;
        this.setState({height: value}, () => this.saveState());
        this.props.heightValue(value)
    };
    levelValue = (e) => {
        let level = +e.currentTarget.value;
        this.setState({coefficient: level}, () => this.saveState());
        this.props.levelValue(level)
    };

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
                           onChange={this.widthValue} step={0.1} min="1"
                    />
                    <input type="number" value={this.props.length} placeholder={'length room'} name={'length'}
                           onChange={this.lengthValue} step={0.1} min={1.4}
                    />
                    <input type="number" value={this.props.height} placeholder={'height room'}
                           onChange={this.heightValue} step={0.01} min="1.6"
                    />
                    <input type="number" value={this.props.square} placeholder={'floor area'}
                           onChange={this.squareValue} readOnly={true}
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
    }
}

export const StartDataDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(StartDataDisplay);
export default StartDataDisplayContainer;
