/*
Napraviti stranicu koja prikazuje podatke o Tokiu. Stranica treba da sadrzi:
	- naslov 'Tokyo'
	- tekst koji je dat na kraju zadatka
Tekst koji treba da bude napisan na stranici:
-------------
Tokyo, officially the Tokyo Metropolis, is the capital and most populous prefecture of Japan. Located
at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast
of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well
as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an
estimated population of 13,960,236. The Greater Tokyo Area is the most populous metropolitan
area in the world, with more than 37.393 million residents as of 2020.
Originally a fishing village, named Edo, the city became a prominent political center in 1603, when it
became the seat of the Tokugawa shogunate. By the mid-18th century, Edo was one of the most
populous cities in the world at over one million. Following the end of the shogunate in 1868, the
imperial capital in Kyoto was moved to the city, which was renamed Tokyo (literally "eastern
capital"). Tokyo was devastated by the 1923 Great Kantō earthquake, and again by Allied bombing
raids during World War II. Beginning in the 1950s, the city underwent rapid reconstruction and
expansion, going on to lead Japan's post-war economic recovery. Since 1943, the Tokyo
Metropolitan Government has administered the prefecture's 23 special wards (formerly Tokyo City),
various bed towns in the western area, and two outlying island chains.
-------------
CSS DEO ZADATKA (ovo radite tek kada budemo uradili CSS)
Zahtevi:
	- tekst poravnati po levoj strani i pozadinu teksta obojiti po zelji
	- rec Tokyo predstaviti podebljano, crvene boje 
	- prvi red u svakom pasusu uvuci za 15px
	- sliku centirati i oviciti okvirom debljine 1px
	- rastojanje izmedju slike i okvira treba da bude 10px
*/

import './Zadatak01_css.css';
import slika_tokio from "./../assets/images/tokyo.jpg";

const Zadatak_J01 = () => {
	return (
		<div className="container zadatak01">
			<header>
				<h1>Tokyo</h1>

				<table>
					<tr><td>Kanji</td><td>東京</td></tr>
					<tr><td>Hiragana</td><td>とうきょう</td></tr>
					<tr><td>Katakana</td><td>トウキョウ</td></tr>
					<tr><td>Kyūjitai</td><td>東亰</td></tr>
				</table>
			</header>

			<main>
				<p>
					<span className="akcenat">Tokyo</span>, officially the <span className="akcenat">Tokyo</span> Metropolis, is the capital and most populous prefecture of Japan. Located
					at the head of <span className="akcenat">Tokyo</span> Bay, the prefecture forms part of the Kantō region on the central Pacific coast
					of Japan's main island of Honshu. <span className="akcenat">Tokyo</span> is the political and economic center of the country, as well
					as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an
					estimated population of 13,960,236. The Greater <span className="akcenat">Tokyo</span> Area is the most populous metropolitan
					area in the world, with more than 37.393 million residents as of 2020.
				</p>

				<p>
					Originally a fishing village, named Edo, the city became a prominent political center in 1603, when it
					became the seat of the Tokugawa shogunate. By the mid-18th century, Edo was one of the most
					populous cities in the world at over one million. Following the end of the shogunate in 1868, the
					imperial capital in Kyoto was moved to the city, which was renamed <span className="akcenat">Tokyo</span> (literally "eastern
					capital"). <span className="akcenat">Tokyo</span> was devastated by the 1923 Great Kantō earthquake, and again by Allied bombing
					raids during World War II. Beginning in the 1950s, the city underwent rapid reconstruction and
					expansion, going on to lead Japan's post-war economic recovery. Since 1943, the <span className="akcenat">Tokyo</span>
					Metropolitan Government has administered the prefecture's 23 special wards (formerly <span className="akcenat">Tokyo</span> City),
					various bed towns in the western area, and two outlying island chains.
				</p>

				<div className="imgContainer">
					<img src={slika_tokio} alt="Slika Tokia" />
				</div>
			</main>
		</div>
	);
};

export default Zadatak_J01;
