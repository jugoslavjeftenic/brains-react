import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Proći kroz dati niz elemenata i ispisati imena i prezimena studenata.";
let studenti = [
    { indeks: "XY 409/2072", ime: "Alice", prezime: "Alferson" },
    { indeks: "ZW 133/2072", ime: "Bob", prezime: "Bobbert" },
    { indeks: "XY 112/2073", ime: "Carol", prezime: "Creed" },
    { indeks: "XY 507/2071", ime: "Drew", prezime: "Danger" },
    { indeks: "ZW 233/2070", ime: "Eve", prezime: "Emmerson" },
    { indeks: "ZW 57/2072", ime: "Trent", prezime: "Tweed" },
    { indeks: "XY 111/2071", ime: "Fred", prezime: "Franks" },
    { indeks: "ZW 404/2073", ime: "George", prezime: "Green" }
];

const obradi = (studenti) => {
    let retVal = [];
    for (let { ime, prezime } of studenti) {
        retVal.push(ime + " " + prezime);
    }
    return retVal;
}

const kod = `
const obradi = (studenti) => {
    let retVal = [];
    for (let {ime, prezime} of studenti) {
        retVal.push(ime + " " + prezime);
    }
    return retVal;
}
`;

const JSdz09 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code">
                    <code>
                        <div>{JSON.stringify(studenti[0])}</div >
                        <div>{JSON.stringify(studenti[1])}</div>
                        <div>{JSON.stringify(studenti[2])}</div>
                        <div>{JSON.stringify(studenti[3])}</div>
                        <div>{JSON.stringify(studenti[4])}</div>
                        <div>{JSON.stringify(studenti[5])}</div>
                        <div>{JSON.stringify(studenti[6])}</div>
                        <div>{JSON.stringify(studenti[7])}</div>
                    </code>
                </div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code">
                    <code>
                        <div>{obradi(studenti)[0]}</div>
                        <div>{obradi(studenti)[1]}</div>
                        <div>{obradi(studenti)[2]}</div>
                        <div>{obradi(studenti)[3]}</div>
                        <div>{obradi(studenti)[4]}</div>
                        <div>{obradi(studenti)[5]}</div>
                        <div>{obradi(studenti)[6]}</div>
                        <div>{obradi(studenti)[7]}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz09;
