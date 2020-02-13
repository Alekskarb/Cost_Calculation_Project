import React from 'react';
import style from '../Display/Display.module.css'
import {connect} from "react-redux";
import {floorageValueAC, heightValueAC, lengthValueAC, levelValueAC, widthValueAC} from "../../redux/reducer";

class StartDataDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        isDataWright: true
    };


    lengthValue = (e) => {
        let value = +e.currentTarget.value;
        this.setState({length: value});
        this.props.lengthValue(value)
    }
    widthValue = (e) => {
        let value = +e.currentTarget.value;
        this.setState({width: value});
        this.props.widthValue(value)
    };
    floorageValue = (e) => {
        let square = +e.currentTarget.value;
        this.setState({width: square});
        this.props.widthValue(square)
    };
    heightValue = (e) => {
        let value = +e.currentTarget.value;
        this.setState({height: value});
        this.props.heightValue(value)
    };
    levelValue = (e) => {
        let level = +e.currentTarget.value;
        this.setState({levelPerfect: level});
        this.props.levelValue(level)
    };

    render() {
        return <>
            <h3 className={style.text}>Please, {this.props.steps} </h3>
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
                           onChange={this.heightValue} step={0.01} min="1"
                    />
                    <input type="number" value={this.props.length * this.props.width}
                           onChange={this.floorageValue} readOnly={true}
                           placeholder={'floor area'}/>
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
        floorage: state.floorage,
        levelPerfect: state.levelPerfect,
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
        floorageValue: (value) => {
            dispatch(floorageValueAC(value))
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
