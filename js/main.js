// propmt per fare inserire all'utente pari o dispari
let UserChoice = prompt("Scrivi `pari` o `dispari`")
console.log("Hai fatto la tua scelta:", UserChoice);

// propmt per fare inserire un numero da 1 a 5 all'utente
let Usernumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Hai scelto il numero:", Usernumero );

// funzione per generare un numero random per il pc tra 1 e 5 
function PcChoice() {
    return Math.floor(Math.random() * 5) + 1;
}

let PcChoiceNumber = PcChoice() ;
console.log("Il Pc ha scelto:", PcChoiceNumber);

// sommo i due numeri
let somma = UserChoice + PcChoice;
console.log(somma);

let soluzione = risultato(somma);
console.log(`Il risultato è:`, soluzione);


// utilizzo un if per dichiarare chi ha vinto
if(UserChoice === soluzione){
    console.log("Se il vincitore, complimenti")
} else {
    console.log("Spiacente, hai perso")
}

