// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.




const listaElment = document.getElementById("lista");
//console.log("listaElement");
const total = 10;
let emails = [];

for (let i = 0; i < total; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(function (resp) {
            const mail = resp.data.response;
            emails.push(mail);
            console.log(mail);

            listaElment.innerHTML += `<li>${mail}</li>`;
        
        
        })
        
};