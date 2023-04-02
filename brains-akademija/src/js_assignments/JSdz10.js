import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Ispisati sve stringove koji se pojavljuju u sledećem nizu elemenata:";
let niz = [1, 34, '1', 'abc', 347, 'false', 's', 123];

const obradi = (niz) => {
    let retVal = [];
    for (let element of niz) {
        if (typeof element === 'string') {
            retVal.push(element);
        }
    }
    return retVal;
}

const kod = `
const obradi = (niz) => {
    let retVal = [];
    for (let element of niz) {
        if (typeof element === 'string') {
            retVal.push(element);
        }
    }
    return retVal;
}
`;

const JSdz10 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code><div>{JSON.stringify(niz)}</div ></code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code"><code><div>{JSON.stringify(obradi(niz))}</div></code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz10;
