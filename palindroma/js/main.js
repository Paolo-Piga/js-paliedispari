// creo le due costanti che si collegano all'input e al bottone in html
const InputUser = document.getElementById(`input`);
const bottone = document.getElementById(`bottone`);

// aggiungo l'event listener per il click sul bottone con una funzione
bottone.addEventListener(`click`, function(e){
    e.preventDefault
    
    let evento = Palindroma(InputUser);
    console.log(evento);
})

// creo una funzione per invertire la parola
function revert(parola){
    let Inverti = parola.split(``).reverse;
    return parola === Inverti; 
}