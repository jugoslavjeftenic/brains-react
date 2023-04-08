/* 
	Zadatak 3
	Iskoristiti funkciju iz Zadatka 2 da se sortira sledeća lista podataka
	let studenti = [
		{indeks: "XY 409/2072", ime: "Alice", prezime: "Alferson"},
		{indeks: "ZW 133/2072", ime: "Bob", prezime: "Bobbert"},
		{indeks: "XY 112/2073", ime: "Carol", prezime: "Creed"},
		{indeks: "XY 507/2071", ime: "Drew", prezime: "Danger"},
		{indeks: "ZW 233/2070", ime: "Eve", prezime: "Emmerson"},
		{indeks: "ZW 57/2072", ime: "Trent", prezime: "Tweed"},
		{indeks: "XY 111/2071", ime: "Fred", prezime: "Franks"},
		{indeks: "ZW 404/2073", ime: "George", prezime: "Green"}
	];
	I to po indeksu tako što se prvo sortira abecedno po smeru, pa zatim po godini, i konačno po broju indeksa. Da bi se sortiralo abecedno samo treba porediti stringove kao da su brojevi. 
*/
import Header from "./../Header";
import Footer from "./../Footer";

const zadatak = "Iskoristiti funkciju iz Zadatka 2 da se sortira sledeća lista podataka. " +
	"Po indeksu tako što se prvo sortira abecedno po smeru, pa zatim po godini, i konačno po broju indeksa. " +
	"Da bi se sortiralo abecedno samo treba porediti stringove kao da su brojevi.";

const JSz03 = () => {
	let studenti = [
		{ indeks: "XY 409/2072", ime: "Alice", prezime: "Alferson" },
		{ indeks: "ZW 133/2072", ime: "Bob", prezime: "Bobbert" },
		{ indeks: "XY 112/2073", ime: "Carol", prezime: "Creed" },
		{ indeks: "XY 507/2071", ime: "Drew", prezime: "Danger" },
		{ indeks: "ZW 233/2070", ime: "Eve", prezime: "Emmerson" },
		{ indeks: "ZW 057/2072", ime: "Trent", prezime: "Tweed" },
		{ indeks: "XY 111/2071", ime: "Fred", prezime: "Franks" },
		{ indeks: "ZW 404/2073", ime: "George", prezime: "Green" }
	];

	const sortiraj = () => { };

	return (
		<div className="wrapper js_zadatak">
			<Header />
			<div className="mt_5rem">
				<div className="tekst">zadatak:</div>
				<div className="code"><code>{zadatak.toString()}</code></div>
				<div className="tekst">ulaz:</div>
				<div className="code">
					<code>
						{studenti.map((s) => (
							<div>
								indeks: {s.indeks}, ime: {s.ime}, prezime: {s.prezime}
							</div>
						))}
					</code>
				</div>
				<div className="tekst">metoda:</div>
				<div className="code"><pre><code>{ }</code></pre></div>
				<div className="tekst">izlaz:</div>
				<div className="code"><code>{ }</code></div>
			</div>
			<Footer />
		</div>
	);
};

export default JSz03;
