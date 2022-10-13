import { SET_ITERATION, SUITE, BRELAN } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    iteration: 0,
    dice: [0,0,0,0,0],
    results: {
        total: 0,
        suite: 0,
        brelan: 0,
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case BRELAN:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;