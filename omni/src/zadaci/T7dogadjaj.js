import React, { useState } from 'react';

const T7dogadjaj = () => {
    const [vrednost, setVrednost] = useState();

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja ispisuje sadrzaj input polja u konzolu</div>
            <input onBlur={e => setVrednost(e.target.value)} type='text' />
            <button onClick={() => console.log({ vrednost })}>Konzola</button>
            <div>Ovde ce se ispisati vrednost preko useState funkcije: {vrednost}</div>
        </div>
    );
};

export default T7dogadjaj;
