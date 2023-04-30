import React, { useState } from 'react';

export const T7hook1 = () => {
    const [brojac, setBrojac] = useState(0);

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja ispisuje koliko puta si kliknula/o na dugme.</div>
            <button
                onClick={e => setBrojac(1 + brojac)}
            >Kliknula/o si me {brojac} puta</button>
            <button onClick={e => setBrojac(0)}>Resetuj brojac</button>
        </div>
    );
};
