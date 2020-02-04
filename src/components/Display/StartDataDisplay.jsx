import React from 'react';
import '../../App.css';

class StartDataDisplay extends React.Component {
    render() {
        return <div className={'startData'}>
<div>
    <select name="" id="">
        <option value="">Please, select</option>
        <option value="">standard</option>
        <option value="">premium</option>
        <option value="">VIP</option>
    </select>
    {/*<input type="radio" onClick={()=> alert('standard')}/>*/}
    {/*<input type="checkbox" onClick={()=> alert('premium')}/>*/}
    {/*<input type="checkbox" onClick={()=> alert('VIP')}/>*/}
</div>
            <div>
                <input type="number"  value={'100'} onChange={()=> alert('standart')} placeholder={'height '}/>
                <input type="number" onChange={()=> alert('premium')}/>
                <input type="number" onChange={()=> alert('VIP')}/>
                <input type="number" value={'12'}/>
            </div>


        </div>
    }
}

export default StartDataDisplay;
