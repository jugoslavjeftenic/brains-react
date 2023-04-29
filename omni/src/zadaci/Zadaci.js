import React from 'react';
import './Zadaci.css';
import T7prvaEksternaKomponenta from './T7prvaEksternaKomponenta';
import T7komponenta1 from './T7komponenta1';
import T7komponenta2 from './T7komponenta2';
import T7kondicional from './T7kondicional';
import T7dogadjaj from './T7dogadjaj';

const T7prvaKomponenta = () => {
    return <div>Zdravo, ja sam interna komponenta.</div>;
};

export default function Zadaci() {
    return (
        <div className='zadaci'>
            <ul>
                <li>T7 - RestAPI, Events, Hooks</li>
                <ul><li><T7dogadjaj /></li></ul>
                <ul><li><T7kondicional /></li></ul>
                <ul><li><T7komponenta2 /></li></ul>
                <ul><li><T7komponenta1 /></li></ul>
                <ul><li><T7prvaEksternaKomponenta /></li></ul>
                <ul><li><T7prvaKomponenta /></li></ul>
            </ul>
        </div>
    );
}
