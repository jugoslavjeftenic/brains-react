import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Od niza elemenata napraviti dva niza. Jedan niz treba da budu elementi koji se nalaze na parnim indeksima a " +
    "njihova vrednost je neparan broj, a drugi elementi koji se nalaze na neparnim indeksima a njihova vrednost je paran broj.";
let niz = [1, 5, 6, 7, 2, 90, 10, 25, 67, 8];
const ulaz = `ulazni niz: [${niz}]`;

const obradi = (niz) => {
    let idx_parno = [];
    let idx_neparno = [];
    for (let i = 0; i < niz.length; i++) {
        if ((i % 2) > 0 && (niz[i] % 2) === 0) {
            idx_neparno.push(niz[i]);
        }
        else if ((i % 2) === 0 && (niz[i] % 2) > 0) {
            idx_parno.push(niz[i]);
        }
    }
    return [idx_parno, idx_neparno];
}

const kod = `
const obradi = (niz) => {
    let idx_parno = [];
    let idx_neparno = [];
    for (let i = 0; i < niz.length; i++) {
        if ((i % 2) > 0 && (niz[i] % 2) === 0) {
            idx_neparno.push(niz[i]);
        }
        else if ((i % 2) === 0 && (niz[i] % 2) > 0) {
            idx_parno.push(niz[i]);
        }
    }
    return [idx_parno, idx_neparno];
}
`;

const izlaz = `izlazni niz: `;

const JSdz04 = () => {
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
                <div className="code">
                    <code>
                        <div>{izlaz}{JSON.stringify(obradi(niz)[0])}</div>
                        <div>{izlaz}{JSON.stringify(obradi(niz)[1])}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz04;
