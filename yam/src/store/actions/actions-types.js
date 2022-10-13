import { SUITE, BRELAN, RESET_POINTS  } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher
export const suite = () => {
    return {
        type: SUITE
    }
}
export const brelan = () => {
    return {
        type: BRELAN
    }
}
export const reset_points = () => {
    return {
        type: RESET_POINTS
    }
}