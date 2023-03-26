import { Link } from "react-router-dom";

const Content = () => {
    return (
        <main>
            <h1>Univerzalni primer za React</h1>
            <p>
                Ovaj primer sadrži primere za prekvalifikacioni kurs za React.
                Primeri	su prokomentarisani, i svaki je namerno napravljen da bude onoliko jednostavan koliko je to moguće.
            </p>
            <h2>ZADACI</h2>
            <div className="zadaci_fleks">
                <Link to="/html_assignment"><div> HTML i CSS Zadaci </div></Link>
            </div>
        </main >
    )
}

export default Content;