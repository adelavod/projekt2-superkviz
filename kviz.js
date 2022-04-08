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
    },
    {   cislo: 3,
        otazka: "Kdo je pravá láska zaklínače Geralta?",
        odpovedi: {
            a: "Triss Ranuncul",
            b: "Anna Henrietta",
            c: "Yennefer z Vengerbergu",
            d: "Keira Metz"
        },
    },
    {   cislo: 4,
        otazka: "Co je nejlepší hra všech dob podle Adély K.?",
        odpovedi: {
            a: "Fortnite",
            b: "Pac Man",
            c: "Botanicula",
            d: "Zaklínač 3: Divoký hon"
        },
    },
];
let polozenyDotaz = document.getElementById("otazka");
let obrazek = document.getElementById("obrazek");


/* console.log(Object.keys(kvizoveOtazky[0].odpovedi).length) ; */

window.addEventListener("load", ()=> { 
    polozenyDotaz.innerHTML =kvizoveOtazky[0].otazka;
    document.getElementById("poradi").innerHTML="Otázka "+kvizoveOtazky[0].cislo+" / "+kvizoveOtazky.length;
    obrazek.setAttribute('src', kvizoveOtazky[0].obrazek);
    
    let otazka = kvizoveOtazky[0];
    /* console.log(otazka);
    console.log(Object.keys(otazka.odpovedi).length) */

    /* for (let i=0; i< Object.keys(otazka.odpovedi).length; i++) {
        let ul = document.querySelector('ul');
        let moznost = document.createElement('li'); 

        
        ul.appendChild(moznost);
        moznost.textContent=otazka.odpovedi[i];
        console.log(otazka.odpovedi);
    }; */
    
    let odpovedi = otazka.odpovedi;
    for (let i in odpovedi) {
        let ul = document.querySelector('ul');
        let moznost = document.createElement('li'); 

        console.log(i, odpovedi[i]);
        moznost.textContent = i+") "+odpovedi[i];
        ul.appendChild(moznost);
        

        
    }
});


