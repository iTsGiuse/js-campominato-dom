/* VARIABILI */
/* array numeri */
const numeri = [];
const bombe=[];
/* elementi selezionati & creati */
const main = document.querySelector('main');
const grid = document.createElement('div');
const row = document.createElement('div');
const ranking = document.createElement('div');

let larghezza = 0;
let min = 0;
let max = 0;
let punteggio = 0;
let again=0;

/* seleziona button da html */
const btn = document.querySelector('button.btn');

/* AGGIUNGI EVENTO IN BASE ALLA DIFFICOLTA */
btn.addEventListener('click', function() {
    
    /* seleziona select */
    let difficolta = document.querySelector('#livello').value;

    if (difficolta === "easy") {
        min= 1;
        max = 100;
        larghezza = 10;
        createElementiMain();
        numero();
    } else if (difficolta === "normal") {
        min= 1;
        max = 81;
        larghezza = 9;
        createElementiMain();
        numero();
    } else if (difficolta === "hard") {
        min = 1;
        max = 49;
        larghezza = 7;
        createElementiMain();
        numero();
    }

});

/* FUNCTIONS */
/* FUNZIONE PER CREARE E APPENDERE ELEMENTI MAIN AL MAIN */
function createElementiMain() {

    /* SELEZIONA MAIN DA HTML */
    main.style.display="block";
    console.log(main);

    /* CREA E APPENDI CONTAINER AL MAIN */
    grid.classList.add('container');
    grid.innerHTML= `<div> </div>`;
    main.append(grid);
    console.log(grid);
    
    /* CREA E APPENDI CONTAINER AL MAIN */
    row.classList.add('row');
    row.innerHTML= `<div> </div>`;
    grid.append(row);
    console.log(row);
}

function numero(){
    
    bomba();
    console.log(bombe);

    for (let i=min; i<=max; i++){
        /* CARICA I NUMERI NELLA VARIABILE */
        let number = i;

        /* CARICA I NUMERI NELL'ARRAY */
        numeri.push(numeri);
        
        /* CREA QUADRATO NELL'HTML */
        let quadrato = document.createElement('div');

        /* SELEZIONA IL TIPO DI QUADRATO CSS */
        if (larghezza = 10){
            quadrato.classList.add('quadratino-10');
        } else if (larghezza = 9) {
            quadrato.classList.add('quadratino-9');
        } else if (larghezza = 7) {
            quadrato.classList.add('quadratino-7');
        }

        /* AGGIUNGO IL NUMERO ALL'ELEMENTO */
        quadrato.innerHTML= `<div> ${number} </div>`;

        /* AGGIUNGO L'ELEMENTO NELL'HTML */
        row.append(quadrato);

        /* AGGIUNGI EVENTO QUANDO CLICCHI UN QUADRATINO */
        quadrato.addEventListener('click', function(){

            for (let j=0; j<bombe.length; j++){
                
                /* PRENDI IL CONTENUTO DEL QUADRATINO E CONFRONTALO CON L'ARRAY */
                if (bombe[j] == this.children[0].innerHTML){
                    /* SE IL NUMERO E' UNA BOMBA COLORA DI ROSSO E MOSTRA MESSAGGIO CHE HAI PERSO */
                    quadrato.classList.add('clicked-bomb');
                    alert('Hai scoppiato una bomba, hai perso. Il tuo punteggio è di' + ' ' + punteggio);
                    quadrato.classList.add('dont-touch');
                    again = 0;
                    punetggio=punteggio;
                } else {
                    again = 1;
                    quadrato.classList.add('clicked-not-bomb');
                }

            }

            if (again == 1) {
                /* AUMENTA IL PUNTEGGIO DI 1 */
                punteggio ++;
            }

            /* APPENDI IL PUNTEGGIO AL CENTRO */
            ranking.classList.add('box-ranking');
            ranking.innerHTML = `<div> ${punteggio} </div>`;
            classifica.append(ranking);

        });

        row.append(quadrato);

        ranking.classList.add('box-raking');
        const classifica = document.getElementById('punteggio');
        classifica.append(ranking);

    }

}

function bomba(){
    
    for (let i=0; i<16; i++){
        /* INIZIALIZZAZIONE VARIABILE PER ALTRO CICLO */
        let y=0;

        /* CICLO PER VERIFICARE DI NON INSERIRE LO STESSO NUMERO PIU VOLTE NEL ARRAY */
        while (y<1) {
            
            /* GENERA UN NUMERO RANDOM INTERO */
            let singolaBomba = Math.floor(Math.random() * max);

            /* VERIFICA */
            if (singolaBomba === bombe[i]){
                singolaBomba= Math.random() * max;
            } else {
                bombe.push(singolaBomba);
                y=2;
            }
        }
    }
}