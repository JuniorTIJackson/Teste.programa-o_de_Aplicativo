//dom

const nt1= document.querySelector("#nt1")
const nt2= document.querySelector("#nt2")
const nt3= document.querySelector("#nt3")
const bt= document.querySelector("#bt")

const medi= document.querySelector("#media")

const situacao= document.querySelector("#situacao")

//event


bt.addEventListener("click",media)



//acão

function media(){
    n1=Number(nt1.value)
    n2=Number(nt2.value)
    n3=Number(nt3.value)

    calculo= (n1+n2+n3) / 3

    medi.textContent =` A media: ${calculo}`

    if (calculo >=7){
        situacao.textContent=` Aprovado!!`

    }else if(calculo >=4 && calculo < 7){

        situacao.textContent=`Recuperação !!`

    }else if(calculo < 4 ){
        situacao.textContent=`Reprovado!!`

    }



}
