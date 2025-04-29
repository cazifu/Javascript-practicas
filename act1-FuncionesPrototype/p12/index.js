let num = 2;

function ReemplazarPalabra(n){
let oracionSeparada = n.split(" "); 

oracionSeparada[2] = "Perro";
oracion = oracionSeparada.join(" ");

return oracion;


     
    
};

let oracion = "Adopte un gato";
console.log(oracion);

console.log(ReemplazarPalabra(oracion));