import "./style.scss"

const gerenciadenomes = require("./js/gerenciadenomes")

const botao = document.querySelector("#botao_concatenar")
botao.addEventListener("click", cannomes)

function cannomes() {
const nome = document.querySelector("#nome").value
const sobrenome = document.querySelector("#sobrenome").value

const concatenar = gerenciadenomes.juntardoisnomes(nome, sobrenome)
const resultado = document.querySelector("#resultado")

resultado.innerHTML = concatenar

}

const dividirdoisnumeros = require("./js/calculadora")

const dividir_num = document.querySelector("#botao_dividir")
dividir_num.addEventListener("click", numeros)

function numeros() {
    const numero_div1 = document.querySelector("#numero_dividir1").value
    const numero_div2 = document.querySelector("#numero_dividir2").value

    const dividir_numeros = dividirdoisnumeros.dividir(numero_div1, numero_div2)
    const resultado_dividir = document.querySelector("#resultado_divisao")

    resultado_dividir.innerHTML = dividir_numeros

    const formattedNumber = (dividir_numeros).toFixed(2).replace(/[.,]00$/, "");
    dividir_numeros.innerHTML = formattedNumber
}







