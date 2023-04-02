import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Napraviti program koji na osnovu podataka o pravougaoniku računa: " +
    "dijagonalu, stranice pravougaonika, površinu i obim. " +
    "Pravougaonik je predstavljen kao objekat koji za atribute ima koordinate temena. " +
    "Koristiti destrukturiranje podataka.";

let pravougaonik = {
    A: { x: 10, y: 30 },
    B: { x: 30, y: 30 },
    C: { x: 30, y: 45 },
    D: { x: 10, y: 45 },
};

const ulaz = `
let pravougaonik = {
    A: { x: 10, y: 30 },
    B: { x: 30, y: 30 },
    C: { x: 30, y: 45 },
    D: { x: 10, y: 45 },
};
`;

let { A, B, C } = pravougaonik;
let sirina = Math.abs(B.x - A.x);
let visina = Math.abs(C.y - A.y);
let dijagonala = Math.sqrt(sirina ** 2 + visina ** 2);
let povrsina = sirina * visina;
let obim = 2 * (sirina + visina);

const kod = `
let { A, B, C } = pravougaonik;
let sirina = Math.abs(B.x - A.x);
let visina = Math.abs(C.y - A.y);
let dijagonala = Math.sqrt(sirina ** 2 + visina ** 2);
let povrsina = sirina * visina;
let obim = 2 * (sirina + visina);
`;

const JSdz06 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code><pre>{ulaz}</pre></code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code">
                    <code>
                        <div>Dijagonala: {dijagonala}</div>
                        <div>Površina: {povrsina}</div>
                        <div>Obim: {obim}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz06;
