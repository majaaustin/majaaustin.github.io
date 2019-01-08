var inpNavn = document.getElementById("inpNavn");
var btnNavn = document.getElementById("btnNavn");
var btnLeggTil = document.getElementById("btnLeggTil");
var btnTaUt = document.getElementById("btnTaUt");
var p = document.getElementById("p");
var popup = document.getElementById("popup");
var popup1 = document.getElementById("popup1");
var inpAdd = document.getElementById("inpAdd");
var btnAdd = document.getElementById("btnAdd");
var btnMist = document.getElementById("btnMist");
var inpMist = document.getElementById("inpMist");
var merepenger;
var mindrepenger;

var bruker = {
    navn: " ",
    kontonr:20393,
    saldo: 200000,
    utgift: 2
};

btnNavn.onclick = function () {
    inpNavn.style.display = "none";
    bruker.navn = inpNavn.value;
    p.innerHTML += `
    ${bruker.navn} </br> 
    <p>Kontonummer: </p>${bruker.kontonr} </br>
    <p>Inne på saldo: </p>${bruker.saldo}</br>
    `;
    btnLeggTil.style.display = "block";
    btnTaUt.style.display = "block";
    btnNavn.style.display = "none";


};

btnLeggTil.onclick = function () {
        // En funksjon som gjør at popup-vinduet vises
        popup.style.display = "block"; // Elementet popup vises på nettsiden.
    };
window.onclick = function(event){
        // En funksjon som gjør at hvis knappen, popup-vinduet eller videoen trykkes på vises popup-vinduet, eller fortsettes å vises.
        // Hvis andre steder trykkes på vises ikke popup-vinduet.
        if(event.target === btnLeggTil || event.target === popup || event.target === popup.children[0]){
            popup.style.display = "block"; // Elementet popup vises på nettsiden.
        }
        else{
            popup.style.display = "none"; // Elementet popup skjules på nettsiden
        }
    };

btnAdd.onclick = function () {
    bruker.saldo = bruker.saldo + Number(inpAdd.value);
    p.style.display = none;
    po.style.display = block;
    po.innerHTML += `
    ${bruker.navn} </br> 
    <p>Kontonummer: </p>${bruker.kontonr} </br>
    <p>Inne på saldo: </p>${bruker.saldo}</br>
    `;

    popup.style.display = "none";
};




btnTaUt.onclick = function () {
    // En funksjon som gjør at popup-vinduet vises
    popup1.style.display = "block"; // Elementet popup vises på nettsiden.
};
window.onclick = function(event){
    // En funksjon som gjør at hvis knappen, popup-vinduet eller videoen trykkes på vises popup-vinduet, eller fortsettes å vises.
    // Hvis andre steder trykkes på vises ikke popup-vinduet.
    if(event.target === btnTaUt|| event.target === popup1 || event.target === popup1.children[0]){
        popup1.style.display = "block"; // Elementet popup vises på nettsiden.
    }
    else{
        popup1.style.display = "none"; // Elementet popup skjules på nettsiden
    }
};

btnMist.onclick = function () {
    bruker.saldo = bruker.saldo - Number(inpMist.value);
    p.style.display = none;
    po.style.display = block;
    po.innerHTML += `
    ${bruker.navn} </br> 
    <p>Kontonummer: </p>${bruker.kontonr} </br>
    <p>Inne på saldo: </p>${bruker.saldo}</br>
    `;
    popup1.style.display = "none";
};






