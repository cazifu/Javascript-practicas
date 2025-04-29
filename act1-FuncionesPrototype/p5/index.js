let num = 2;

function ConvertirBooleanoEnTexto(boleano) {
   let res ;
   if (boleano == true) {

      res ="verdadero";

   }else{

      res = "falso";
      
   }

   return res;
     
    
};


console.log(ConvertirBooleanoEnTexto(false));