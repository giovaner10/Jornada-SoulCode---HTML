let X = Number.parseInt( window.prompt('informe o valor X'));
let Y = Number.parseInt( window.prompt('informe o valor Y'));


window.alert('Antes da troca : X = ' + X + ' e Y = ' + Y);

let auxiliar = X;
X = Y;
Y = auxiliar;


window.alert('Depois da troca : X = ' + X + ' e Y = ' + Y);