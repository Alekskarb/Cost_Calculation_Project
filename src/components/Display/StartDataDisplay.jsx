import React from 'react';
import '../../App.css';

class StartDataDisplay extends React.Component {

    state= {
        length: '',
        width: '',
        height: 2.5,
        floorage: ''
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
    heightValue =(e)=> {
        let value = +e.currentTarget.value;
        this.setState({height: value});
    // this.props.heightValue(value)
    }

    render() {
        return <div className={'startData'}>
<div>
    <select name="" id="">
        <option value="">Please, select</option>
        <option value="1">standard</option>
        <option value="2">premium</option>
        <option value="3">VIP</option>
    </select>
    {/*<form action="">*/}
    {/*    <input type="radio" name='levelsPerfect' value={'standard'} placeholder={'standard'}/>*/}
    {/*    <input type="radio" name='levelsPerfect' value={'premium'} placeholder={'premium'}/>*/}
    {/*    <input type="radio" name='levelsPerfect' value={'VIP'} placeholder={'VIP'}/>*/}
    {/*</form>*/}
</div>
            <div>
                <input type="number" value={this.state.width} placeholder={'width room'}
                       onChange={this.widthValue} step={0.1}
                    />
                <input type="number" value={this.state.length} placeholder={'length room'} name={'length'}
                       onChange={this.lengthValue} step={0.1}
                    />
                <input type="number" value={this.state.height} placeholder={'height room'}
                    onChange={this.heightValue} step={0.01}
                />
                <input type="number" value={this.state.length*this.state.width}
                       // onChange={()=> this.state.length*this.state.width}
                       placeholder={'floor area'}/>
            </div>


        </div>
    }
}

export default StartDataDisplay;
