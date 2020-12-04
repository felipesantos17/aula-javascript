
function load() {
  alert("Página carregada!")
}

function clicou (elemento) {
  // document.querySelector("body button").innerHTML = "<b>Obrigado por clicar </b>";
  elemento.innerHTML =  "<b>Obrigado por clicar </b>";
}

function trocar(elemento) {
  elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento) {
  elemento.innerHTML = "Passe novamente!"
}

function funcaoChange(elemento) {
  console.log(elemento.value)
}

// for(let count = 0; count <= 5; count++) {
//   alert(count)
// }

// let count = 0;
// while (count <= 5){
//   console.log(count)
//   count++;
// }

// let idade = prompt("Qual sua iddade?");
// if (idade >= 18 ) {
//   alert("maior de idade");
// }else{
//   alert("menor de idade");
// }

// let lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();
// lista.reverse()

// console.log(lista)
// console.log(lista.toString())
// console.log(lista.join(" - "))
