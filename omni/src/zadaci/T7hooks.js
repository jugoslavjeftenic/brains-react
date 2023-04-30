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
