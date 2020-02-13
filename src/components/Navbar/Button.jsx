import React from 'react';

const Button = (props) => {



    return (
                <button className="button" disabled={props.disabledButton} onClick={props.setData} >
                    {props.title}
                </button>
    );
};
export default Button;