import React from 'react';
import './Zadaci.css';
import T4prvaEksternaKomponenta from './T4prvaEksternaKomponenta';
import T4komponenta1 from './T4komponenta1';
import T4komponenta2 from './T4komponenta2';
import T4kondicional from './T4kondicional';

const T4prvaKomponenta = () => {
    return <div>Zdravo, ja sam interna komponenta.</div>;
};

export default function Zadaci() {
    return (
        <div className='zadaci'>
            <ul>
                <li>T4 - Javascript strukture podataka</li>
                <ul><li><T4prvaKomponenta /></li></ul>
                <ul><li><T4prvaEksternaKomponenta /></li></ul>
                <ul><li><T4komponenta1 /></li></ul>
                <ul><li><T4komponenta2 /></li></ul>
                <ul><li><T4kondicional /></li></ul>
            </ul>
        </div>
    );
}
