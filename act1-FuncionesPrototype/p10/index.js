let num = 2;

function ContadorDePalabras(n, s){
let oracionSeparada = n.split(s);
return oracionSeparada.length;


     
    
};

let oracion = "pepo se fue de vacaciones";
let separador = " "
console.log(oracion);

console.log(ContadorDePalabras(oracion, separador));