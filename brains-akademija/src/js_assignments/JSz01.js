/* 
	Zadatak 1
	Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga. 
*/
import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga.";
let niz = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
const ulaz = `nesortiran niz: [${niz}]`;

const kod = `
const sortiraj = (niz) => {
	for (let i = 0; i < niz.length; i++) {
		for (let j = i + 1; j < niz.length; j++) {
			if (niz[j] < niz[i]) {
				let tmp_broj = niz[i];
				niz[i] = niz[j];
				niz[j] = tmp_broj;
			}
		}
	}
	return niz;
}
`;

const izlaz = `uzlazno sortiran niz: `;

const sortiraj = (niz) => {
	for (let i = 0; i < niz.length; i++) {
		for (let j = i + 1; j < niz.length; j++) {
			if (niz[j] < niz[i]) {
				let tmp_broj = niz[i];
				niz[i] = niz[j];
				niz[j] = tmp_broj;
			}
		}
	}
	return niz;
}

const JSz01 = () => {
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

export default JSz01;
