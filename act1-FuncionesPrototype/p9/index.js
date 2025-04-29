let num = 2;

function DevloverPalabraConMayusculaInical(n){
    return n.split(" ") 
                .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) 
                .join(" "); 


     
    
};

let palabra = "pepo";
console.log(palabra);

console.log(DevloverPalabraConMayusculaInical(palabra));