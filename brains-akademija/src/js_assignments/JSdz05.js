import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Iz sledećeg teksta pomoću regularnog izraza izdvojiti sve e-mail adrese.";

const tekst = "Petar Petrović ima naloge na nekoliko servisa koji omogućavaju razmenu poruka. " +
    "Njegove adrese su pera.petrovic@gmail.com, petar@uns.ac.rs i petrovic@yahoo.com. " +
    "Mina Mirković takođe ima nekoliko e-mail adresa. " +
    "Za komunikaciju sa Petrom koristi adresu mina90.m@hotmail.com";

const regex_tudji = /\b[\w.-]+@[\w.-]+\.\w{2,}\b/g;
const regex_moj = /[a-z][a-z0-9]+\.?[a-z]+@[a-z0-9]+\.?[a-z]+\.?[a-z]{2,10}/g;

const kod = `
const regex_tudji = /\\b[\\w.-]+@[\\w.-]+\\.\\w{2,}\\b/g;
const regex_moj = /[a-z][a-z0-9]+\\.?[a-z]+@[a-z0-9]+\\.?[a-z]+\\.?[a-z]{2,10}/g;
`;

const JSdz05 = () => {
    return (
        <div className="wrapper js_zadatak">
            <Header />
            <div className="margin_top_5rem">
                <div className="tekst">Zadatak</div>
                <div className="code"><code>{zadatak}</code></div>
                <div className="tekst">Ulaz</div>
                <div className="code"><code><div>{tekst}</div></code></div>
                <div className="tekst">Metoda</div>
                <div className="code"><pre><code>{kod}</code></pre></div>
                <div className="tekst">Izlaz</div>
                <div className="code">
                    <code>
                        <div>Tuđi regex:</div>
                        <div>{JSON.stringify(tekst.match(regex_tudji))}</div>
                        <div>Moj regex:</div>
                        <div>{JSON.stringify(tekst.match(regex_moj))}</div>
                    </code>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JSdz05;
