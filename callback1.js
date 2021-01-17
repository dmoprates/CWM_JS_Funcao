const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(Fabricante) {
    console.log(Fabricante)
})
fabricantes.forEach(Fabricante => console.log(Fabricante)) // Arrow Function
