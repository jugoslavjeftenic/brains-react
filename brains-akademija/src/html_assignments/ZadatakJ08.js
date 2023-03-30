// Prikazati stihove naredne pesme:
/*
My Bonnie lies over the ocean
My Bonnie lies over the sea
My Bonnie lies over the ocean
Oh, bring back my Bonnie to me.
*/

// Iznad stihova napisati naslov pesme: "Poem" i odvojiti horizontalnom linijom od stihova
import './Zadatak08_css.css';
import Header from "./../Header";
import Footer from "./../Footer";

const Zadatak_J08 = () => {
	// to do
	return (
		<div className="wrapper html_zad08">
			<Header />
			<div className="sadrzaj">
				<h1>Poem</h1>
				<hr />
				<p>
					My Bonnie lies over the ocean<br />
					My Bonnie lies over the sea<br />
					My Bonnie lies over the ocean<br />
					Oh, bring back my Bonnie to me.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Zadatak_J08;
