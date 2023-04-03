/*
Kreirati formu za prijavu kandidata za posao. Izgled forme je dat na slici
*/ 

import slika from './../assets/images/zad5.PNG';
import './zadatak5_css.css';
const Zadatak_J5 = () => {
    return  (<div>
        <h2> Zadatak 5</h2>
        <div className='zad5_container'>
        <div> 
            <p> Slika na osnovu koje treba napraviti formu</p>
            <img src={slika}/>
        </div>
        <div>
        {/* to do: ovde kreirati formu */}
        <p> TO DO: FORMA</p>
        </div>
    </div>
    </div>);
}

export default Zadatak_J5;