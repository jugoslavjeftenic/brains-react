import React, { useEffect, useState } from "react";

import './predmeti.css';
import logo from '../assets/icons/logo.svg';
import { dummyData } from './PredmetiDummy';
import Predmet from "./Predmet";

export default function PredmetiApp() {
    const [predmetiBackend, setPredmetiBackend] = useState([]);
    const [predmetiFrontend, setPredmetiFrontend] = useState([]);
    const [upit, setUpit] = useState("");
    const [ucitavam, setUcitavam] = useState(true);
    const [greska, setGreska] = useState(false);
    const [greskaOpis, setGreskaOpis] = useState("");

    useEffect(() => {
        let cancel = false;

        const getPredmeti = async () => {
            try {
                const rezultat = await fetch("http://localhost:8080/api/v1/predmeti");
                let p = await rezultat.json();
                if (!cancel) {
                    setPredmetiBackend([...p]);
                    setPredmetiFrontend([...p]);
                }
            }
            catch (error) {
                setGreska(true);
                setGreskaOpis(error.message);
                console.error("Doslo je do greske: " + error.message);
                setPredmetiBackend(dummyData);
                setPredmetiFrontend(dummyData);
            }
            finally {
                setUcitavam(false);
            }
        };
        getPredmeti();

        return () => {
            cancel = true;
        };
    }, []);

    useEffect(() => {
        if (upit !== "") {
            setPredmetiFrontend(predmetiBackend.filter(u => {
                return u.naziv.toLowerCase().includes(upit.toLowerCase());
            }));
        } else {
            setPredmetiFrontend(predmetiBackend);
        }
    }, [upit, predmetiBackend]);

    return (
        <div className="predmeti-app-box">
            <div><img src={logo} className="logo" alt="logo" /></div>
            <input className="pretraga-box" type="text" placeholder="Potraži predmet..." value={upit} onChange={(e) => {
                setUpit(e.target.value);
            }} />
            <div className={"predmeti-ucitavam " + (ucitavam ? "" : "ucitano")}>
                Učitavam podatke...
            </div>
            <div className={"predmeti-greska " + (greska ? "greska" : "")}>
                Došlo je do greške prilikom učitavanja podataka!<br />
                (Opis greške: {greskaOpis})<br /><br />
                Učitani su "dummy" podaci.
            </div>
            <div className="predmeti-box">
                {predmetiFrontend.map((predmet) => {
                    return <Predmet key={predmet.predmet_id} predmet={predmet} />;
                })}
            </div>
        </div>
    );
}
