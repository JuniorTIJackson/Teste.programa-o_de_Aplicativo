// Doo= informar os objetos que vão ser manipulado pelo java script

const seca = document.querySelector("#seca")

const sol_1 = document.querySelector("#sol")

const cheio = document.querySelector("#cheio")

const chuva = document.querySelector("#chuva")

const bt1_voltar = document.querySelector("#voltar_1")

const bt2_voltar = document.querySelector("#voltar_2")

//evento= informar comandos nos obejtos

cheio.addEventListener("click", mar_cheio)

chuva.addEventListener("click", chuvaiada)

bt1_voltar.addEventListener("click", voltar_seca)

bt2_voltar.addEventListener("click", voltar_sol)


//Ação= QUando o evento começar, qual vai ser a ação dos objetos 

function mar_cheio() {
    seca.src = "img/Enchente.gif"
}

function chuvaiada() {
    sol_1.src = "img/chuva.gif"


}

function voltar_seca() {
    seca.src = "img/Seca_gif.gif"
}

function voltar_sol() {
    sol_1.src = "img/sol_nas_nuvens.gif"
}
