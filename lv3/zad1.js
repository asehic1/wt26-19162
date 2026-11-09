
function procijeniRedZaZaposlenike(vrijednost) {
    const p1 = 5;
    const p2 = 10;

    if (vrijednost <= p1) {
        return "Prihvatljivo";
    } else if (vrijednost <= p2) {
        return "Povećano opterećenje";
    } else {
        return "Za hitnu provjeru";
    }
}

// Unos podatka
let unos = prompt("Unesite broj ljudi u redu:");

// Provjera je li unos prazan
if (unos === null || unos.trim() === "") {
    alert("Niste unijeli podatak.");
} else {
    let vrijednost = Number(unos);

    // Provjera ispravnosti unosa
    if (!Number.isFinite(vrijednost) ||
        vrijednost < 0 ||
        !Number.isInteger(vrijednost)) {

        alert("Greška! Unesite nenegativan cijeli broj.");

    } else {
        let rezultat = procijeniRedZaZaposlenike(vrijednost);

        alert("Procjena reda: " + rezultat);
    }
}
