let num = 2;

function DevolverMayoresA10DelArray(a){
   let contador = 0;
for (let x = 0; x < a.length; x++) {
   
    contador = a[x]+contador;  
   
}
return contador;

     
    
};

let array = [12,2,14,10,54,3,6,21];
console.log(array);

console.log(DevolverMayoresA10DelArray(array));