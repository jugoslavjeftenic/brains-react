/*
	Napraviti stranicu koja odgovara primeru koji je dat.
	Slika je dostupna na sledećem linku: https://www.logo.wine/logo/Apache_Tomcat
*/
import './Zadatak07_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika from "./../assets/images/zadatak07.png";
import slika2 from "./../assets/images/apache-tomcat-logo.png";

const Zadatak_J07 = () => {
	return (
		<div className="wrapper html_zad07">
			<Header />
			<div className="zadatak margina_vrh">
				<p> Prikazati tekst kao što je na slici: </p>
				<img src={slika} alt="" />
			</div>

			<div className="resenje margina_vrh">
				<h1>WEB čitači</h1>
				<p><em>Web čitač</em> je aplikacija koja je namenjena prikazu sadržaja web stranica.</p>
				<p>
					Stranice se mogu dobaviti kako iz fajl-sistema, tako i putem TCP/IP mreže.
					Protokol kojim komuniciraju wb čitač i web server je HTTP protokol.
				</p>
				<p>Danas su najpoznatiji sledeću web čitači:</p>
				<div className="margina_levo">
					<ol>
						<li>
							<a href="https://www.microsoft.com/en-us/edge" target="_blank" rel="noreferrer">
								Microsoft Edge</a> (https://www.microsoft.com/en-us/edge)
						</li>
						<li>
							<a href="https://www.google.com/chrome" target="_blank" rel="noreferrer">
								Google Chrome</a> (https://www.google.com/chrome)
						</li>
						<li>
							<a href="https://www.mozilla.org" target="_blank" rel="noreferrer">
								Mozilla</a> (https://www.mozilla.org)
						</li>
					</ol>
				</div>
				<img src={slika2} width={200} alt="" />
			</div>
			<Footer />
		</div>
	);
};

export default Zadatak_J07;
