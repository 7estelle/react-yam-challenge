import { SET_ITERATION, ROLL_DICES } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher

export const set_iteration = () => {
    return {
        type: SET_ITERATION
    }
};
export const roll_dices = () => {
    return {
        type: ROLL_DICES
    }
}