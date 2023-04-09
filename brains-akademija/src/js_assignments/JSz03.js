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

	const komparator = (smerA, smerB, indeksA, indeksB, godinaA, godinaB) => {
		if (smerA > smerB) {
			return 1;
		}
		else if (smerA < smerB) {
			return -1;
		}
		else {
			if (godinaA > godinaB) {
				return 1;
			}
			else if (godinaA < godinaB) {
				return -1;
			}
			else {
				if (indeksA > indeksB) {
					return 1;
				}
				else if (indeksA < indeksB) {
					return -1;
				}
				else {
					return 0;
				}
			}
		}
	};

	const split = (a, b) => {
		let [smerA, ostatakA] = a.indeks.split(" ");
		let [smerB, ostatakB] = b.indeks.split(" ");
		let [indeksA, godinaA] = ostatakA.split("/");
		let [indeksB, godinaB] = ostatakB.split("/");

		indeksA = parseInt(indeksA);
		indeksB = parseInt(indeksB);
		godinaA = parseInt(godinaA);
		godinaB = parseInt(godinaB);

		return komparator(smerA, smerB, indeksA, indeksB, godinaA, godinaB);
	};

	const regex = (a, b) => {
		let regex = /([A-Z]{2}) (\d+)\/(\d{4})/;
		let [, smerA, indeksA, godinaA] = a.indeks.match(regex);
		let [, smerB, indeksB, godinaB] = b.indeks.match(regex);

		indeksA = parseInt(indeksA);
		indeksB = parseInt(indeksB);
		godinaA = parseInt(godinaA);
		godinaB = parseInt(godinaB);

		return komparator(smerA, smerB, indeksA, indeksB, godinaA, godinaB);
	};

	const asc = 1;
	const dsc = -1;

	const sortiraj = (niz, spliter, redosled) => {
		for (let i = 0; i < niz.length; i++) {
			for (let j = i + 1; j < niz.length; j++) {
				if (spliter(niz[i], niz[j]) === redosled) {
					let tmp = niz[i];
					niz[i] = niz[j];
					niz[j] = tmp;
				}
			}
		}
		return niz;
	};

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
				<div className="code">
					<pre>
						<code>
							<div className="mt_0rem">komparator:<br /><pre>{komparator.toString()}</pre></div>
							<div className="mt_2rem">split:<br />{split.toString()}</div>
							<div className="mt_2rem">regex:<br />{regex.toString()}</div>
							<div className="mt_2rem">redosled asc={asc.toString()}</div>
							<div className="mt_0rem">redosled dsc={dsc.toString()}</div>
							<div className="mt_2rem">sortiranje:<br />{sortiraj.toString()}</div>
						</code>
					</pre>
				</div>
				<div className="tekst">izlaz:</div>
				<div className="code">
					<pre>
						<code>
							<div className="mt_0rem">
								split/asc:<br />
								{sortiraj(studenti, split, asc).map((s) => (
									<div>
										indeks: {s.indeks}, ime: {s.ime}, prezime: {s.prezime}
									</div>
								))}
							</div>
							<div className="mt_1rem">
								split/dsc:<br />
								{sortiraj(studenti, split, dsc).map((s) => (
									<div>
										indeks: {s.indeks}, ime: {s.ime}, prezime: {s.prezime}
									</div>
								))}
							</div>
							<div className="mt_1rem">
								regex/asc:<br />
								{sortiraj(studenti, regex, asc).map((s) => (
									<div>
										indeks: {s.indeks}, ime: {s.ime}, prezime: {s.prezime}
									</div>
								))}
							</div>
							<div className="mt_1rem">
								regex/dsc:<br />
								{sortiraj(studenti, regex, dsc).map((s) => (
									<div>
										indeks: {s.indeks}, ime: {s.ime}, prezime: {s.prezime}
									</div>
								))}
							</div>
						</code>
					</pre>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default JSz03;
