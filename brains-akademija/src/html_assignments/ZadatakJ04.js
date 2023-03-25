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

import { Link } from "react-router-dom";
import './Zadatak04_css.css';
import slika from './../assets/images/zadatak04.png';

const Zadatak_J04 = () => {
	return (
		<div className='container zadatak04'>
			<div>
				<img src={slika} alt="" />
			</div>
			<main>
				<div>
					<h1>lunch special</h1>
					<p><strong>monday thru friday, 11 am ~ 3 pm</strong></p>
					<p><strong>$9.95</strong> (plus tax)</p>
				</div>

				<div>
					<form action="https://cscie12.dce.harvard.edu/echo" method="POST">
						<label>Name:</label><input type="text" name="name" /><br />
						<label>Email:</label><input type="email" name="email" /><br />

						<br />
						<div>
							<label><strong>Sandwich:</strong></label><br />

							<br />
							<label><strong>Mon:</strong></label>
							<input type="radio" name="sandwich" value="1a" /><label for="1a"> Tomato Mozzarela </label>
							<input type="radio" name="sandwich" value="1b" /><label for="1b"> Chicken Salad </label>

							<br />
							<label><strong>Tues:</strong></label>
							<input type="radio" name="sandwich" value="2a" /><label for="2a"> Greek Salad </label>
							<input type="radio" name="sandwich" value="2b" /><label for="2b"> Toto Wrap </label>

							<br />
							<label><strong>Wed:</strong></label>
							<input type="radio" name="sandwich" value="3a" /><label for="3a"> Red Pepper Hummus </label>
							<input type="radio" name="sandwich" value="3b" /><label for="3b"> Roasted Turkey </label>

							<br />
							<label><strong>Thur:</strong></label>
							<input type="radio" name="sandwich" value="4a" /><label for="4a"> Carrot-Ginger Hummus Wrap </label>
							<input type="radio" name="sandwich" value="4b" /><label for="4b"> Egg Salad </label>

							<br />
							<label><strong>Fri:</strong></label>
							<input type="radio" name="sandwich" value="5a" /><label for="5a"> Dado Wrap </label>
							<input type="radio" name="sandwich" value="5b" /><label for="5b"> Tuna Salad </label>
						</div>

						<br />
						<input type="checkbox" name="gluten" /><label for="gluten">75¢ extra for Gluten Free Bread</label><br />

						<br />
						<div>
							<label><strong>Snack:</strong></label><br />

							<br />
							<input type="radio" name="snack" value="1" /><label for="1"> Apple </label>
							<input type="radio" name="snack" value="2" /><label for="2"> Bannana </label>
							<input type="radio" name="snack" value="3" /><label for="3"> Potato Chips </label>
						</div>

						<br />
						<div>
							<label><strong>Regular size drink:</strong></label><br />

							<br />
							<input type="radio" name="drink" value="coffee" /><label for="coffee"> Coffee </label>
							<select name="coffee">
								<option value="regular">Regular</option>
								<option value="iced">Iced</option>
							</select>

							<br />
							<input type="radio" name="drink" value="peppermint" /><label for="peppermint"> Organic Peppermint </label>

							<br />
							<input type="radio" name="drink" value="greentea" /><label for="greentea"> Sencha Green Tea </label>
							<select name="greentea">
								<option value="hot">Hot</option>
								<option value="iced">Iced</option>
							</select>

							<br />
							<input type="radio" name="drink" value="blacktea" /><label for="blacktea"> Keemun Black Tea </label>
							<select name="blacktea">
								<option value="hot">Hot</option>
								<option value="iced">Iced</option>
							</select>
						</div>

						<br />
						<input type="checkbox" name="bubble" /><label for="bubble">$1.50 extra for any regular size Bubble Tea</label><br />
						<input type="checkbox" name="large" /><label for="large">75¢ extra for Large Drink</label><br />

						<br />
						<p><strong><em>- NO SUBSTITUTIONS - </em></strong></p>

						<input type="submit" value="Submit Order" />
						<input type="reset" />
					</form>
				</div>
			</main>

			<footer>
				<Link to="/">Početna strana</Link>
			</footer>
		</div>
	);
}

export default Zadatak_J04;