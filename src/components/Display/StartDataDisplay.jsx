import React from 'react';
import style from '../Display/Display.module.css'

class StartDataDisplay extends React.Component {

    state= {
        length: 1,
        width: 1,
        height: 2.4,
        floorage: '',
        levelPerfect: 0,
    }

    lengthValue =(e)=> { let value = +e.currentTarget.value;
        this.setState({length: value});
    // this.props.lengthValue(value)
    }
    widthValue =(e)=> {
        let value = +e.currentTarget.value;
        this.setState({width: value});
    // this.props.widthValue(value)
    }
    floorageValue =(e)=> {
        let square = +e.currentTarget.value;
        this.setState({width: square});
    // this.props.widthValue(value)
    }
    heightValue =(e)=> {
        let value = +e.currentTarget.value;
        this.setState({height: value});
    // this.props.heightValue(  value)
    }
    levelValue =(e)=> {
        let level = +e.currentTarget.value;
        this.setState({levelPerfect: level});
    // this.props.levelValue(level)
    }

    render() {
        return <>
                <h3 className={style.text}>Please, select a type of finishing & {this.props.stepName} </h3>
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
                <input type="number" value={this.state.width} placeholder={'width room'}
                       onChange={this.widthValue} step={0.1}  min="1"
                    />
                <input type="number" value={this.state.length} placeholder={'length room'} name={'length'}
                       onChange={this.lengthValue} step={0.1}  min={1.4}
                    />
                <input type="number" value={this.state.height} placeholder={'height room'}
                    onChange={this.heightValue} step={0.01} min="1"
                />
                <input type="number" value={this.state.length*this.state.width}
                       onChange={this.floorageValue} readOnly={true}
                       placeholder={'floor area'}/>
            </div>
        </div>
        </>
    }
}

export default StartDataDisplay;
