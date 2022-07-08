function myFunction (dateA,dateB){

    if(!((dateA && dateB) instanceof Date))
        throw new Error("Tipo de dado inválido. Dados do tipo Date são aceitos;");

    const diffEmMilliseconds = Math.abs(dateA - dateB);
                                              //Mili  Seg   min
    const resultEmHoras = diffEmMilliseconds / (1000 * 60 * 60);

    if(resultEmHoras > 1)
        return false

    return true;
}

console.log('\n');
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //True
console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))); //True
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))); //False
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))); //True
console.log('\n');
    