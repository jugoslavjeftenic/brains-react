import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Proći kroz niz elemenata i ispisati sve elemente koji se nalaze na neparnim indeksima.";

const niz = [1, 5, 6, 7, 2, 90, 10, 25, 67, 8];

const obradi = (niz) => {
    return niz.filter((element, index) => index % 2 > 0);
};

const JSdz02 = () => {
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
                <div className="code"><code>izlazni niz: {obradi(niz).toString()}</code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz02;
