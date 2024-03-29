/*
Zadatak 2: Na stranici ispisati sledecu pesmu. 

Опрости, мајко света, опрости,
што наших гора пожалих бор,
на ком се, устук свакоје злости,
блаженој теби подиже двор;
презри, небеснице, врело милости,
што ти земаљски сагреши створ:
Кајан ти љубим пречисте скуте,
Santa Maria della Salute.

Зар није лепше носит лепоту,
сводова твојих постати стуб,
него грејући светску грехоту
у пепо спалит срце и луб;
тонут о броду, трнут у плоту,
ђаволу јелу а врагу дуб?
Зар није лепше вековат у те,
Santa Maria della Salute?

Iznad stihova pesme treba da pise:
    - Santa Maria della Salute
    - Laza Kostic, treba da bude link, klikom na link otvori se stranica o pesniku
Ispod pesme staviti sliku crkve Santa Maria della Salute


CSS DEO ZADATKA (ovo radite tek kada budemo uradili CSS)
Zahtevi:
    - tekst pesme i slika treba da se prikazu jedno pored drugog, sa leve strane tekst pesme, a sa desne slika
    - tekst pesme centrirati i uokviriti okvirom debljine 2px koji je obojen po zelji
    - recenicu 'Santa Maria della Salute?' obojiti bojom po izboru i slova podebljati 
    - ime pesnika i naziv pesme takodje centrirati i podebljati
    - ime pesnika prikazati zelenom bojom
*/

import './Zadatak02_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika_santa_maria_della_salut from "./../assets/images/santa_maria_della_salut.jpg";

const Zadatak_J02 = () => {
    return (
        <div className="wrapper html_zad02">
            <Header />
            <div className="naslov">
                <h1>Santa Maria della Salute</h1>

                <a href="https://sr.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B7%D0%B0_%D0%9A%D0%BE%D1%81%D1%82%D0%B8%D1%9B" target="_blank" rel="noreferrer">Лаза Костић</a>
            </div>
            <div className="sadrzaj">
                <div className="tekst">
                    <em>
                        <p>
                            Зар није лепше носит лепоту,<br />
                            сводова твојих постати стуб,<br />
                            него грејући светску грехоту<br />
                            у пепо спалит срце и луб;<br />
                            тонут о броду, трнут у плоту,<br />
                            ђаволу јелу а врагу дуб?<br />
                            Зар није лепше вековат у те,<br />
                            <span className="akcenat">Santa Maria della Salute?</span>
                        </p>

                        <p>
                            Зар није лепше носит лепоту,<br />
                            сводова твојих постати стуб,<br />
                            него грејући светску грехоту<br />
                            у пепо спалит срце и луб;<br />
                            тонут о броду, трнут у плоту,<br />
                            ђаволу јелу а врагу дуб?<br />
                            Зар није лепше вековат у те,<br />
                            <span className="akcenat">Santa Maria della Salute?</span>
                        </p>
                    </em>
                </div>
                <div className="slika">
                    <img src={slika_santa_maria_della_salut} width={500} alt="Santa Maria della Salute" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Zadatak_J02;
