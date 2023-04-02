import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Za dati niz elemenata izračunati: zbir, srednju vrednost i proizvod.";
let niz = [1, 5, 6, 7, 2, 90, 10, 25, 67, 8];

const obradi = (niz) => {
    let retVal = [];
    let zbir = 0;
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
        proizvod *= niz[i];
    }
    let srednjaVrednost = zbir / niz.length;
    retVal.push(zbir);
    retVal.push(srednjaVrednost);
    retVal.push(proizvod);
    return retVal;
}

const kod = `
const obradi = (niz) => {
    let rezultat = [];
    let zbir = 0;
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
        proizvod *= niz[i];
    }
    let srednjaVrednost = zbir / niz.length;
    rezultat.push(zbir);
    rezultat.push(srednjaVrednost);
    rezultat.push(proizvod);
    return rezultat;
}
`;

const JSdz07 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code>ulazni niz: {JSON.stringify(niz)}</code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code">
                    <code>
                        <div>zbir: {obradi(niz)[0]}</div>
                        <div>srednja vrednost: {obradi(niz)[1]}</div>
                        <div>proizvod: {obradi(niz)[2]}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz07;
