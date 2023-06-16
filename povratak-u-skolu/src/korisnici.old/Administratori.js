import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Administratori = () => {
    const administratori = useLoaderData();
    // console.log(administratori);

    return (
        <div>
            <ol>
                {administratori.map((a) => {
                    return (
                        <li key={a.administrator_id}>{a.korisnickoIme}</li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Administratori;
