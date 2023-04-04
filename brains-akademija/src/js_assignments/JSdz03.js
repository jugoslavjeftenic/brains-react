import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Napraviti mini program za logovanje korisnika. Korisnika predstaviti kao objekat koji ima atribute: " +
    "ime, prezime, korisničko ime i šifru. Sve korisnike smestiti u mapu gde je ključ korisničko ime, " +
    "a vrednost objekat koji predstavlja korisnika. Zatim napraviti dve promenljive koje predstavljaju korisničko ime i lozinku " +
    "i dodeliti im neku vrednost. Na osnovu korisničkog imena i lozinke pokušati da ulogujete korisnika, " +
    "ako je logovanje uspešno ispisati podatke o korisniku, a ako nije napisati poruku -Pogrešno korisničko ime ili šifra-.";

const korisnici = [
    {
        ime: "Marko",
        prezime: "Marković",
        korisnickoIme: "mare",
        sifra: "1234",
    },
    {
        ime: "Petar",
        prezime: "Petrović",
        korisnickoIme: "perica",
        sifra: "1234",
    },
    {
        ime: "Srećko",
        prezime: "Srećković",
        korisnickoIme: "srele",
        sifra: "1234",
    }
]

const mapaKorisnika = new Map();
for (let korisnik of korisnici) {
    mapaKorisnika.set(korisnik.korisnickoIme, korisnik);
}

const arrayToString = (inputArray) => {
    let output = ``;
    for (let element of inputArray) {
        output += `${JSON.stringify(element)}\n`;
    }
    return output;
}

const korisnickoIme = "srele";
const lozinka = "1234";

const login = (mapaKorisnika, korisnickoIme, lozinka) => {
    if (mapaKorisnika.has(korisnickoIme)) {
        const korisnik = mapaKorisnika.get(korisnickoIme);
        if (korisnik.sifra === lozinka) {
            return JSON.stringify(korisnik);
        } else {
            return "Pogrešna šifra!";
        }
    } else {
        return "Pogrešno korisničko ime!";
    }
}

const JSdz03 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak.toString()}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code">
                    <code>
                        <div>korisnici:<br />{arrayToString(korisnici)}</div>
                        <div>uloguj korisnika: {korisnickoIme.toString()}/{lozinka.toString()}</div>
                    </code>
                </div>
                <div className="tekst">Metoda</div>
                <div className="code">
                    <pre>
                        <code>{login.toString()}</code>
                    </pre>
                </div>
                <div className="tekst">Izlaz</div>
                <div className="code"><code>ulogovan korisnik: {login(mapaKorisnika, korisnickoIme, lozinka).toString()}</code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz03;
