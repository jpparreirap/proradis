let carros = [
    { 
        nome: "Peugeot",
        preco: "50000.99"
    },
    { 
        nome: "Honda",
        preco: "80500.70"
    },
    { 
        nome: "Fox",
        preco: "70000.50"
    },
    { 
        nome: "Gol",
        preco: "45000.65"
    },            
    
]

console.log("\nLista de carros: " + JSON.stringify(carros));

//Ordenação por preço, do menor para o maior
carros.sort((a, b) => {
    return parseFloat(a.preco) - parseFloat(b.preco);
});

console.log(`Lista de carros ordenados por preço: ${JSON.stringify(carros)}`);

//Ordenação por ordem alfabética
carros.sort((a, b) => {
    if(a.nome < b.nome)
        return -1;
    return 1;
});

console.log(`Lista de carros ordenados por nome: ${JSON.stringify(carros)}\n`);