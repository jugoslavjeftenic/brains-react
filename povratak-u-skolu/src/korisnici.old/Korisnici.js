import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

// import './korisnici.css';

import Korisnik from './Korisnik';

const Korisnici = () => {
    const korisnici = useLoaderData();
    // console.log(korisnici);

    return (
        <div>
            <header className='korisnici-header-container'>
                <div className='korisnici-header-input-container'>
                    <button>Prikaži</button>
                    <select>
                        <option>Sve korisnike</option>
                        <option>ID</option>
                        <option>Ime</option>
                        <option>Prezime</option>
                        <option>Bez uloge</option>
                    </select>
                    <input type='text' placeholder='Traži...' />
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
