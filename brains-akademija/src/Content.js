import { Link } from "react-router-dom";

const Content = () => {
    return (
        <main>
            <h1>React kurs - BRAINS Akademija.</h1>
            <p>
                Dobrodošli na moju stranicu sa urađenim vežbama u okviru frontend modula BRAINS Akademije.
            </p>
            <p>
                Ovde možete pronaći vežbe koje sam uspešno uradio uz pomoć stručnih predavača i mentora u BRAINS Akademiji.
                Kroz ove zadatke sam stekao znanja i veštine u oblasti web developmenta, uključujući HTML i CSS,
                stilizovanje web stranica, korišćenje JavaScript-a za interaktivnost,
                kao i korišćenje React-a za izradu modernih i dinamičnih web aplikacija.
            </p>
            <div className="zadaci_fleks">
                <Link to="/html_assignment"><div> HTML i CSS Zadaci </div></Link>
            </div>
        </main >
    )
}

export default Content;