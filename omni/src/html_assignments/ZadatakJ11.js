const today = new Date();

const Zadatak_J11 = () => {
    return (
        <div>
            <header>
                <p>Inside of header - let's add a navbar with some essential links</p>
                <p>
                    <a href="#articles">Home </a>
                    <a href="#about">About </a>
                    <a href="#contact">Contact </a>
                </p>
            </header>
            <hr />

            <main>
                <section id="articles">
                    <h1>Here is the main section of our page - it consist of a new articles</h1>
                    <article>
                        <h2>Article 1 - 1995 was a pretty crazy year for programming languages!</h2>
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
                        <h2>Article 2 - Comming soon ...</h2>
                    </article>
                </section>

                <section id="about"></section>

                <section id="contact">
                    <h2>Contact us</h2>
                    <form action="https://cscie12.dce.harvard.edu/echo" method="POST">
                        <h3>General information</h3>
                        <div><label>First Name</label><input type="text" name="first_name" /></div>
                        <div><label>Last Name</label><input type="text" name="last_name" /></div>
                        <div><label>Email</label><input type="email" name="email" /></div>
                        <div><label>Date of Birth</label><input type="date" name="date" /></div>

                        <h3>Essential Question</h3>
                        <p>What kind of work do you need?</p>
                        <div><label for="programming">Programming</label><input type="checkbox" name="programming" /></div>
                        <div><label for="design">Design</label><input type="checkbox" name="design" /></div>
                        <div><label for="singing">Singing</label><input type="checkbox" name="singing" /></div>
                        <div><label for="comedy">Comedy</label><input type="checkbox" name="comedy" /></div>
                        <p>How interested are you in our design skills?</p>
                        <div><label for="design_skill">Very low</label><input type="radio" name="design_skill" value="very_low" /></div>
                        <div><label for="design_skill">Low</label><input type="radio" name="design_skill" value="low" /></div>
                        <div><label for="design_skill">Medium</label><input type="radio" name="design_skill" value="medium" /></div>
                        <div><label for="design_skill">High</label><input type="radio" name="design_skill" value="high" /></div>

                        <input type="submit" value="Submit me!" />
                        <input type="reset" />
                    </form>
                </section>
            </main>
            <hr />

            <footer>
                <p>Here is our footer - let's make shure we copyright © this.</p>
                <p>Copyright &copy; {today.getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Zadatak_J11;
