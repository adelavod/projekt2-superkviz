const kvizoveOtazky = [
    {   cislo: "1", // TODO: najdi lepší způsob jak to očíslovat než takhle natvrdo
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
            b: "Do Ostravy na Dubinu",
            c: "Na ostrovy Skellige",
            d: "Do Beauclair v Toussaintu",
        },
        obrazek: "obrazky/wolf.webp"
    },
    {   cislo: 3,
        otazka: "Kdo je jediná pravá láska zaklínače Geralta?",
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
let zvoleneOdpovedi = []; // SPRAVIT !!!!!!!! na prázdné pole!
let spravneOdpovedi = ["b", "a", "c", "d"];
/* console.log(kvizoveOtazky[1].odpovedi.a); */

/* console.log(Object.keys(kvizoveOtazky[0].odpovedi).length) ; */

window.addEventListener("load", ()=> {
    polozOtazku(0); //načte první otázku

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
        console.log(kvizoveOtazky);
        if (cisloOtazky < kvizoveOtazky.length-1) {
            polozOtazku(cisloOtazky+1);
        } else {
            console.log(zvoleneOdpovedi);

            let kviz = document.getElementById("kviz");
            let body = document.getElementById("body");
            body.removeChild(kviz);
            ukazatOdpovedi();
        }
        
        // Mažeme předchozí odpovědi
        if ((cisloOtazky >=0)&&(cisloOtazky<kvizoveOtazky.length-1)) {

            let li = document.querySelectorAll('li'); //tohle označí všechny <li> na stránce
            let ul = document.querySelector('ul');
            ul.removeChild(li[0]); 
            ul.removeChild(li[1]); 
            ul.removeChild(li[2]); 
            ul.removeChild(li[3]); 
        };
        });
        
        ul.appendChild(moznost); //vypíše všechny <li>
        otazka = kvizoveOtazky[+1];

    }
    };

function ukazatOdpovedi(){
let body = document.getElementById("body");
let vysledky = document.createElement("div");

vysledky.classList.add("kviz", "vysledek");

let h2score = document.createElement("h2");
h2score.textContent = "Rekapitulace odpovědí a tvoje hodnocení";
body.appendChild(vysledky);
    vysledky.appendChild(h2score);
    let spravneOdpovediCount = 0;

    for (let i in zvoleneOdpovedi) {
        //rekapitulace - po otázkách
        let rekapOtazka = document.createElement("h3");
        rekapOtazka.classList.add("otazka");
        rekapOtazka.textContent = (parseInt(i)+1)+". "+kvizoveOtazky[i].otazka;
        vysledky.appendChild(rekapOtazka);
        
        //pokud správná, výborně. Pokud špatná, jaká byla ta správná?
            let tvojeOdpoved = document.createElement("p");
            tvojeOdpoved.classList.add("novyradek");
            
            
        if (zvoleneOdpovedi[i]==spravneOdpovedi[i]) {
            tvojeOdpoved.textContent = "Tvoje odpověď byla: "+kvizoveOtazky[i].odpovedi[(zvoleneOdpovedi[i])]+". \r\nTo byla správná odpověď.";
            spravneOdpovediCount = spravneOdpovediCount+1;
        } else {
            tvojeOdpoved.textContent = "Tvoje odpověď byla: "+kvizoveOtazky[i].odpovedi[(zvoleneOdpovedi[i])]+". \r\nTo nebyla správná odpověď. \r\n"+
            "Správná odpověď byla: "+kvizoveOtazky[i].odpovedi[(spravneOdpovedi[i])]+".";
        }
        vysledky.appendChild(tvojeOdpoved);
        
    };
    console.log(spravneOdpovediCount);
    let uspesnost = (100*spravneOdpovediCount)/kvizoveOtazky.length;
    console.log(uspesnost);

    let h3uspesnost = document.createElement("h2");
    h3uspesnost.classList.add("novyradek");
    h3uspesnost.textContent = "Máš správně "+spravneOdpovediCount+" ze "+kvizoveOtazky.length+" otázek. \r\n"+"Úspěšnost: "+uspesnost+" %";
    vysledky.appendChild(h3uspesnost);
};

