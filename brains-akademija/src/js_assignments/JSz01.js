/* 
	Zadatak 1
	Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga. 
*/
import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga.";

const JSz01 = () => {
	let niz1 = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
	let niz2 = [...niz1];

	const sortiraj1 = () => {
		for (let i = 0; i < niz1.length; i++) {
			for (let j = i + 1; j < niz1.length; j++) {
				if (niz1[j] < niz1[i]) {
					let tmp = niz1[i];
					niz1[i] = niz1[j];
					niz1[j] = tmp;
				}
			}
		}
		return niz1;
	};

	const sortiraj2 = () => {
		return niz2.sort((a, b) => a - b);
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
							<div className="mt_0rem"><p>prva metoda:<br />{sortiraj1.toString()}</p></div>
							<div className="mt_2rem">druga metoda:<br />{sortiraj2.toString()}</div>
						</code>
					</pre>
				</div>
				<div className="tekst">izlaz:</div>
				<div className="code">
					<code>
						<div className="mt_0rem">prva metoda: {sortiraj1().toString()}</div>
						<div className="mt_0rem">druga metoda: {sortiraj2().toString()}</div>
					</code>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default JSz01;
