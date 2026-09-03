//se fosse classe seria= const alvo.documente.que....(".")
const alvo = document.querySelector("#alvo")
const bahia = document.querySelector("#bahia")
const vitoria = document.querySelector("#vitoria")
const real = document.querySelector("#real")
const roma = document.querySelector("#roma")
const arsenal = document.querySelector("#arsenal")

//oque o usuário faz e oque vai acontecer
bahia.addEventListener("click", Bahia)
vitoria.addEventListener("click", Vitoria)
real.addEventListener("click", Real)// (real madrid ) com espaço da erro.tem que ser _
roma.addEventListener("click", Roma)
arsenal.addEventListener("click", Arsenal)



//depois que o evento acontecer,qual ação que vai  executado
function Bahia() {
    alvo.src = "img/9967.png"
}

function Vitoria() {
    alvo.src = "img/Escudo_ECV.webp"

}
function Real() {
    alvo.src = "img/Real_Madrid_CF.svg.webp"

}
function Roma() {
    alvo.src = "img/AS_Roma_logo.png"

}
function Arsenal() {
    alvo.src = "img/Arsenal_FC.svg.webp"

}