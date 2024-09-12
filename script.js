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

function somar(num1, num2) {
  return num1 + num2;
}

function imprimirResultado(resultado) {
  console.log("O resultado da soma é: " + resultado);
}

function somar(num1, num2, callback) {
  let resultado = num1 + num2;
  callback(resultado);
}

somar(2, 3, imprimirResultado);