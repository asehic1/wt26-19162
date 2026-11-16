function napraviResurs(pocetnaKolicina) {

    if (!Number.isFinite(pocetnaKolicina) || pocetnaKolicina < 0) {
        throw new Error("Početna količina mora biti nenegativan broj.");
    }

    let stanje = pocetnaKolicina;

    return {
        potrosi: function(kolicina) {

            if (!Number.isFinite(kolicina) ||
                kolicina < 0 ||
                kolicina > stanje) {

                return false;
            }

            stanje -= kolicina;
            return true;
        },

        preostalo: function() {
            return stanje;
        }
    };
}

// Kreiranje dvije nezavisne instance
const resursA = napraviResurs(100);
const resursB = napraviResurs(50);

// Početno stanje
console.log(resursA.preostalo()); // 100
console.log(resursB.preostalo()); // 50

// Potrošnja resursa A
console.log(resursA.potrosi(30)); // true
console.log(resursA.preostalo()); // 70

// Neuspješna potrošnja resursa A
console.log(resursA.potrosi(100)); // false
console.log(resursA.preostalo());  // 70

// Potrošnja resursa B
console.log(resursB.potrosi(20)); // true
console.log(resursB.preostalo()); // 30

// Provjera nezavisnosti instanci
console.log(resursA.preostalo()); // 70
console.log(resursB.preostalo()); // 30