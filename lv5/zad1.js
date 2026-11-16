function dodajDva(broj) {
    return broj + 2;
}

function jednom(callback) {
    let pozvana = false;
    let rezultat;

    return function (vrijednost) {
        if (!pozvana) {
            rezultat = callback(vrijednost);
            pozvana = true;
        }

        return rezultat;
    };
}

const jednomFunkcija = jednom(dodajDva);

console.log(jednomFunkcija(4));    // 6
console.log(jednomFunkcija(10));   // 6
console.log(jednomFunkcija(9001)); // 6