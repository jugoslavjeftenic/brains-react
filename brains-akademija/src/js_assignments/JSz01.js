/* 
	Zadatak 1
	Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga. 
*/
import Header from "./../Header";
import Footer from "./../Footer";

const sort = (niz) => {
	niz.sort(function (a, b) {
		return a - b;
	});
	return niz;
}

const input = `let niz = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];`;

const code = `const sort = (niz) => {
	niz.sort(function (a, b) {
		return a - b;
	});
	return niz;
}`;

const JSz01 = () => {
	let niz = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
	sort(niz);
	return (
		<div className="wrapper js_zadatak">
			<Header />
			<div className="margin_top_5rem">
				<div className="tekst">ulaz:</div>
				<div className="code"><pre><code>{input}</code></pre></div>
				<div className="tekst">kod:</div>
				<div className="code"><pre><code>{code}</code></pre></div>
				<div className="tekst">izlaz:</div>
				<div className="code"><code> Sortiran niz: {JSON.stringify(niz)} </code></div>
			</div>
			<Footer />
		</div>
	);
};

export default JSz01;
