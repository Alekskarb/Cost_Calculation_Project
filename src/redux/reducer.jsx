const SET_LENGTH_VALUE = 'SET_LENGTH_VALUE';

let initialState = {
    numberStep: 1,
    stepNumber: 'step#1',
    stepName: 'Add Your Room Data',
    isConditionsTrue: true,
    length: 1,
    width: 1,
    height: 2.4,
    floorage: '',
    levelPerfect: 0,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LENGTH_VALUE:
            return {...state, length: action.value}
    }
    return state
};

export const lengthValueAC = (value) => ({type: SET_LENGTH_VALUE, value});

