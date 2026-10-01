const sal = document.querySelector("#sal")
const ano = document.querySelector("#ano")
const r1 = document.querySelector("#r1")
const bt1 = document.querySelector("#bt1")






bt1.addEventListener("click", verificar)


function verificar() {
    s = Number(sal.value)
    a = Number(ano.value)

    if (s >= 5000 && a > 5) {
        r1.textContent = `Funcionário sênior`

    } else if (s >= 5000 && a <= 5) {
        r1.textContent = `Funcionário experiente`

    } else if (s < 5000 && a > 5) {

        r1.textContent = `Funcionário antigo`

    } else if (s < 5000 && a <= 5) {

        r1.textContent = `Funcionário iniciante`


    }
}





