import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Nastavnici = () => {
    const nastavnici = useLoaderData();
    // console.log(nastavnici);

    return (
        <div>
            <ol>
                {nastavnici.map((n) => {
                    return (
                        <li key={n.nastavnik_id}>{n.korisnickoIme}</li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Nastavnici;
