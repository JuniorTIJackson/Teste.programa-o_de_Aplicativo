const dist= document.querySelector("#distancia")
const cons= document.querySelector("#consumo")
const pre=document.querySelector("#preço")
const cal=document.querySelector("#calcular")

const resul= document.querySelector("#resultado")



cal.addEventListener("click",calculo)



function calculo(){
    d=Number(dist.value)
    c=Number(cons.value)
    p=Number(pre.value)

    calc=(d/c) *p

    resul.textContent=`${calc} R$`
}