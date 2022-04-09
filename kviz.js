const kvizoveOtazky = [
    {   
        otazka: "Kdo je vládcem vévodství Toussaint?",
        odpovedi: {
            a: "Yennefer z Vengerbergu",
            b: "Anna Henrietta",
            c: "Emhyr var Emreis, bílý plamen",
            d: "Olgierd von Everec",
        },
        spravne: "b",
        obrazek: "obrazky/Toussaint.png"
    },
    {   
        otazka: "Kam se uchylují zaklínači ze školy vlka na zimní období?",
        odpovedi: {
            a: "Na Kaer Morhen",
            b: "Do Ostravy na sídliště Dubina",
            c: "Na ostrovy Skellige",
            d: "Do Beauclair v Toussaintu",
        },
        spravne: "a",
        obrazek: "obrazky/wolf.webp"
    },
    {   
        otazka: "Kdo je jediná pravá láska Geralta z Rivie?",
        odpovedi: {
            a: "Triss Ranuncul",
            b: "Anna Henrietta",
            c: "Yennefer z Vengerbergu",
            d: "Keira Metz"
        },
        spravne: "c",
        obrazek: "obrazky/Shani.png"
    },
    {   
        otazka: "Co z následujícího je oblíbenou vůní Geralta z Rivie?",
        odpovedi: {
            a: "Kuře na rožni",
            b: "Jasmín & patchouli",
            c: "Šeřík & angrešt"
        },
        spravne: "c",
        obrazek: "obrazky/geralt.png"
    },
    {
        otazka: "Kdo z následujících rozhodně není dobrým přítelem Geralta z Rivie?",
        odpovedi: {
            a: "Emiel Regis Rohellec Terzieff-Godefroy",
            b: "Zoltan Chivay, trpaslík",
            c: "Eredin Bréacc Glas, král Divokého Honu",
            d: "Marigold, potulný umělec",
            e: "Calanthé, královna Cintry"
        },
        spravne: "c",
        obrazek: "obrazky/regis.webp"
    },
    {
        otazka: "Co je nejlepší hra všech dob podle Adély K.?",
        odpovedi: {
            a: "Fortnite",
            b: "Pac Man",
            c: "Botanicula",
            d: "Zaklínač 3: Divoký hon"
        },
        spravne: "d",
        obrazek: "obrazky/pacman.jpg"
    }
];
// vytvoří pole správných odpovědí čtením z pole objektů kvizoveOtazky
let spravneOdpovedi = [];
for (let ra in kvizoveOtazky) {

    spravneOdpovedi.push(kvizoveOtazky[ra].spravne);
};
// vytvoří pole, do kterého se budou ukládat zvolené odpovědi
let zvoleneOdpovedi = []; 

window.addEventListener("load", ()=> {
    polozOtazku(0); //načte první otázku
});

function polozOtazku (cisloOtazky) {
    let polozenyDotaz = document.getElementById("otazka");
    let obrazek = document.getElementById("obrazek");

    // TOHLE NAČTE 1. OTÁZKU Z POLE OTÁZEK, VŠECHNY MOŽNOSTI ODPOVĚDÍ A OBRÁZEK, a otázka 1/N count nahoře
    polozenyDotaz.innerHTML =kvizoveOtazky[cisloOtazky].otazka;
    // vypíše pořadí - číslo otázky a celkové množství otázek
    document.getElementById("poradi").innerHTML="Otázka "+(cisloOtazky+1)+" / "+kvizoveOtazky.length;

    // načte obrázek unikátní pro každou otázku
    obrazek.setAttribute('src', kvizoveOtazky[cisloOtazky].obrazek);

    let otazka = kvizoveOtazky[cisloOtazky];
    let odpovedi = otazka.odpovedi;

for (let i in odpovedi) { // přidává možnosti k vygenerovaným otázkám

        let ul = document.querySelector('ul');
        let moznost = document.createElement('li'); 
        moznost.classList.add("button");
        moznost.textContent = i+") "+odpovedi[i];
        moznost.dataset.zvolenaOdpoved=i; //tohle přidává unikátní data-attribute a-x každé odpovědi

        // tohle přidá eventListener na každý <li>
        moznost.addEventListener('click', (e)=> {

        // Přidá do pole zvolených odpovědí nově zvolenou odpověď
        zvoleneOdpovedi.push(e.target.dataset.zvolenaOdpoved);

        if (cisloOtazky < kvizoveOtazky.length-1) {

            polozOtazku(cisloOtazky+1);

        } else {

            let kviz = document.getElementById("kviz");
            let body = document.getElementById("body");
            body.removeChild(kviz);
            ukazatOdpovedi();
        }
        
        // ODSTRANÍ ODPOVĚDI Z PŘEDCHOZÍ OTÁZKY
        if ((cisloOtazky >=0)&&(cisloOtazky<kvizoveOtazky.length-1)) {
            let li = document.querySelectorAll('li'); //tohle označí všechny <li> na stránce
            let ul = document.querySelector('ul');

            for (let i=0; i<(Object.keys(kvizoveOtazky[cisloOtazky].odpovedi).length); i++) {
                    ul.removeChild(li[i]); // odstraní pouze tolik odpovědí, kolik jich otázka měla
            }
        };

        });
        ul.appendChild(moznost); //vypíše všechny <li>
        otazka = kvizoveOtazky[+1];
    }
    };

    //  REKAPITULACE ODPOVĚDÍ A HODNOCENÍ
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
            
        if (zvoleneOdpovedi[i]==spravneOdpovedi[i]) { //správná odpověď
            tvojeOdpoved.textContent = "Tvoje odpověď byla: "+kvizoveOtazky[i].odpovedi[(zvoleneOdpovedi[i])]+". \r\nTo byla správná odpověď.";
            spravneOdpovediCount = spravneOdpovediCount+1;
        } else { //špatná odpověď
            tvojeOdpoved.textContent = "Tvoje odpověď byla: "+kvizoveOtazky[i].odpovedi[(zvoleneOdpovedi[i])]+". \r\nTo nebyla správná odpověď. \r\n"+
            "Správná odpověď byla: "+kvizoveOtazky[i].odpovedi[(spravneOdpovedi[i])]+".";
        }
        vysledky.appendChild(tvojeOdpoved);
        
    };

    // vypíše zaokrouhlenou úspěšnost (na celá čísla)
    let uspesnost = Math.round((100*spravneOdpovediCount)/kvizoveOtazky.length);

    let h3uspesnost = document.createElement("h2");
    h3uspesnost.classList.add("novyradek");
    h3uspesnost.textContent = "Máš správně "+spravneOdpovediCount+" ze "+kvizoveOtazky.length+" otázek. \r\n"+"Úspěšnost: "+uspesnost+" %";
    vysledky.appendChild(h3uspesnost);
};

