/*
Kreirati formu za unos podataka na osnovu slike koja je data u prilogu kada se otvori stranica. 
Zahtevi
	• Ime i vrednost potrebno je izabrati parametre ime i vrednost za elemente forme.
	• Akcija koristiti akciju https://cscie12.dce.harvard.edu/echo
	• Metod koristiti post metod
	• Legenda koristiti skup polja i legende da biste grupisali obrazac u odeljke
	• Labele kreirati labele za sve tekst, radio i checkbox polja
	• Dani i sendviči u redu je navesti sve dane u nedelji kao što to čini papirni obrazac.
	  Omogućavanje izbora „Petkom“ dostupnog samo u petak je vrsta potvrde obrasca
	  koja je izvan opsega ovog zadatka.
	• Polja za unos:
		• Tekstualno polje za unos imena
		• Radio dugme za here/to go, izbor sendviča i užine
		• Checkbox dugme za izbor hrane sa glutenom i veliki izbor pića
		• Padajući meni za izbor pića
CSS zahtevi:
	- formu dizajnirati po zelji
*/

import './Zadatak04_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika from './../assets/images/zadatak04.png';

const Zadatak_J04 = () => {
	return (
		<div className="wrapper html_zad04">
			<Header />
			<div className="sadrzaj">
				<div className="zadatak">
					<img src={slika} alt="" />
				</div>
				<div className="resenje">
					<div className="ponuda">
						<h1>lunch special</h1>
						<p><strong>monday thru friday, 11 am ~ 3 pm</strong></p>
						<p><strong>$9.95</strong> (plus tax)</p>
					</div>

					<div className="forma">
						<form action="https://cscie12.dce.harvard.edu/echo" method="POST">
							<div className="blok"><div className="inline_blok"><label>Name:</label></div><input type="text" name="name" /></div>
							<div className="blok"><div className="inline_blok"><label>Email:</label></div><input type="email" name="email" /></div>
							<div className="blok"><div className="inline_blok"><p><strong>Sandwich:</strong></p></div></div>

							<div>
								<div className="blok sendvic">
									<div className="inline_blok"><label><strong>Mon:</strong></label></div>
									<div className="radio">
										<div className="radio_line1"><input type="radio" name="sandwich" value="1a" /><label for="1a"> Tomato Mozzarela </label></div>
										<div className="radio_line2"><input type="radio" name="sandwich" value="1b" /><label for="1b"> Chicken Salad </label></div>
									</div>
								</div>

								<div className="blok sendvic">
									<div className="inline_blok"><label><strong>Tues:</strong></label></div>
									<div className="radio">
										<div className="radio_line1"><input type="radio" name="sandwich" value="2a" /><label for="1a"> Greek Salad </label></div>
										<div className="radio_line2"><input type="radio" name="sandwich" value="2b" /><label for="1b"> Toto Wrap </label></div>
									</div>
								</div>

								<div className="blok sendvic">
									<div className="inline_blok"><label><strong>Wed:</strong></label></div>
									<div className="radio">
										<div className="radio_line1"><input type="radio" name="sandwich" value="3a" /><label for="1a"> Red Pepper Hummus </label></div>
										<div className="radio_line2"><input type="radio" name="sandwich" value="3b" /><label for="1b"> Roasted Turkey </label></div>
									</div>
								</div>

								<div className="blok sendvic">
									<div className="inline_blok"><label><strong>Thur:</strong></label></div>
									<div className="radio">
										<div className="radio_line1"><input type="radio" name="sandwich" value="4a" /><label for="1a"> Carrot-Ginger Hummus Wrap </label></div>
										<div className="radio_line2"><input type="radio" name="sandwich" value="4b" /><label for="1b"> Egg Salad </label></div>
									</div>
								</div>

								<div className="blok sendvic">
									<div className="inline_blok"><label><strong>Fri:</strong></label></div>
									<div className="radio">
										<div className="radio_line1"><input type="radio" name="sandwich" value="5a" /><label for="1a"> Dado Wrap </label></div>
										<div className="radio_line2"><input type="radio" name="sandwich" value="5b" /><label for="1b"> Tuna Salad </label></div>
									</div>
								</div>
							</div>

							<p className="margina_dole">
								<input type="checkbox" name="gluten" />
								<label className="crveno" for="gluten">75¢ extra for Gluten Free Bread</label>
							</p>

							<div className="blok sendvic">
								<div className="inline_blok"><p><strong>Snack:</strong></p></div>
								<div className="radio">
									<div className="radio_line1"><input type="radio" name="snack" value="1" /><label for="1"> Apple </label></div>
									<div className="radio_line2"><input type="radio" name="snack" value="2" /><label for="2"> Bannana </label></div>
									<div className="radio_line1"><input type="radio" name="snack" value="3" /><label for="3"> Potato Chips </label></div>
								</div>
							</div>

							<p >
								<strong>Regular size drink:</strong>
							</p>
							<div className="blok sendvic">
								<div className="radio kafa">
									<div className="radio_line2 selekt">
										<input type="radio" name="drink" value="coffee" />
										<label for="coffee"> Coffee </label>
										<select name="coffee">
											<option value="regular">Regular</option>
											<option value="iced">Iced</option>
										</select>
									</div>
									<div className="radio_line1 selekt">
										<input type="radio" name="drink" value="peppermint" />
										<label for="peppermint"> Organic Peppermint </label>
									</div>
									<div className="radio_line2 selekt">
										<input type="radio" name="drink" value="greentea" />
										<label for="greentea"> Sencha Green Tea </label>
										<select name="greentea">
											<option value="hot">Hot</option>
											<option value="iced">Iced</option>
										</select>
									</div>
									<div className="radio_line1 selekt">
										<input type="radio" name="drink" value="blacktea" />
										<label for="blacktea"> Keemun Black Tea </label>
										<select name="blacktea">
											<option value="hot">Hot</option>
											<option value="iced">Iced</option>
										</select>
									</div>
								</div>
							</div>

							<br />
							<p className="ekstra">
								<input type="checkbox" name="bubble" />
								<label className="crveno" for="bubble">$1.50 extra for any regular size Bubble Tea</label>
							</p>
							<p className="ekstra">
								<input type="checkbox" name="large" />
								<label className="crveno" for="large">75¢ extra for Large Drink</label>
							</p>

							<div className="centrirano margina_dole">
								<p><strong><em>- NO SUBSTITUTIONS - </em></strong></p>
							</div>

							<div className="centrirano margina_dole puce">
								<input type="submit" value="Submit Order" />
								<input type="reset" />
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Zadatak_J04;
