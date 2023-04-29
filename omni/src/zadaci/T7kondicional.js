import React from 'react';

const korisnici = [
    {
        "id": 1,
        "username": "johndoe",
        "password": "p@ssw0rd",
        "name": "John Doe",
        "role": "USER"
    },
    {
        "id": 2,
        "username": "janedoe",
        "password": "secret",
        "name": "Jane Doe",
        "role": "USER"
    },
    {
        "id": 3,
        "username": "admin1",
        "password": "s3cur3",
        "name": "Admin One",
        "role": "ADMIN"
    },
    {
        "id": 4,
        "username": "alice",
        "password": "myp@ssword",
        "name": "Alice Smith",
        "role": "USER"
    },
    {
        "id": 5,
        "username": "bob",
        "password": "p@55word",
        "name": "Bob Johnson",
        "role": "USER"
    },
    {
        "id": 6,
        "username": "admin2",
        "password": "changeme",
        "name": "Admin Two",
        "role": "ADMIN"
    },
    {
        "id": 7,
        "username": "sarah",
        "password": "hello123",
        "name": "Sarah Lee",
        "role": "USER"
    },
    {
        "id": 8,
        "username": "jim",
        "password": "qwerty",
        "name": "Jim Brown",
        "role": "USER"
    },
    {
        "id": 9,
        "username": "admin3",
        "password": "password123",
        "name": "Admin Three",
        "role": "ADMIN"
    },
    {
        "id": 10,
        "username": "testuser",
        "password": "test123",
        "name": "Test User",
        "role": "USER"
    }
];

const Korisnik = ({ korisnik }) => {
    return <tr>
        <td>{korisnik.id}</td>
        <td>{korisnik.username}</td>
        <td>{korisnik.password}</td>
        <td>{korisnik.role === "ADMIN" ? <em>{korisnik.name}</em> : korisnik.name}</td>
        <td>{korisnik.role}</td>
    </tr>;
};

const T7kondicional = () => {
    return (
        <div>
            Zdravo, ja sam komponenta koja kondicionalno prikazuje elemente.
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>password</th>
                        <th>name</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    {korisnici.map(k => <Korisnik key={k.id} korisnik={k} />)}
                </tbody>
            </table>
        </div>
    );
};

export default T7kondicional;
