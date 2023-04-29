import React from 'react';

const T7dogadjaj = () => {
    let vrednost;

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja ispisuje sadrzaj input polja u konzolu</div>
            <input onBlur={e => vrednost = e.target.value} type='text' />
            <button onClick={() => console.log({ vrednost })}>Konzola</button>
        </div>
    );
};

export default T7dogadjaj;
