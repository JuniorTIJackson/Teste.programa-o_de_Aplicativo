const capa = document.querySelector("#capa")
const sinopse = document.querySelector("#sinopse")
const bt1 = document.querySelector("#bt1")
const bt2 = document.querySelector("#bt2")
const bt3 = document.querySelector("#bt3")
const bt4 = document.querySelector("#bt4")



//evento

bt1.addEventListener("click", guerra_civil)
bt2.addEventListener("click", em_busca_d_viganca)
bt3.addEventListener("click", hora_d_massacre)
bt4.addEventListener("click", ultimato)



function guerra_civil() {
    capa.src = "img/civil_war.webp"
    sinopse.textContent = `A Guerra Civil da Marvel é um evento que divide a comunidade de super-heróis em duas facções ideológicas opostas.  No universo dos quadrinhos, o conflito é desencadeado por uma explosão em Stamford que mata centenas de civis, incluindo crianças, levando o governo dos EUA a impor a Lei de Registro de Super-Humanos, que exige que heróis revelem suas identidades e sejam supervisionados pelo Estado.  Tony Stark (Homem de Ferro) apoia a lei para garantir responsabilidade e evitar tragédias futuras, enquanto Steve Rogers (Capitão América) se opõe, defendendo a liberdade individual e a privacidade, temendo que o controle estatal corrompa o espírito heroico. `
}

function em_busca_d_viganca() {
    capa.src = "img/Em_busca_de_vigança.webp"
    sinopse.textContent = `Um homem (Arnold Schwarzenegger) traumatizado busca vingança após ter perdido a esposa e o filho em acidente de avião causado por negligência de um controlador de tráfego aéreo (Scoot McNairy). Inspirado no acidente de Überlingen, no qual os passageiros eram em sua maioria crianças.
    O tão esperado encontro dos protagonistas (“promovido” por uma jornalista que surge na história com a intenção de escrever um livro sobre o episódio e logo é esquecida pelo roteiro) é o ponto alto da produção, mas a posterior passagem de tempo transforma, definitivamente, “Em busca de vingança” em uma pegadinha tanto para os fãs de Schwarzenegger quanto para os amantes de dramas intensos.`
}

function hora_d_massacre() {
    capa.src = "img/hora_d_masacre.webp"
    sinopse.textContent = `Hora do Massacre, de François Simard, é um filme de terror que narra a história de um grupo de seis jovens ativistas, focados em seus objetivos e em conseguir visibilidade para a causa. Na tentativa de chamar atenção para a crise ambiental, decidem invadir e vandalizar uma super loja de móveis ativamente responsável por apoiar o desmatamento. Mascarados e equipados, o grupo se esconde dentro da loja, esperando que o estabelecimento seja fechado para começar a manifestação. Mas o plano deles dá errado quando ficam presos lá dentro e precisam enfrentar um guarda de segurança enlouquecido com uma terrível fixação pela caça primitiva. À medida que a noite se enche de violência e terror, os adolescentes enfrentam uma luta desesperada pelas suas vidas contra um assassino perturbador que se diverte ao deixar o ambiente repleto de armadilhas.`

}
function ultimato() {
    capa.src = "img/Ultimato.webp"
    sinopse.textContent = `Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.`
}