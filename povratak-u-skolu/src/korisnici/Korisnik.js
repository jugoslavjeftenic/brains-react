import React from 'react';

const Korisnik = ({ korisnik }) => {
    return (
        <div className='card-container'>
            <div className='card-title'>{korisnik.ime} <span>{korisnik.prezime}</span></div>
            <div className='card-content'>ID: {korisnik.korisnik_id}</div>
            <div className='card-content'>JMBG: {korisnik.jmbg}</div>
        </div>
    );
};
export default Korisnik;
