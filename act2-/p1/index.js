const a = 1;
const b = 5;
const c = 2;



function FormulaResolvente(a,b,c){
    dentroRaiz =  (b*b) - (4 * a*c) ;
    raizResuelta = Math.sqrt(dentroRaiz);
    dos_a = 2*a ;
    resultadoPositivo = (-b + raizResuelta)/dos_a;
    resultadoNegativo = (-b - raizResuelta)/dos_a;
    console.log(raizResuelta);
    
    
    return console.log(`El resultado positivo es: ${resultadoPositivo} y el negativo es: ${resultadoNegativo}`);
    ;
    
}

console.log(a);
console.log(b);
console.log(c);

console.log(FormulaResolvente(a,b,c));




