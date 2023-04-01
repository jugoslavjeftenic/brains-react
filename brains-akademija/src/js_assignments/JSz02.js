/* 
    Zadatak 2
    Prošriti funkciju iz zadatka 1 tako da ne sortira samo brojeve u uzlaznom redosledu
    nego može da sortira bilo šta kroz komparatorsku funkciju koja vraća, za neko a i b,
    -1 kada a < b, 0 kada a == b, i 1 kada a > b.
    Takva funkcija za sortiranje dobija niz i funkciju.
    Testirati ovu funkciju tako što joj se da niz i funkcija koja sortira u silazećem redosledu.
    Inače, svaki niz ima funkciju .sort koja obavlja tačno ovaj posao koji ovde kodiramo,
    i prima kao parametar komparatorsku funkciju koja radi tačno kao ova koju opisujemo ovde. 
*/
import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Prošriti funkciju iz zadatka 1 tako da ne sortira samo brojeve u uzlaznom redosledu nego " +
    "može da sortira bilo šta kroz komparatorsku funkciju koja vraća, za neko a i b, - 1 kada a <b, " +
    "0 kada a == b, i 1 kada a > b. Takva funkcija za sortiranje dobija niz i funkciju. " +
    "Testirati ovu funkciju tako što joj se da niz i funkcija koja sortira u silazećem redosledu. " +
    "Inače, svaki niz ima funkciju .sort koja obavlja tačno ovaj posao koji ovde kodiramo, " +
    "i prima kao parametar komparatorsku funkciju koja radi tačno kao ova koju opisujemo ovde. ";
let niz = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
const ulaz = `nesortiran niz: [${niz}]`;

const kod = `
const sortiraj = (niz,) => {
    niz.sort((a, b) => b - a);
    return niz;
}
`;

const izlaz = `silazno sortiran niz: `;

const sortiraj = (niz,) => {
    niz.sort((a, b) => b - a);
    return niz;
}

const JSz02 = () => {
    sortiraj(niz);

    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">zadatak:</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">ulaz:</div>
                <div className="code"><pre><code>{ulaz}</code></pre></div>
                <div className="tekst">metoda:</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">izlaz:</div>
                <div className="code"><code>{izlaz}{JSON.stringify(niz)}</code></div>
            </div>
            <Footer />
        </div>
    );
};

export default JSz02;
