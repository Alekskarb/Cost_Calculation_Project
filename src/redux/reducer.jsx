const SET_LENGTH_VALUE = 'SET_LENGTH_VALUE';
const SET_WIDTH_VALUE = 'SET_WIDTH_VALUE';
const SET_HEIGHT_VALUE = 'SET_HEIGHT_VALUE';
const SET_FLOORAGE_VALUE = 'SET_FLOORAGE_VALUE';
const SET_LEVEL_VALUE = 'SET_LEVEL_VALUE';
const SET_NAVIGATION = 'SET_NAVIGATION';

let initialState = {
    numberStep: 1,
    stepNumber: 'step1',
    stepName: ['',
        'Add Your Room Data',
        'Add finishings works',
        'Select additional works',
        'The cost of work',
    ],
    steps: 'Add Your Room Data',
    isConditionsTrue: true,
    length: '',
    width: '',
    height: '',
    square: '',
    coefficient: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LENGTH_VALUE:
            return {
                ...state, length: action.value,
                square: state.width && action.value* state.width
            };
        case SET_WIDTH_VALUE:
            return {
                ...state, width: action.value,
                square: state.length && action.value* state.length
            };
        case SET_HEIGHT_VALUE:
            return {
                ...state, height: action.value
            };
        // case SET_FLOORAGE_VALUE:
        //     debugger
        //     return {
        //         ...state, square: action.value
        //     };
        case SET_LEVEL_VALUE:
            debugger
            return {
                ...state, coefficient: action.value
            };
        case SET_NAVIGATION:
            debugger
            return {
                ...state, numberStep: action.num, stepNumber: `step${action.num}`,
                steps: state.stepName[action.num].toString()
                    // find(el,i, stepName)=> el[i] === el[action.num]

            }
    }
    return state
};

export const lengthValueAC = (value) => ({type: SET_LENGTH_VALUE, value});
export const widthValueAC = (value) => ({type: SET_WIDTH_VALUE, value});
export const heightValueAC = (value) => ({type: SET_HEIGHT_VALUE, value});
export const squareValueAC = (value) => ({type: SET_FLOORAGE_VALUE, value});
export const levelValueAC = (value) => ({type: SET_LEVEL_VALUE, value});
export const pressButtonAC = (num) => ({type: SET_NAVIGATION, num});

