/*
    Napraviti stranicu koja odgovara primeru koji je dat.
    Slika je dostupna na sledećem linku: https://www.logo.wine/logo/Apache_Tomcat
*/
import slika from "./../assets/images/zad7.png";
import slika2 from "./../assets/images/Apache_Tomcat-Logo.wine.png";

const Zadatak_J7 = () => {
  return (
    <div>
      <h2> Zadatak 7</h2>
      <div className="zad_container">
        <div>
          <p> Prikazati tekst kao što je na slici: </p>
          <img src={slika} alt="" />
        </div>
        <div>
          <br />
          <h1>WEB čitači</h1>
          <p>
            <em>Web čitač</em> je aplikacija koja je namenjena prikazu sadržaja web stranica.
          </p>
          <p>
            Stranice se mogu dobaviti kako iz fajl-sistema, tako i putem TCP/IP mreže.
            Protokol kojim komuniciraju wb čitač i web server je HTTP protokol.
          </p>
          <p>
            Danas su najpoznatiji sledeću web čitači:
            <ol>
              <li>
                <a href="https://www.microsoft.com/en-us/edge" target="_blank" rel="noreferrer">Microsoft Edge</a> (https://www.microsoft.com/en-us/edge)
              </li>
              <li>
                <a href="https://www.google.com/chrome" target="_blank" rel="noreferrer">Google Chrome</a> (https://www.google.com/chrome)
              </li>
              <li>
                <a href="https://www.mozilla.org" target="_blank" rel="noreferrer">Mozilla</a> (https://www.mozilla.org)
              </li>
            </ol>
          </p>
          <img src={slika2} width={200} alt="" />




          {/* to do: ovde strukturirati tekst */}
        </div>
      </div>
    </div>
  );
};

export default Zadatak_J7;
