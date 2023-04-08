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
    "može da sortira bilo šta kroz komparatorsku funkciju koja vraća, za neko a i b, - 1 kada a < b, " +
    "0 kada a == b, i 1 kada a > b. Takva funkcija za sortiranje dobija niz i funkciju. " +
    "Testirati ovu funkciju tako što joj se da niz i funkcija koja sortira u silazećem redosledu. " +
    "Inače, svaki niz ima funkciju .sort koja obavlja tačno ovaj posao koji ovde kodiramo, " +
    "i prima kao parametar komparatorsku funkciju koja radi tačno kao ova koju opisujemo ovde. ";

const JSz02 = () => {
    let niz1 = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
    let niz2 = [...niz1];

    const sortiraj1 = () => {
        for (let i = 0; i < niz1.length; i++) {
            for (let j = i + 1; j < niz1.length; j++) {
                if ((() => {
                    if (niz1[i] < niz1[j]) {
                        return -1;
                    }
                    else if (niz1[i] === niz1[j]) {
                        return 0;
                    }
                    else {
                        return 1;
                    }
                })() < 0) {
                    let e = niz1[i];
                    niz1[i] = niz1[j];
                    niz1[j] = e;
                }
            }
        }
        return niz1;
    };

    const asc = (a, b) => a - b;
    const dsc = (a, b) => b - a;

    const sortiraj2 = (redosled) => {
        return niz2.sort(redosled);
    };

    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="mt_5rem">
                <div className="tekst">zadatak:</div>
                <div className="code"><code>{zadatak.toString()}</code></div>
                <div className="tekst">ulaz:</div>
                <div className="code"><code>{niz1.toString()}</code></div>
                <div className="tekst">metoda:</div>
                <div className="code">
                    <pre>
                        <code>
                            <div className="mt_0rem">prva metoda - funkcija:<br />{sortiraj1.toString()}</div>
                            <div className="mt_2rem">druga metoda - redosled asc:<br />{asc.toString()}</div>
                            <div className="mt_1rem">druga metoda - redosled dsc:<br />{dsc.toString()}</div>
                            <div className="mt_1rem">druga metoda - funkcija:<br />{sortiraj2.toString()}</div>
                        </code>
                    </pre>
                </div>
                <div className="tekst">izlaz:</div>
                <div className="code">
                    <code>
                        <div className="mt_0rem">prva metoda: {sortiraj1().toString()}</div>
                        <div className="mt_1rem">druga metoda: {sortiraj2(asc).toString()}</div>
                        <div className="mt_0rem">druga metoda: {sortiraj2(dsc).toString()}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSz02;
