import React from 'react';

const T7komponenta2 = () => {
    const proizvodi = [
        { "id": 1, "name": "Toster", "price": 29.99 },
        { "id": 2, "name": "Mikser", "price": 39.99 },
        { "id": 3, "name": "Šerpa", "price": 24.99 },
        { "id": 4, "name": "Tava", "price": 19.99 },
        { "id": 5, "name": "Pećnica", "price": 349.99 },
        { "id": 6, "name": "Fen za kosu", "price": 34.99 },
        { "id": 7, "name": "Uređaj za vježbanje", "price": 299.99 },
        { "id": 8, "name": "Usisivač", "price": 149.99 },
        { "id": 9, "name": "Lampa", "price": 14.99 },
        { "id": 10, "name": "Mikrovalna pećnica", "price": 99.99 }
    ];

    const Proizvod = ({ proizvod }) => {
        return <tr>
            <td>{proizvod.id}</td>
            <td>{proizvod.name}</td>
            <td>{proizvod.price}</td>
        </tr>;
    };

    return (
        <div>
            <div>Zdravo, ja sam kompleksna komponenta koja vraca tabelu sa proizvodima.</div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime proizvoda</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {proizvodi.map(p => <Proizvod key={p.id} proizvod={p} />)}
                </tbody>
            </table>
        </div>
    );
};

export default T7komponenta2;
