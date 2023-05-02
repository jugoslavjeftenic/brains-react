import React, { useEffect, useState } from 'react';

export const T7hook1 = () => {
    const [brojac, setBrojac] = useState(0);

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja ispisuje koliko puta si kliknula/o na dugme.</div>
            <button
                onClick={() => setBrojac(1 + brojac)}
            >Kliknula/o si me {brojac} puta</button>
            <button onClick={() => setBrojac(0)}>Resetuj brojac</button>
        </div>
    );
};

export const T7hook2 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [greske, setGreske] = useState("");

    useEffect(() => {
        const validatePasswordRegex = /(?=.*[A-Z])/;
        setGreske("");
        if (username.length < 5) {
            setGreske("Korisnicko ime mora da ima najmanje 5 karaktera! ");
        }
        if (password.length < 9) {
            setGreske(prevGreske => prevGreske + "Lozinka mora da ima najmanje 9 karaktera! ");
        }
        if (!validatePasswordRegex.test(password)) {
            setGreske(prevGreske => prevGreske + "Lozinka mora da ima najmanje jedno veliko slovo! ");
        }
    }, [username, password]);

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja validira korisnicko ime i lozinku.</div>
            <form>
                <input onChange={e => setUsername(e.target.value)} type='tekst' />
                <input onChange={e => setPassword(e.target.value)} type='password' />
                <div>{greske}</div>
            </form>
        </div>
    );
};

export const T7hook3 = () => {
    const listaOsoba = [
        { id: 1, ime: "Ana", prezime: "Maric" },
        { id: 2, ime: "Ivan", prezime: "Kovacevic" },
        { id: 3, ime: "Petra", prezime: "Novak" },
        { id: 4, ime: "Marko", prezime: "Horvat" },
        { id: 5, ime: "Lana", prezime: "Babic" },
        { id: 6, ime: "Leo", prezime: "Miletic" },
        { id: 7, ime: "Mia", prezime: "Simunovic" },
        { id: 8, ime: "Filip", prezime: "Jankovic" },
        { id: 9, ime: "Ema", prezime: "Knezevic" },
        { id: 10, ime: "Iva", prezime: "Matijasevic" }
    ];

    // const [osobe, setOsobe] = useState(listaOsoba);
    const [pretraga, setPretraga] = useState("");
    const [rezultat, setRezultat] = useState(listaOsoba);

    useEffect(() => {
        setRezultat(listaOsoba);
        setRezultat(prevRezultat => {
            return prevRezultat.filter(o => {
                return o.ime.toLowerCase().includes(pretraga.toLowerCase()) ||
                    o.prezime.toLowerCase().includes(pretraga.toLowerCase());
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pretraga]);

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja pretrazuje korisnike po imenu ili prezimenu</div>
            <form>
                <input onChange={e => setPretraga(e.target.value)} type='text' />
                <div>{rezultat.map(r => {
                    return <div key={r.id}>{r.id} {r.ime} {r.prezime}</div>;
                })}</div>
            </form>
        </div>
    );
};
