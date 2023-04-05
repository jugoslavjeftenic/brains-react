import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Od niza elemenata napraviti dva niza. Jedan niz treba da budu elementi koji se nalaze na parnim indeksima a " +
    "njihova vrednost je neparan broj, a drugi elementi koji se nalaze na neparnim indeksima a njihova vrednost je paran broj.";

let niz = [1, 5, 6, 7, 2, 90, 10, 25, 67, 8];

const obradi = (niz) => {
    let povratniNiz = [];
    povratniNiz.push(niz.filter((element, index) => index % 2 === 0 && element % 2 > 0));
    povratniNiz.push(niz.filter((element, index) => index % 2 > 0 && element % 2 === 0));
    return povratniNiz;
};

const JSdz04 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak.toString()}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code>ulazni niz: {niz.toString()}</code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{obradi.toString()}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code">
                    <code>
                        <div>parni indeksi, neparne vrednosti: {obradi(niz)[0].toString()}</div>
                        <div>neparni indeksi, parne vrednosti: {obradi(niz)[1].toString()}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz04;
