function myFunction (array){

    if(!Array.isArray(arrayA))
        throw new Error("Tipo de dado inválido. Somente array é aceito;");

    const arrayFiltrado = array.filter(
                            (valor) => {
                                if(valor >= 0)
                                    return valor;
                            });

    return arrayFiltrado;
    
}


const A = [1,2,3,null,4,null,5];
const B = [1,2,3,null,4,null,5,-1,6,7];
const C = [1,2,3,null,4,null,5,6,7,8,9];
const D = [1,2,3,null,4,null,5];


console.log(myFunction(A));
console.log(myFunction(B));
console.log(myFunction(C));
console.log(myFunction(D));