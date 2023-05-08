import React, { useEffect, useState } from "react";

import Predmet from "./Predmet";

export default function PredmetiApp() {
    const [predmeti, setPredmeti] = useState([]);

    useEffect(() => {
        let cancel = false;

        const getPredmeti = async () => {
            try {
                const rezultat = await fetch("http://localhost:8080/api/v1/predmeti");

                if (rezultat.ok) {
                    let p = await rezultat.json();
                    if (!cancel) {
                        setPredmeti(p);
                    }
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

    return (
        <div>
            {predmeti.map((predmet) => <Predmet key={predmet.predmet_id} predmet={predmet} />)}
        </div>
    );
}
