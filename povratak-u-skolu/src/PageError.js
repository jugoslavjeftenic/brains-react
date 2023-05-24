import { useRouteError } from "react-router-dom";

const PageError = () => {
    const error = useRouteError();
    return <div>
        <h1>Greška!</h1>
        <p>Došlo je do greške prilikom preuzimanja podataka!</p>
        <p>
            {error.status === 404 ? "Tražena stranica ne postoji" : "Interna greška sa oznakom: " + error.message}
        </p>
    </div>;
};

export default PageError;