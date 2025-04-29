let num = 2;

function EsPalindormo(n){
let palabraAlRevez = n.split("").reverse(" ").join("");
let palabraNormal = n.split("").join("");
console.log(palabraAlRevez);
console.log(palabraNormal);
if (palabraAlRevez == palabraNormal) {
    console.log("si");
    
} else{
    console.log("no");
    
}





     
    
};

let palabra = "oso";
console.log(palabra);

console.log(EsPalindormo(palabra));