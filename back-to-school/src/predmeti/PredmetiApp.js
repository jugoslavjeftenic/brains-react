import React, { useEffect, useState } from "react";

import './predmeti.css';
import Predmet from "./Predmet";

export default function PredmetiApp() {
    const [predmetiBackend, setPredmetiBackend] = useState([]);
    const [predmetiFrontend, setPredmetiFrontend] = useState([]);
    const [upit, setUpit] = useState("");

    useEffect(() => {
        let cancel = false;

        const getPredmeti = async () => {
            try {
                const rezultat = await fetch("http://localhost:8080/api/v1/predmeti");
                let p = await rezultat.json();
                if (!cancel) {
                    setPredmetiBackend(p);
                    setPredmetiFrontend(p);
                }
            }
            catch (error) {
                console.log("Doslo je do greske: " + error);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upit]);

    return (
        <div className="predmeti-app-box">
            <div className="pretraga-box">
                <input type="text" placeholder="Traži predmet" value={upit} onChange={(e) => {
                    setUpit(e.target.value);
                }} />
            </div>
            <div className="predmeti-box">
                {predmetiFrontend.map((predmet) => {
                    return <Predmet key={predmet.predmet_id} predmet={predmet} />;
                })}
            </div>
        </div>
    );
}
