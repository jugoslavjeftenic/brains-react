
const Zadatak_J10 = () => {
    return (
        <div>
            <form action="https://cscie12.dce.harvard.edu/echo" method="POST">

                <fieldset>
                    <legend>Opsti podaci</legend>
                    <div><label>JMBG:</label><input type="text" name="jmbg" /></div>
                    <div><label>Ime:</label><input type="text" name="ime" /></div>
                    <div><label>Prezime:</label><input type="text" name="prezime" /></div>
                    <div><label>Ime roditelja:</label><input type="text" name="roditelj" /></div>
                </fieldset>

                <br />
                <fieldset>
                    <legend>Odelenje</legend>
                    <div>
                        <label for="razred"> razred </label>
                        <select name="razred" id="razred">
                            <option value="1">Prvi</option>
                            <option value="2">Drugi</option>
                            <option value="3">Treci</option>
                            <option value="4">Cetvrti</option>
                            <option value="5">Peti</option>
                            <option value="6">Sesti</option>
                            <option value="7">Sedmi</option>
                            <option value="8">Osmi</option>
                        </select><br />
                    </div>

                    <input type="radio" name="odelenje" value="a" /><label for="odelenje"> A </label>
                    <input type="radio" name="odelenje" value="b" /><label for="odelenje"> B </label>
                    <input type="radio" name="odelenje" value="c" /><label for="odelenje"> C </label>
                </fieldset>

                <br />
                <fieldset>
                    <legend>Korisnik</legend>
                    <div><label>Korisnicko ime:</label><input type="text" name="username" /></div>
                    <div><label>Lozinka:</label><input type="password" name="password" /></div>
                </fieldset>

                <br />
                <input type="submit" />
                <input type="reset" />
            </form>
        </div>
    );
};

export default Zadatak_J10;
