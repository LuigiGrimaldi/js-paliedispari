// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('scrivi una parola');
let parola_inversa = inverti_parola(parola);

function inverti_parola(stringa) {
    let stringa_inversa = stringa.split('').reverse().join('');
    return stringa_inversa;
}
if(parola == parola_inversa){
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}