function checkArrays(arrayA, arrayB) {

    if(!Array.isArray(arrayA))
        throw new Error("Tipo de dado inválido. Somente arrays são aceitos;");

    let resposta = false;

    if(arrayA.length == arrayB.length){

        arrayA.forEach(elem => {
            resposta = arrayB.includes(elem);
        });
    
        if(resposta){
            return console.log(`[${arrayA}] é igual a [${arrayB}]`);
        }
        return console.log(`[${arrayA}] é diferente de [${arrayB}] e não é sublista`);
    }

    else if(arrayA.length > arrayB.length){
        arrayB.forEach(elem => {
            resposta = arrayA.includes(elem);
        });
    
        if(resposta){
            return console.log(`[${arrayB}] é uma sublista de [${arrayA}]`);
        }
        return console.log(`[${arrayB}] não é uma sublista de [${arrayA}]`);  
    }

    arrayA.forEach(elem => {
        resposta = arrayB.includes(elem);
    });

    if(resposta){
        return console.log(`[${arrayA}] é uma sublista de [${arrayB}]`);
    }
    return console.log(`[${arrayA}] não é uma sublista de [${arrayB}]`); 

}

const A = [1, 2, 3];
const B = [1, 2, 3, 4, 5];
const C = [3, 4, 5];
const D = [3, 4];
const E = [1, 2, 3];
const F = [4, 5, 6];

console.log("\nRespostas: ");
checkArrays(A,B);
checkArrays(C,B);
checkArrays(D,B);
checkArrays(A,E);
checkArrays(B,D);
checkArrays(E,F);
console.log('\n');