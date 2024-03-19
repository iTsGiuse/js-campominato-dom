/* VARIABILI */
/* array numeri */
const numeri = [];
const bombe=[];
/* elementi selezionati & creati */
const main = document.querySelector('main');
const grid = document.createElement('div');
const row = document.createElement('div');
const ranking = document.createElement('div');
const finish = document.createElement('div');
let larghezza = 0;
let min = 0;
let max = 0;
let punteggio = 0;
let again=0;

/* seleziona button da html */
const btn = document.querySelector('button.btn');

/* AGGIUNGI EVENTO IN BASE ALLA DIFFICOLTA */
btn.addEventListener('click', function() {

    /* PULISCI GLI ARRAY E IL PUNTEGGIO */
    numeri.splice(0);
    bombe.splice(0);
    punteggio=0;

    /* RIMUOVI LA CLASSE CHE NON PERMETTERE ALL'UTENTE DI CLICCARE LO SCHERMO */
    row.classList.remove('quadratino-dont-touch');

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

                    /* TRASFORMA IL NUMERO IN UNA BOMBA */
                    this.innerHTML= `💣`;

                    /* COLORA DI ROSSO IL QUADRATINO */
                    quadrato.classList.add('clicked-bomb');

                    /* RENDI I QUADRATINI NON CLICCABILI */
                    row.classList.add('quadratino-dont-touch');

                    /* AGGIUNGI LA CLASSE LOSE E MOSTRA MESSAGGIO 'HAI PERSO' */
                    finish.classList.add('lose');
                    finish.innerHTML= `HAI PERSO`;
                    row.append(finish);
                    
                    /* VARIABILE PER OPERAZIONI */
                    again = -1;
                } else {

                    /* COLORA IL QUADRATINO DI BLU */
                    quadrato.classList.add('clicked-not-bomb');

                    /* INCREMENTA LA VARABILE PER OPERAZIONI */
                    again++;
                }

            }
            if (again > 0) {

                /* AUMENTA IL PUNTEGGIO DI 1 */
                punteggio++;

                /* DEFINISCI IL RISULTATO DI PUNTEGGIO DA MOSTRARE A SCHERMO */
                ranking.classList.add('box-ranking');
                ranking.innerHTML = `<div> Punteggio: ${punteggio} </div>`;

            } else if (again < 1){

                /* PUNTEGGIO -1 PERCHE' SENNO' ANCHE SE PRENDO LA BOMBA, IL PUNTEGGIO AUMENTA LO STESSO */
                punteggio=punteggio - 1;

                /* DEFINISCI IL RISULTATO DI PUNTEGGIO DA MOSTRARE A SCHERMO */
                ranking.classList.add('box-ranking');
                ranking.innerHTML = `<div> Punteggio: ${punteggio} </div>`;
            } 

            if (punteggio === (max - 16)){

                /* RENDI I QUADRATINI NON CLICCABILI */
                row.classList.add('quadratino-dont-touch');

                /* AGGIUNGI LA CLASSE WIN E MOSTRA A SCHERMO CHE HAI VINTO */
                finish.classList.add('win');
                finish.innerHTML= `HAI VINTO`;
                row.append(finish);
            }

            /* APPENDI IL PUNTEGGIO AL CENTRO SOTTO LA GRIGLIA */
            grid.append(ranking);

        });

        /* APPENDI IL QUADRATO */
        row.append(quadrato);

    }

}
/* FUNZIONE PER CREARE I NUMERI BOMBA */
function bomba(){
    /* CICLO - I NUMERI BOMBA SONO 16 */
    for (let i=0; i<16; i++){
        
        /* INIZIALIZZAZIONE VARIABILE PER ALTRO CICLO */
        let y=0;

        /* CICLO PER VERIFICARE DI NON INSERIRE LO STESSO NUMERO PIU VOLTE NEL ARRAY */
        while (y<1) {
            
            /* GENERA UN NUMERO RANDOM INTERO */
            let singolaBomba = Math.floor(Math.random() * max);

            /* VERIFICA */
            if (singolaBomba === bombe[i]){
                singolaBomba= Math.floor(Math.random() * max);
            } else {
                bombe.push(singolaBomba);
                y=2;
            }
        }
    }
}
