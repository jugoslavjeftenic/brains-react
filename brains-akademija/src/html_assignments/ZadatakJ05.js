/*
Kreirati formu za prijavu kandidata za posao. Izgled forme je dat na slici
*/

import './Zadatak05_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika from './../assets/images/zadatak05.png';

const Zadatak_J05 = () => {
    return (
        <div className="wrapper html_zad05">
            <Header />
            <div className="sadrzaj">
                <div className="zadatak">
                    <img src={slika} alt="" />
                </div>

                <div className="resenje">
                    <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                        <div>
                            <p className="inline_blok sekcija">1</p>
                            <p className="inline_blok">Candidate Info</p>
                        </div>
                        <input type="text" name="name" placeholder="Your Name *" />
                        <input type="text" name="email" placeholder="Your Email *" />
                        <textarea
                            name="description"
                            rows="1"
                            cols="30"
                            placeholder="About Yourself">
                        </textarea>

                        <p className="margina_nula">Interests:</p>
                        <select name="interests">
                            <option value="playing_video_game">Playing video games</option>
                            <option value="painting">Painting</option>
                            <option value="gardening">Gardening</option>
                            <option value="hiking">Hiking</option>
                            <option value="playing_musical_instruments">Playing musical instruments</option>
                            <option value="collecting_stamps">Collecting stamps</option>
                            <option value="Reading">Reading</option>
                            <option value="traveling">Traveling</option>
                            <option value="cooking">Cooking</option>
                            <option value="photography">Photography</option>
                        </select>

                        <div>
                            <p className="inline_blok sekcija">2</p>
                            <p className="inline_blok">Additional Info</p>
                        </div>
                        <textarea
                            name="school_description"
                            rows="1"
                            cols="30"
                            placeholder="About Your School">
                        </textarea>

                        <br />
                        <input type="submit" value="Apply" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Zadatak_J05;