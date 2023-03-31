import './Zadatak11_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika from './../assets/images/zadatak11.png';

const today = new Date();

const Zadatak_J11 = () => {
    return (
        <div className="wrapper html_zad11">
            <Header />
            <div className="zadatak margina_vrh">
                <p> Prikazati tekst kao što je na slici: </p>
                <img src={slika} alt="" />
            </div>

            <div className="resenje margina_vrh" id="home">
                <div className="zaglavlje">
                    <div>Inside of header - let's add a navbar with some essential links</div>
                    <a href="#home"><div>Home</div></a>
                    <a href="#about"><div>About</div></a>
                    <a href="#contact"><div>Contact</div></a>
                </div>

                <section className="articles margina_vrh">
                    <p><strong>Here is the main section of our page - it consist of a new articles</strong></p>
                    <article>
                        <h1>Article 1 - 1995 was a pretty crazy year for programming languages!</h1>
                        <p>Don't belive me? Just check this table out:</p>
                        <table>
                            <tr><th>Language</th><th>Designed By</th><th>First Appeared</th></tr>
                            <tr><td>C++</td><td>Bjarne Stroustrup</td><td>1083</td></tr>
                            <tr><td>Python</td><td>Guido van Rossum</td><td>1991</td></tr>
                            <tr><td>Ruby</td><td>Yukihiro Matsumoto (*Matz)</td><td>1995</td></tr>
                            <tr><td>JavaScript</td><td>Brendan Eich</td><td>1995</td></tr>
                            <tr><td>Java</td><td>James Gosling</td><td>1995</td></tr>
                            <tr><td>PHP</td><td>Rasmus Lerdorf</td><td>1995</td></tr>
                        </table>
                    </article>
                    <article>
                        <h1>Article 2 - Comming soon ...</h1>
                    </article>
                </section>

                <section id="about"></section>

                <section className="contact margina_vrh" id="contact">
                    <h1>Contact us!</h1>
                    <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                        <h2>General information</h2>
                        <div>
                            <label className="blok_inline desno">First Name</label>
                            <input className="blok_inline" type="text" name="first_name" />
                        </div>
                        <div>
                            <label className="blok_inline desno">Last Name</label>
                            <input className="blok_inline" type="text" name="last_name" />
                        </div>
                        <div>
                            <label className="blok_inline desno">Email</label>
                            <input className="blok_inline" type="email" name="email" />
                        </div>
                        <div>
                            <label className="blok_inline desno">Date of Birth</label>
                            <input className="blok_inline" type="date" name="date" />
                        </div>

                        <h2>Essential Question</h2>
                        <p>What kind of work do you need?</p>
                        <div>
                            <label className="blok_inline desno" for="programming">Programming</label>
                            <input type="checkbox" name="programming" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="design">Design</label>
                            <input type="checkbox" name="design" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="singing">Singing</label>
                            <input type="checkbox" name="singing" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="comedy">Comedy</label>
                            <input type="checkbox" name="comedy" />
                        </div>
                        <p>How interested are you in our design skills?</p>
                        <div>
                            <label className="blok_inline desno" for="design_skill">Very low</label>
                            <input type="radio" name="design_skill" value="very_low" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="design_skill">Low</label>
                            <input type="radio" name="design_skill" value="low" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="design_skill">Medium</label>
                            <input type="radio" name="design_skill" value="medium" />
                        </div>
                        <div>
                            <label className="blok_inline desno" for="design_skill">High</label>
                            <input type="radio" name="design_skill" value="high" />
                        </div>

                        <div className="pucad">
                            <input type="submit" value="Submit me!" />
                            <input type="reset" />
                        </div>
                    </form>
                </section>

                <footer>
                    <p>Here is our footer - let's make shure we copyright © this.</p>
                    <p>Copyright &copy; {today.getFullYear()}</p>
                </footer>
            </div>
            <Footer />
        </div >
    );
};

export default Zadatak_J11;
