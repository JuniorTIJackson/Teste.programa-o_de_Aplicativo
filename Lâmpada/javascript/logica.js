const alvo = document.querySelector("#alvo")

const ligar = document.querySelector("#ligar")

const desligar = document.querySelector("#desligar")


//evento

ligar.addEventListener("click", on)

desligar.addEventListener("click", off)


//Ação

function on() {

    alvo.src = "img/lampada-acesa.png"
}

function off() {
    alvo.src = "img/lampada apagada.png"
}