import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Napraviti mini program za logovanje korisnika. Korisnika predstaviti kao objekat koji ima atribute: " +
    "ime, prezime, korisničko ime i šifru. Sve korisnike smestiti u mapu gde je ključ korisničko ime, " +
    "a vrednost objekat koji predstavlja korisnika. Zatim napraviti dve promenljive koje predstavljaju korisničko ime i lozinku " +
    "i dodeliti im neku vrednost. Na osnovu korisničkog imena i lozinke pokušati da ulogujete korisnika, " +
    "ako je logovanje uspešno ispisati podatke o korisniku, a ako nije napisati poruku -Pogrešno korisničko ime ili šifra-.";

const kor1 = {
    ime: "Marko",
    prezime: "Marković",
    korisnickoIme: "mare",
    sifra: "1234",
};
const kor2 = {
    ime: "Petar",
    prezime: "Petrović",
    korisnickoIme: "perica",
    sifra: "1234",
};
const kor3 = {
    ime: "Srećko",
    prezime: "Srećković",
    korisnickoIme: "srele",
    sifra: "1234",
};

const mapaKorisnika = new Map();
mapaKorisnika.set(kor1.korisnickoIme, kor1);
mapaKorisnika.set(kor2.korisnickoIme, kor2);
mapaKorisnika.set(kor3.korisnickoIme, kor3);

let korisnickoIme = "srele";
let lozinka = "1234";

const login = (mapaKorisnika, korisnickoIme, lozinka) => {
    if (mapaKorisnika.has(korisnickoIme)) {
        const korisnik = mapaKorisnika.get(korisnickoIme);
        if (korisnik.sifra === lozinka) {
            return korisnik;
        } else {
            return "Pogrešna šifra!";
        }
    } else {
        return "Pogrešno korisničko ime!";
    }
}

const kod = `
const mapaKorisnika = new Map();
mapaKorisnika.set(kor1.korisnickoIme, kor1);
mapaKorisnika.set(kor2.korisnickoIme, kor2);
mapaKorisnika.set(kor3.korisnickoIme, kor3);

let korisnickoIme = "srele";
let lozinka = "1234";

const login = (mapaKorisnika, korisnickoIme, lozinka) => {
    if (mapaKorisnika.has(korisnickoIme)) {
        const korisnik = mapaKorisnika.get(korisnickoIme);
        if (korisnik.sifra === lozinka) {
            return korisnik;
        } else {
            return "Pogrešna šifra!";
        }
    } else {
        return "Pogrešno korisničko ime!";
    }
}
`;

const JSdz03 = () => {
    console.log(login(mapaKorisnika, korisnickoIme, lozinka));
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code">
                    <code>
                        <div>{JSON.stringify(kor1)}</div>
                        <div>{JSON.stringify(kor2)}</div>
                        <div>{JSON.stringify(kor3)}</div>
                    </code>
                </div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code"><code>{JSON.stringify(login(mapaKorisnika, korisnickoIme, lozinka))}</code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz03;
