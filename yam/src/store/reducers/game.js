import { SET_ITERATION, ROLL_DICES } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    iteration: 0,
    dice: [0,0,0,0,0],
    results: []
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        // case SET_ITERATION:
        //     return {
        //         ...state,
        //         iteration: action.iteration
        //     }

        case ROLL_DICES:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default reducer;