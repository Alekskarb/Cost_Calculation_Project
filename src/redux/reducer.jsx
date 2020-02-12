const SET_LENGTH_VALUE = 'SET_LENGTH_VALUE';
const SET_NAVIGATION = 'SET_NAVIGATION';

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
            return {
                ...state, length: action.value}
        case SET_NAVIGATION:
            return {
                ...state, numberStep: action.num, stepNumber: action.step, stepName: action.name}
    }
    return state
};

export const lengthValueAC = (value) => ({type: SET_LENGTH_VALUE, value});
export const pressButtonAC = (num, step, name) => ({type: SET_NAVIGATION, num, step, name});

