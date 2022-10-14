import { useSelector, useDispatch } from 'react-redux';
import { reset_points, suite, brelan } from './store/actions/actions-types';
import { useState, useEffect } from 'react';

function Statistiques() {

    const { total, nbSuite, nbBrelan } = useSelector(state => state.game.totalResults);

    return (
        <>
            <h1>Vos statistiques :</h1>
            <br/>
            <p>Nombre de suite : {nbSuite}</p>
            <p>Nombre de brelan : {nbBrelan}</p>
            <p>Nombre de pts : {total}</p>
        </>
    )
}

export default Statistiques;