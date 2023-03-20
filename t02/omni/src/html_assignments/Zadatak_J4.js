/*
Kreirati formu za unos podataka na osnovu slike koja je data u prilogu kada se otvori stranica. 
Zahtevi
    • Ime i vrednost potrebno je izabrati parametre ime i vrednost za elemente forme.
    • Akcija koristiti akciju https://cscie12.dce.harvard.edu/echo
    • Metod koristiti post metod
    • Legenda koristiti skup polja i legende da biste grupisali obrazac u odeljke
    • Labele kreirati labele za sve tekst, radio i checkbox polja
    • Dani i sendviči u redu je navesti sve dane u nedelji kao što to čini papirni obrazac.
      Omogućavanje izbora „Petkom“ dostupnog samo u petak je vrsta potvrde obrasca
      koja je izvan opsega ovog zadatka.
    • Polja za unos:
        • Tekstualno polje za unos imena
        • Radio dugme za here/to go, izbor sendviča i užine
        • Checkbox dugme za izbor hrane sa glutenom i veliki izbor pića
        • Padajući meni za izbor pića
CSS zahtevi:
    - formu dizajnirati po zelji
*/
import slika from './../assets/images/zad4.PNG';
import './zadatak4_css.css';
const Zadatak_J4 = () => {
  return <div>
    <h2> Zadatak 4</h2>
    <div className='zad_container'>
      <div> 
          <p> Slika na osnovu koje treba napraviti formu</p>
          <img src={slika}/>
      </div>
      <div>
      {/* to do: ovde kreirati formu */}
      <p> TO DO: FORMA</p>
    </div>
    </div>
    

   
  </div>
}

export default Zadatak_J4;