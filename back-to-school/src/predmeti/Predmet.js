import React from 'react';

export default function Predmet({ predmet }) {
    return (
        <div>
            <div>{predmet.naziv}</div>
            <div>ID: {predmet.predmet_id}</div>
            <div>razred: {predmet.razred}</div>
            <div>fond: {predmet.fondCasova}</div>
            <a href='https://google.com' target='blank'><div>Prikaži</div></a>
        </div>
    );
}
