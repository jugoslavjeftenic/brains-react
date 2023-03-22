import slika from './../assets/images/zadatak12.png';

const Zadatak_J12 = () => {
    return (
        <div>
            <h2> Zadatak 12</h2>
            <div className="zad_container">
                <div width="50%">
                    <p> Prikazati tekst kao što je na slici: </p>
                    <img src={slika} width="100%" alt="" />
                </div>

                <div>
                    <main id="home">
                        <h1>Web Developers, Inc.</h1>

                        <section id="nav">
                            <ol>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#blank">Products</a></li>
                                <li><a href="#blank">Services</a></li>
                                <li><a href="#blank">About</a></li>
                                <li><a href="#blank">Contact</a>
                                    <ul>
                                        <li><a href="#blank">Advertising</a></li>
                                        <li><a href="#blank">Marketing</a></li>
                                        <li><a href="#blank">Sales</a></li>
                                        <li><a href="#blank">The CEO</a></li>
                                    </ul>
                                </li>
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
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Zadatak_J12;
