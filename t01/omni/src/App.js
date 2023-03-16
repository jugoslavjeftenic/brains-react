import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Univerzalni primer za React</h1>
      <p>
        Ovaj primer sadrži primere za prekvalifikacioni kurs za React. Primeri
        su prokomentarisani, i svaki je namerno napravljen da bude onoliko
        jednostavan koliko je to moguće.
      </p>
      <ul>
        <li>Deo 1 - Osnove</li>
        <ul>
          <li>
            <Link to="hello_world">React Hello World</Link>
          </li>
          <li>
            <Link to="html_text">React uvod u HTML - Tekst</Link>
          </li>
          <li>
            <Link to="html_organisation">React uvod u HTML - Organizacija</Link>
          </li>
          <li>
            <Link to="html_image">React uvod u HTML - Slike</Link>
          </li>
          <li>
            <Link to="html_table">React uvod u HTML - Tabele</Link>
          </li>
          <li>
            <Link to="html_form">React uvod u HTML - Forme</Link>
          </li>
          <li>
            <Link to="css_basic">
              React uvod u CSS - Klase, selektori, pravila
            </Link>
          </li>
          <li>
            <Link to="css_text">React uvod u CSS - Modifikacija teksta</Link>
          </li>
          <li>
            <Link to="css_layout">React uvod u CSS - Layout</Link>
          </li>
          <li>
            <Link to="js_osnove">React uvod u JS - Osnove</Link>
          </li>
          <li>
            <Link to="js_usluzne">React uvod u JS - Uslužne klase</Link>
          </li>
          <li>
            <Link to="js_funkcionalno">
              React uvod u JS - Funkcionalno programiranje
            </Link>
          </li>
          <li>
            <Link to="js_objektno">
              React uvod u JS - Objektno orijentisano programiranje
            </Link>
          </li>
        </ul>
        <li> Zadaci </li>
        <ul>
          <li>
            {" "}
            <Link to="html_assignment"> HTML i CSS Zadaci </Link>
          </li>
          <li>
            <Link to="js_assignments">JS zadaci</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default App;
