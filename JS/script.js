const mailList = ['prova1@mail.it', 'prova2@mail.it', 'prova3@mail.it', 
'prova4@mail.it', 'prova5@mail.it'];

const btnAccesso = document.getElementById("accedi");

const mailInserita = document.getElementById("email");



btnAccesso.addEventListener("click", function () {
  const emailUtente = mailInserita.value;
  if (mailList.includes(emailUtente)) {
    document.getElementById("msg").innerHTML = "Benvenuto!";
    document.getElementById("hide").className = "tophide"
  } else {
    document.getElementById("msg").innerHTML = "Registrati per accedere";
    ;
  }
});  

////////////////////DADI//////////////////////////

const giocatore = math.ceil(math.random()*6)
const pc = math.ceil(math.random()*6)
let messaggio;

if(giocatore > pc ) messaggio = "Vince il giocatore"
else (giocatore < pc) messaggio = "vince il pc"
else messaggio = "pari";










