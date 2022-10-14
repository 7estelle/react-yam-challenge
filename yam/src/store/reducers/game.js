import { SUITE, BRELAN, RESET_POINTS } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    iteration: 0,
    dice: [0,0,0,0,0],
    gameResults: { // résultats de la partie en cours
        total: 0,
        nbSuite: 0,
        nbBrelan: 0,
    },
    totalResults: { // résultats totaux
        total: 0,
        nbSuite: 0,
        nbBrelan: 0,
    }
}

// points gagnés par type de résultat
const brelanPoints = 5
const suitePoints = 2

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case BRELAN:
            return {
                ...state,
                gameResults: {
                    ...state.gameResults,
                    nbBrelan: state.gameResults.nbBrelan + 1,
                    total: state.gameResults.total + brelanPoints,
                },
                totalResults: {
                    ...state.totalResults,
                    nbBrelan: state.totalResults.nbBrelan + 1,
                    total: state.totalResults.total + brelanPoints,
                }
            }
        case SUITE:
            return {
                ...state,
                gameResults: {
                    ...state.gameResults,
                    nbSuite: state.gameResults.nbSuite + 1,
                    total: state.gameResults.total + suitePoints,
                },
                totalResults: {
                    ...state.totalResults,
                    nbSuite: state.totalResults.nbSuite + 1,
                    total: state.totalResults.total + suitePoints,
                }
            }
        case RESET_POINTS:
            return {
                ...state,
                gameResults: { // on reset les résultats de la partie en cours uniquement
                    ...state.gameResults,
                    nbSuite: 0,
                    nbBrelan: 0,
                    total: 0,
                }
            }
        default:
            return state;
    }
}

export default reducer;