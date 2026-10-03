const kappale = document.getElementById("tulosTeksti");
kappale.innerText = "Moro Vaasa! Teksti muuttui.";

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then (data => {
    console.log("Saatu data:", data);
});


// Elämän ohje kotisivuille:

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    document.getElementById("tulosTeksti").textContent =
    "Elämän ohje: " + data.slip.advice;
})
.catch(error => {
    console.error(error);
});


// Toiminnon käynnistäminen: Painike

const nappi = document.getElementById("haeNappi");

nappi.addEventListener("click", () => {
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
    document.getElementById("tulosTeksti").innerText = data.slip.advice;
    });

});


// Heataan tietoja... -palaute

const kentta = document.getElementById("tulosTeksti");
kentta.innerText = "Haetaan tietoa....";

fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        kentta.innerText = data.slip.advice;    
    });

// Verkkoyhteys ei toimi:

// const kentta = document.getElementById("tulosTeksti");

// fetch("https://tama-osoite-on-rikki-1234.com/api")
//     .then(res => res.json())
//     .then(data => {
//             kentta.innerText = "Tätä ei koskaan suoriteta, koska osoite on rikki.";
//     })
//     .catch(virhe => {
//         console.error("Taustavirhe kehittäjälle:", virhe);
//         kentta.innerText = "Hups! Verkkoyhteys ei toimi, kokeile myöhemmin uudelleen.";
//     });

function haeTieto() {
    let valinta = document.getElementById("valinta").value;

    if (valinta === "tervehdys") {
        document.getElementById("tulosTeksti").textContent =
            "Hei käyttäjä!";
    }

    if (valinta === "aika") {
        document.getElementById("tulosTeksti").textContent =
            new Date().toLocaleTimeString();
    }
}