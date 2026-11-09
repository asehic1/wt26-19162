
function generisiPlan(n, k) {

    for (let i = 1; i <= n; i++) {

        console.log("Ponavljanje broj " + i);

        // Pauza nakon svakih k ponavljanja,
        // osim nakon posljednjeg ponavljanja
        if (i % k === 0 && i < n) {
            console.log("PAUZA!");
        }
    }

    console.log("Plan je završen!");
}


// Unos podataka
let unosN = prompt("Unesite ukupan broj ponavljanja (n):");
let unosK = prompt("Unesite nakon koliko ponavljanja slijedi pauza (k):");

// Provjera unosa
if (unosN === null || unosK === null ||
    unosN.trim() === "" || unosK.trim() === "") {

    alert("Greška! Morate unijeti oba podatka.");

} else {

    let n = Number(unosN);
    let k = Number(unosK);

    if (!Number.isInteger(n) || !Number.isInteger(k) ||
        n <= 0 || k <= 0) {

        alert("Greška! Unesite dva pozitivna cijela broja.");

    } else {

        generisiPlan(n, k);

    }
}
