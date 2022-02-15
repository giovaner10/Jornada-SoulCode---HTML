let ladoA = Number.parseFloat( window.prompt('informe o tamanho do lado A do triângulo'));
let ladoB = Number.parseFloat( window.prompt('informe o tamanho do lado B do triângulo'));
let ladoC = Number.parseFloat( window.prompt('informe o tamanho do lado C do triângulo'));


if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){

    window.alert('equilatero');

} else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){

    window.alert('escaleno');

} else{

    window.alert('isoceles')
}


