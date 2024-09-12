const letras = ['a', 'b','c','d','e']

function ShowItems(array, callback){
    for(let i = 0; i < array.length; i++){
        const letraAtual = array[i]

        callback(letraAtual)
    }
}

function fazConsoleLog (item){
    console.log(item);
}

ShowItems(letras, fazConsoleLog);


/*ShowItems(letras, function(item){
console.log(item)
});*/ 