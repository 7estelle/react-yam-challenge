import { useSelector, useDispatch } from 'react-redux';
import { reset_points, suite, brelan } from '../../store/actions/actions-types';
import { useState, useEffect } from 'react';

function Statistiques() {

    const { total, nbSuite, nbBrelan } = useSelector(state => state.game.totalResults);

    return (
        <>
            <h1>Vos statistiques totales :</h1>
            <br/>
            <p>Nombre de suites : {nbSuite}</p>
            <p>Nombre de brelans : {nbBrelan}</p>
            <p>Nombre de Bitcoins gagnés : {total}</p>
        </>
    )
}

export default Statistiques;