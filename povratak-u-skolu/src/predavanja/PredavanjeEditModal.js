import { useState } from "react";

const PredavanjeEditModal = ({ onCancel, onSubmit, object }) => {
    const [nastavnik, setNastavnik] = useState(object.nastavnik.nastavnik_id);
    const [predmet, setPredmet] = useState(object.predmet.predmet_id);

    return (
        null
    );
};

export default PredavanjeEditModal;
