
function juntardoisnomes(primeironome, sobrenome) {
    const resultado = `${primeironome} ${sobrenome}`
    return resultado

}

function validarnome(nome) {
    return nome != ""

}

module.exports.juntardoisnomes = juntardoisnomes
module.exports.validarnome = validarnome