let num = 2;

function VerificarNumeroEntero(n) {
   if (n%2 == 0) {
      console.log("si");
      
   }else{
      console.log("no");
      
   }

   return parseFloat (n.toFixed(2));
    
    
};

console.log(num);

console.log(VerificarNumeroEntero(num));