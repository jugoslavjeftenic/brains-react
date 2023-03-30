import './Zadatak10_css.css';
import Header from "./../Header";
import Footer from "./../Footer";

const Zadatak_J10 = () => {
    return (
        <div className="wrapper html_zad10">
            <Header />
            <div className="sadrzaj">
                <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                    <p>Registracija korisnika:</p>
                    <fieldset>
                        <legend>Opšti podaci</legend>
                        <div><label>JMBG:</label><input type="text" name="jmbg" /></div>
                        <div><label>Ime:</label><input type="text" name="ime" /></div>
                        <div><label>Prezime:</label><input type="text" name="prezime" /></div>
                        <div><label>Ime roditelja:</label><input type="text" name="roditelj" /></div>
                    </fieldset>

                    <fieldset>
                        <legend>Odelenje</legend>
                        <div>
                            <label for="razred"> razred </label>
                            <select name="razred" id="razred">
                                <option value="1">Prvi</option>
                                <option value="2">Drugi</option>
                                <option value="3">Treći</option>
                                <option value="4">Četvrti</option>
                                <option value="5">Peti</option>
                                <option value="6">Šesti</option>
                                <option value="7">Sedmi</option>
                                <option value="8">Osmi</option>
                            </select>
                        </div>

                        <div className="radijo">
                            <input type="radio" name="odelenje" value="a" /><label for="odelenje"> A </label>
                            <input type="radio" name="odelenje" value="b" /><label for="odelenje"> B </label>
                            <input type="radio" name="odelenje" value="c" /><label for="odelenje"> C </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Korisnik</legend>
                        <div><label>Korisničko ime:</label><input type="text" name="username" /></div>
                        <div><label>Lozinka:</label><input type="password" name="password" /></div>
                    </fieldset>

                    <div className="pucad">
                        <input type="submit" />
                        <input type="reset" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Zadatak_J10;
