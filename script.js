let person = document.getElementById('person');
let zoro = document.getElementById('zoro');
let zoroDesc = document.getElementById('zoro-desc');
let luffy = document.getElementById('luffy');
let luffyDesc = document.getElementById('luffy-desc');
let usopp = document.getElementById('usopp');
let usoppDesc = document.getElementById('usopp-desc');

let fechar = document.getElementById('fechar')

let foto1 = document.getElementById('foto1');
let foto2 = document.getElementById('foto2');
let foto3 = document.getElementById('foto3');


// Parte em que pego o ID do personagem clicado para mostras as infos dele 
function fecharDescricao() {
    if(personagem === 'zoro') {
        zoroDesc.classList.add("hide-char");
        aparecerTrio();
    }
    if(personagem === 'luffy') {
        aparecerTrio();
        luffyDesc.classList.add("hide-char");
    }
    if(personagem === 'usopp') {
        aparecerTrio();
        usoppDesc.classList.add("hide-char");
    }

};


function sumirTrio() {
    zoro.classList.add('hide-char');
    luffy.classList.add('hide-char');
    usopp.classList.add('hide-char');
}

function aparecerTrio() {
    zoro.classList.remove('hide-char');
    luffy.classList.remove('hide-char');
    usopp.classList.remove('hide-char');
}


let personagem = '';

zoro.addEventListener("click", function() {
    personagem = this.id;
    sumirTrio();
    zoroDesc.classList.remove('hide-char');
});

luffy.addEventListener("click", function() {
    personagem = this.id;
    sumirTrio();
    luffyDesc.classList.remove('hide-char');
});

usopp.addEventListener("click", function() {
    personagem = this.id;
    sumirTrio();
    usoppDesc.classList.remove('hide-char');
});
// ------------------------------------------------------------------------


// SLIDE SHOW -------------------------------------------------------------
let i = 1;
let iFoto = 0;

function plusSlides(iFoto) {
    i += iFoto;

    if (i === 1) {
        foto1.classList.remove('mySlides');
        foto2.classList.add('mySlides');
        foto3.classList.add('mySlides');
    }
    if (i === 2) {
        foto1.classList.add('mySlides');
        foto2.classList.remove('mySlides');
        foto3.classList.add('mySlides');
    }
    if (i === 3) {
        foto1.classList.add('mySlides');
        foto2.classList.add('mySlides');
        foto3.classList.remove('mySlides');
    }
    if (i < 1){
        i = 3;
        foto1.classList.add('mySlides');
        foto2.classList.add('mySlides');
        foto3.classList.remove('mySlides');
    }
    if (i > 3){
        i = 1;
        foto1.classList.remove('mySlides');
        foto2.classList.add('mySlides');
        foto3.classList.add('mySlides');
    }
}
// ------------------------------------------------------------------------


// SORTEIO ----------------------------------------------------------------
const zoroAtt = {habilidade:'90', haki:'50', estrategia:'70', determinacao:'95'};
const luffyAtt = {habilidade:'95', haki:'40', estrategia:'60', determinacao:'100'};
const chopperAtt = {habilidade:'70', haki:'10', estrategia:'50', determinacao:'75'};
const usoppAtt = {habilidade:'40', haki:'10', estrategia:'80', determinacao:'70'};
const namiAtt = {habilidade:'20', haki:'10', estrategia:'85', determinacao:'60'};
const sanjiAtt = {habilidade:'85', haki:'30', estrategia:'65', determinacao:'90'};

const zoroDuelo = document.getElementById('zoro-duelo');
const duelo = document.getElementById('duelo');
const btnSortear = document.getElementById('btn-sortear');



function sortear() {
    zoroDuelo.classList.add('hide-char');
    duelo.classList.remove('hide-char');

    let nSorteado = Math.floor(Math.random() * 5) + 2;
    
    if (nSorteado === 2) {}
    if (nSorteado === 3) {}
    if (nSorteado === 4) {}
    if (nSorteado === 5) {}
    if (nSorteado === 6) {}
};