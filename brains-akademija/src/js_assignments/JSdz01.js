import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Proći kroz niz elemenata i ispisati sve parne elemente.";
let niz = [1, 5, 6, 7, 2, 90, 10, 25, 67, 8];
const ulaz = `ulazni niz: [${niz}]`;

const obradi = (niz) => {
    let niz_obradjeno = [];
    for (let i = 0; i < niz.length; i++) {
        if (!(niz[i] % 2) > 0) {
            niz_obradjeno.push(niz[i]);
        }
    }
    return niz_obradjeno;
}

const kod = `
const obradi = (niz) => {
    let niz_obradjeno = [];
    for (let i = 0; i < niz.length; i++) {
        if (!(niz[i] % 2) > 0) {
            niz_obradjeno.push(niz[i]);
        }
    }
    return niz_obradjeno;
}
`;

const izlaz = `izlazni niz: `;

const JSdz01 = () => {
    console.log(obradi(niz));
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code>{ulaz}</code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code"><code>{izlaz}{JSON.stringify(obradi(niz))}</code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz01;
