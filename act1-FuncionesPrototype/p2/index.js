let nombre = "nombro";

function DevolverCantidadDeLetra(n, l) {
    let contador = 0;
   for (let x = 0; x < n.length; x++) {
    if (n[x] == l) {
        contador++;
    }
    
   }

   return contador;
    
    
};

console.log(nombre);

console.log(DevolverCantidadDeLetra(nombre,"o"));