import React from 'react';

export default function Predmet({ predmet }) {
    const razred = (r) => {
        switch (r) {
            case 1:
                return "I";
            case 2:
                return "II";
            case 3:
                return "III";
            case 4:
                return "IV";
            case 5:
                return "V";
            case 6:
                return "VI";
            case 7:
                return "VII";
            case 8:
                return "VIII";
            default:
                return "greška";
        }
    };

    return (
        <div className='predmet-box'>
            <div className='predmet-name'>{predmet.naziv}</div>
            <div className='predmet-id'>ID: {predmet.predmet_id}</div>
            <div className='predmet-details'>
                <ul>
                    <li>razred: {razred(predmet.razred)}</li>
                    <li>fond časova: {predmet.fondCasova}</li>
                </ul>
            </div>
            <a href='https://google.com' target='blank'>
                <div className='predmet-link'>PRIKAŽI...</div>
            </a>
        </div>
    );
};
