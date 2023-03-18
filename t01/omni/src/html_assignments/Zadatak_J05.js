/*
Kreirati formu za prijavu kandidata za posao. Izgled forme je dat na slici
*/

import slika from './../assets/images/zad5.PNG';
import './zadatak5_css.css';
const Zadatak_J5 = () => {
    return (<div>
        <h2> Zadatak 5</h2>
        <div className='zad5_container'>
            <div>
                <p> Slika na osnovu koje treba napraviti formu</p>
                <img src={slika} alt="" />
            </div>
            <div>
                <p> TO DO: FORMA</p>
                <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                    <fieldset>
                        Candidate Info<br /><br />
                        <input type="text" name="name" placeholder="Your Name *" /><br />
                        <input type="text" name="email" placeholder="Your Email *" /><br />
                        <textarea
                            name="description"
                            rows="1"
                            cols="30"
                            placeholder="About Yourself *">
                        </textarea><br /><br />
                        <label for="interests">Interests:</label><br />
                        <select name="interests" id="interests">
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
                    </fieldset>
                    <fieldset>
                        Additional Info<br /><br />
                        <textarea
                            name="school_description"
                            rows="1"
                            cols="30"
                            placeholder="About Your School">
                        </textarea><br />
                    </fieldset>
                    <input type="submit" value="Apply" />
                </form>
            </div>
        </div>
    </div>);
}

export default Zadatak_J5;