// Početna verzija modula
function napraviProfil() {
    let profil = { naziv: "Početni" };

    return {
        pregled: function() {
            return profil;
        },
        postaviNaziv: function(n) {
            profil.naziv = n;
        }
    };
}

// Demonstracija problema
const profil1 = napraviProfil();

const prikaz = profil1.pregled();
prikaz.naziv = "Promijenjeno izvana";

console.log(profil1.pregled().naziv);
// Ispisuje: Promijenjeno izvana


// Ispravljena verzija modula
function napraviProfil() {
    let profil = {
        naziv: "Početni",
        aktivan: true
    };

    return {
        pregled: function() {
            return {
                naziv: profil.naziv,
                aktivan: profil.aktivan
            };
        },

        postaviNaziv: function(n) {
            profil.naziv = n;
        }
    };
}

// Demonstracija ispravne verzije
const profil2 = napraviProfil();

const kopija = profil2.pregled();

kopija.naziv = "Promijenjeno izvana";
kopija.aktivan = false;

console.log(profil2.pregled());
// { naziv: "Početni", aktivan: true }

profil2.postaviNaziv("Novi naziv");

console.log(profil2.pregled());
// { naziv: "Novi naziv", aktivan: true }