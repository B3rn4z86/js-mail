const mailList = ['prova1@mail.it', 'prova2@mail.it', 'prova3@mail.it', 'prova4@mail.it', 'prova5@mail.it'];

const btnAccesso = document.getElementById("accedi");

const mailInserita = document.getElementById("email");

let mex = document.getElementById("msg");

btnAccesso.addEventListener("click", function () {
  const emailUtente = mailInserita.value;
  if (mailList.includes(emailUtente)) {
    mex.innerHTML("Benvenuto");
  } else {
    alert("Non sei registrato");
  }
});




