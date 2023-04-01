/* 
    Zadatak 1
    Napiši funkciju koja prima ulazni niz proizvoljne dužine i sortira ga. 
*/

const sort1 = (niz) => {
  return niz.sort();
}

const sort2 = (niz) => {
  niz.sort(function (b, a) {
    return a - b;
  });
  return niz;
}

const JSV1 = () => {
  let niz = [8, 1, 3, 6, 3, 6, 8, 9, 10, 0];
  //  sort1(niz);
  sort2(niz);
  return <div><p> Sortiran niz: {JSON.stringify(niz)} </p></div>;
};

export default JSV1;
