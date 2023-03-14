import "./basic_css.css";
const BasicCSS = () => {
  return (
    <div>
      <h1> CSS </h1>
      <p>
        CSS (Cascade Style Sheet) je jezik za stilizovannje Web stranice.
        Opisuje kako ce HTML element da bude prikazan.
      </p>
      <h4> Definisanje stilova</h4>
      <p>
        Moze da se definise na vise nacina:
        <ul>
          <li>unutar HTML elementa</li>
          <li>
            u okviru taga <i>style</i>
          </li>
          <li>u spoljasnjoj datoteci sa ekstenzijom .css</li>
        </ul>
      </p>
      <p>
        {" "}
        Za jedan element mozemo da definisemo vise stilova. Ako je to slucaj
        onda se na osnovu prioriteta odredjuje stil koji ce biti primenjen:{" "}
      </p>
      <ol className="text_class">
        <li> Stil definisan u sklopu HTML elementa </li>
        <li> Stil definisan u style sekciji </li>
        <li> Stil definisan u eksternoj datoteci </li>
        <li> Podrazumevani stil elementa </li>
      </ol>
      <h4> Definisanje stila u HTML elementu </h4>
      <p>
        {" "}
        U okviru otvarajuceg taga HTML elementa definisemo atribu <i>
          style
        </i>.{" "}
      </p>
      <p>
        {" "}
        Primer:
        <i> &lt;h1 style="color: black" &gt; Naslov &lt;/h1&gt; </i>
      </p>
      <h4>
        {" "}
        Sintaksa za definisanje stila u sekciji <i>style</i> i u eksternoj
        datoteci
      </h4>
      <i> selektor &#123; osobina : nova_vrednost &#125; </i>
      <br />
      Selektor moze da bude:
      <ul>
        <li id="li_id_1"> naziv taga </li>
        <li id="li_id_2">
          {" "}
          identifikator - definisemo atribut <i>id</i> za element{" "}
        </li>
        <li>
          {" "}
          naziv klase - definisemo atribut <i> class</i>, odnosno{" "}
          <i> className</i> ako je u pitanju JSX
        </li>
      </ul>
      <h4>
        {" "}
        Definisanje stila u <i>style</i> sekciji{" "}
      </h4>
      <p className="text_class">
        {" "}
        Sekcija <i>style</i> se definise u okviru <i>head</i> dela HTML
        dokumenta. U okviru ove sekcije mozemo da definisemo stil koji ce se
        primeniti na stranicu u okviru koje je definisan stil. Stilove pisemo u
        vidu pravila koja su navedena u sledecem obliku: <br />
        <br />
        Primer:
        <pre>
          <code>
            &lt;style&gt; <br />
            <div className="span_code">
              body &#123;background-color: powderblue;&#125; <br />
              h1 &#123; color: blue; &#125; <br />
              p &#123;color: red; &#125; <br />
            </div>
            &lt;/style&gt;
          </code>
        </pre>
      </p>
      <h4> Definisanje stila u eksternoj datoteci </h4>
      <p>
        {" "}
        Mozemo stil da definsemo u eksternoj datoteci navodeci skup pravila.
        Prednost upotrebe datoteke u odnosu na sekciju <i>style</i> je u tome
        sto jedan stil koji definisemo u datoteci mozemo primeniti na vise
        razlicitih stranica.{" "}
      </p>
      <p>Da bi se neki stil primenimo na stranicu obavezno moramo da uvezemo .css i .html ili .js fajl upotrebom <i>import</i> izraza.</p>
      <code> import 'putanja_do_css_datoteke';</code>
      <p> U ovom primeru su stilovi definisani u eksternim datotekama i ovo je najcesci nacin kako se definisu stilovi.</p>
    </div>
  );
};

export default BasicCSS;
