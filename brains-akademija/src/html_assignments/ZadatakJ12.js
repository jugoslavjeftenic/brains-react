import './Zadatak12_css.css';
import Header from "./../Header";
import Footer from "./../Footer";
import slika from './../assets/images/zadatak12.png';

const Zadatak_J12 = () => {
    return (
        <div className="wrapper html_zad12">
            <Header />
            <div className="zadatak margina_vrh">
                <p> Prikazati tekst kao što je na slici: </p>
                <img src={slika} alt="" />
            </div>

            <div className="resenje margina_vrh" id="home">
                <h1>Web Developers, Inc.</h1>

                <section className="zaglavlje">
                    <ol className="nav">
                        <a href="#home"><li>Home</li></a>
                        <a href="#blank"><li>Products</li></a>
                        <a href="#blank"><li>Services</li></a>
                        <a href="#blank"><li>About</li></a>
                        <a href="#blank"><li>Contact</li></a>
                        <ul className="sub_nav">
                            <a href="#blank"><li>Advertising</li></a>
                            <a href="#blank"><li>Marketing</li></a>
                            <a href="#blank"><li>Sales</li></a>
                            <a href="#blank"><li>The CEO</li></a>
                        </ul>
                    </ol>
                </section>

                <section id="brands">
                    <h2>Related Brands</h2>
                    <ul>
                        <li><a href="#blank">Altostrat Corp</a></li>
                        <li><a href="#blank">StepSisterCompany Inc.</a></li>
                        <li><a href="#blank">Organic City</a></li>
                    </ul>
                </section>

                <section id="singup">
                    <h2>Sing up</h2>
                    <p>
                        Wellcome to our sample web page. We'll be dissecting this page piece by piece
                        to show you the best ways to use HTML, CSS and JavaScript.
                    </p>
                    <fieldset>
                        <legend>Create a Profile</legend>
                        <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                            <div><p><label>First Name</label></p><p><input type="text" name="first_name" /></p></div>
                            <div><p><label>Last Name</label></p><p><input type="text" name="last_name" /></p></div>
                            <div><p><label>Date of Birth</label></p><p><input type="date" name="date" /></p></div>
                            <div>
                                <p>Gender</p>
                                <p>
                                    <input type="radio" name="gender" value="female" /><label for="gender">female</label>
                                    <input type="radio" name="gender" value="male" /><label for="male">male</label>
                                </p>
                            </div>
                            <input type="submit" value="Create profile" />
                            <input type="reset" />
                        </form>
                    </fieldset>
                </section>
            </div>
            <Footer />
        </div >
    );
};

export default Zadatak_J12;
