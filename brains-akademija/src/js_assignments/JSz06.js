/* 
	Zadatak 6
	Napisati funkciju koja računa koliko je dobar pangram neki string.
	Pangram je rečenica koja ima u sebi sva slova nekog jezika.
	Ovde nas samo zanima engleksi jezik radi jednostavnosti.
	Velika i mala slova ignorišemo, baš kao i apsolutno sve što nije slovo.
	Kvalitet pangrama definiše sledeće pravilo: ako nemamo sva slova, onda je kvalitet 0.
	Ako imamo sva slova, onda je kvalitet jednak broju slova u azbuci jezika (26 ovde)
	podeljenom sa brojem slova koji pangram u stvari ima.
	Savršen pangram (bez ponavljanja) onda ima rezultat 1. 
*/

const pangram = (recenica, alfabet) => {
	const karakteri = recenica.toLowerCase().match(/[a-z]/g);
	const jedinstveniKarakteri = [...new Set(karakteri)];
	if (jedinstveniKarakteri.length !== alfabet.length) {
		return 0;
	}
	return alfabet.length / karakteri.length;
}

const JSV6 = () => {
	const alfabet = "abcdefghijklmnopqrstuvwxyz";
	const recenica = "Jock nymphs waqf drug vex blitz";

	return (
		<div>
			{pangram(recenica, alfabet)}
		</div>
	);
};

export default JSV6;
