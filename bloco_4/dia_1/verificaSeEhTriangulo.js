const anguloA = 20;
const anguloB = 18;
const anguloC = 80;

const validaA = ( 180 - anguloA > 0 && anguloA > 0 );
const validaB = ( 180 - anguloB > 0 && anguloB > 0 );
const validaC = ( 180 - anguloA > 0 && anguloC > 0 );

if ( (validaA && validaB && validaC === true) && ( anguloA + anguloB + anguloC == 180 ) ) {
    console.log ("É um triângulo!");
    return true;
}else{
    console.log("Não é um triângulo!");
    return false;
}
