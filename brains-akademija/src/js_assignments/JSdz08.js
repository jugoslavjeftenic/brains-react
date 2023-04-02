import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Za dati niz elemenata pronaći element u nizu koji se najčešće pojavljuje.";
let niz = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const obradi = (niz) => {
    const nizMapa = new Map();
    for (let nizElement of niz) {
        if (nizMapa.has(nizElement)) {
            nizMapa.set(nizElement, nizMapa.get(nizElement) + 1);
        } else {
            nizMapa.set(nizElement, 1);
        }
    }
    let maksBrojac = 0;
    let maksElement;
    for (let [element, brojac] of nizMapa) {
        if (brojac > maksBrojac) {
            maksBrojac = brojac;
            maksElement = element;
        }
    }
    return maksElement;
}

const kod = `
const obradi = (niz) => {
    const nizMapa = new Map();
    for (let nizElement of niz) {
        if (nizMapa.has(nizElement)) {
            nizMapa.set(nizElement, nizMapa.get(nizElement) + 1);
        } else {
            nizMapa.set(nizElement, 1);
        }
    }
    let maksBrojac = 0;
    let maksElement;
    for (let [element, brojac] of nizMapa) {
        if (brojac > maksBrojac) {
            maksBrojac = brojac;
            maksElement = element;
        }
    }
    return maksElement;
}
y`;

const JSdz08 = () => {
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
                        <div>najčešći element niza: {JSON.stringify(obradi(niz))}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz08;
