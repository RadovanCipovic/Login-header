const loginDiv = document.getElementById("login");

function btnClick() {
  
  if(loginDiv.classList.contains('show')){
    loginDiv.classList.remove('show')
  } else {
    loginDiv.classList.add('show')
  }
  
}

function loginClick() {
const sifra = document.getElementById("sifra");
const ime = document.getElementById("ime");
  
  alert(`Vase ime je: ${ime.value}\nVasa sifra je: ${sifra.value}`)
}


