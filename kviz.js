const kvizoveOtazky = [
    {   cislo: 1, // TODO: najdi lepší způsob jak to očíslovat než takhle natvrdo
        otazka: "Kdo je vládcem vévodství Toussaint?",
        odpovedi: {
            a: "Yennefer z Vengerbergu",
            b: "Anna Henrietta",
            c: "Emhyr var Emreis, bílý plamen",
            d: "Olgierd von Everec"
        },
        obrazek: "obrazky/Toussaint.png"
    },
    {   cislo: 2,
        otazka: "Kam se uchylují zaklínači ze školy vlka na zimní období?",
        odpovedi: {
            a: "Na Kaer Morhen",
            b: "Do Novigradu",
            c: "Na ostrovy Skellige",
            d: "Do Beauclair v Toussaintu"
        },
        obrazek: "obrazky/wolf.webp"
    },
    {   cislo: 3,
        otazka: "Kdo je pravá láska zaklínače Geralta?",
        odpovedi: {
            a: "Triss Ranuncul",
            b: "Anna Henrietta",
            c: "Yennefer z Vengerbergu",
            d: "Keira Metz"
        },
        obrazek: "obrazky/Shani.png"
    },
    {   cislo: 4,
        otazka: "Co je nejlepší hra všech dob podle Adély K.?",
        odpovedi: {
            a: "Fortnite",
            b: "Pac Man",
            c: "Botanicula",
            d: "Zaklínač 3: Divoký hon"
        },
        obrazek: "obrazky/pacman.jpg"
    },
];
let polozenyDotaz = document.getElementById("otazka");
let obrazek = document.getElementById("obrazek");
let zvoleneOdpovedi = [];

/* console.log(Object.keys(kvizoveOtazky[0].odpovedi).length) ; */
console.log(otazka);
window.addEventListener("load", ()=> {
    polozOtazku(0);
  
});
    
function polozOtazku (cisloOtazky) {
    // TOHLE NAČTE 1. OTÁZKU Z POLE OTÁZEK, VŠECHNY MOŽNOSTI ODPOVĚDÍ A OBRÁZEK, a otázka 1/N count nahoře
    polozenyDotaz.innerHTML =kvizoveOtazky[cisloOtazky].otazka;
    // vypíše pořadí - číslo otázky a celkové množství otázek
    document.getElementById("poradi").innerHTML="Otázka "+kvizoveOtazky[cisloOtazky].cislo+" / "+kvizoveOtazky.length;
    // načte obrázek unikátní pro 1. otázku
    obrazek.setAttribute('src', kvizoveOtazky[cisloOtazky].obrazek);

    let otazka = kvizoveOtazky[cisloOtazky];
    let odpovedi = otazka.odpovedi;

    let minulaOtazka = kvizoveOtazky[cisloOtazky-1];
    console.log(minulaOtazka);

for (let i in odpovedi) {
        let ul = document.querySelector('ul');
        let moznost = document.createElement('li'); 
        moznost.classList.add("button");
        moznost.textContent = i+") "+odpovedi[i];
        moznost.dataset.zvolenaOdpoved=i; //tohle přidává unikátní data-attribute a-d každé odpovědi

        // tohle přidá eventListener na každý <li>
        moznost.addEventListener('click', (e)=> {

        // Přidá do pole zvolených odpovědí nově zvolenou odpověď
        zvoleneOdpovedi.push(e.target.dataset.zvolenaOdpoved);

        console.log(zvoleneOdpovedi);


        polozOtazku(cisloOtazky+1);

        });
        ul.appendChild(moznost); //vypíše všechny <li>
        otazka = kvizoveOtazky[+1];
        
    }
    
    };

