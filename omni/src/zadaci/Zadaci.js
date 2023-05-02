import React from 'react';
import './Zadaci.css';
import T7prvaEksternaKomponenta from './T7prvaEksternaKomponenta';
import T7komponenta1 from './T7komponenta1';
import T7komponenta2 from './T7komponenta2';
import T7kondicional from './T7kondicional';
import T7dogadjaj from './T7dogadjaj';
import { T7hook1, T7hook2, T7hook3 } from './T7hooks';

const T7prvaKomponenta = () => {
    return <div>Zdravo, ja sam interna komponenta.</div>;
};

export default function Zadaci() {
    return (
        <div className='zadaci'>
            <ul>
                <li>T7 - RestAPI, Events, Hooks</li><hr />
                <ul><li><T7hook3 /></li></ul><hr />
                <ul><li><T7hook2 /></li></ul><hr />
                <ul><li><T7hook1 /></li></ul><hr />
                <ul><li><T7dogadjaj /></li></ul><hr />
                <ul><li><T7kondicional /></li></ul><hr />
                <ul><li><T7komponenta2 /></li></ul><hr />
                <ul><li><T7komponenta1 /></li></ul><hr />
                <ul><li><T7prvaEksternaKomponenta /></li></ul><hr />
                <ul><li><T7prvaKomponenta /></li></ul><hr />
            </ul>
        </div>
    );
}
