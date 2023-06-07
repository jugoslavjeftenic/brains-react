import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Predaju = () => {
    const predaju = useLoaderData();
    // console.log(predaju);

    return (
        <div>
            <ol>
                {predaju.map((p) => {
                    return (
                        <li key={p.predaje_id}>{p.predaje_id} {p.nastavnik.korisnickoIme} {p.predmet.naziv}</li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Predaju;
