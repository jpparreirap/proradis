function separaNumerosEmArray(num){
    if(typeof num !== 'number')
        throw new Error("Tipo de dado inválido. Tente entrar com um número;");

    const array = String(num).split('').map((numStr) => Number(numStr));

    return array;
}

console.log(separaNumerosEmArray(193278));