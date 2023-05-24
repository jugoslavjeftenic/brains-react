import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

import './korisnici.css';

import Korisnik from './Korisnik';

const Korisnici = () => {
    const korisnici = useLoaderData();
    console.log(korisnici);

    return (
        <div>
            <header className='korisnici-header-container'>
                <div>
                    <select>
                        <option>ID</option>
                    </select>
                    <input type='text' placeholder='Potraži...' />
                    <button>Potraži</button>
                </div>
                <button>
                    <NavLink to='novi-korisnik'>Novi korisnik</NavLink>
                </button>
            </header>
            <div className='korisnici-container'>
                {korisnici.map((k) => <Korisnik key={k.korisnik_id} korisnik={k} />)}
            </div>
        </div >
    );
};

export default Korisnici;
