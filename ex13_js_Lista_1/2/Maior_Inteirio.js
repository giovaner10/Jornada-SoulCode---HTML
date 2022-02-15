let A = Number.parseInt( window.prompt('informe o valor A'));
let B = Number.parseInt( window.prompt('informe o valor B'));
let C = Number.parseInt( window.prompt('informe o valor C'));

let maior = 0;

if(A > B ){

    maior = A;

}else{
    maior = B;
}

if(C > maior){
    maior = C;
}

window.alert('o maior valor eh = ' + maior)