
const pokemones = [
    {
        nombre: 'Pikachu',
        peso: 2.0,
        tipo: 'Electrico'
    },{
        nombre: 'Raichu',
        peso: 2.0,
        tipo: 'Electrico'
    },{
        nombre: 'Bulbasaur',
        peso: 10.0,
        tipo: 'Planta'
    },{
        nombre: 'Charmander',
        peso: 3.0,
        tipo: 'Fuego'
    },{
        nombre: 'Squirtle',
        peso: 9.0,
        tipo: 'Agua'
    }
]

function pokemonesSegunSuTipo(pokemones){

    TipoAgua = []
    TipoElectrico =[]
    TipoPlanta=[]
    TipoFuego=[]

    pokemones.forEach(pokemon => {

        
            if (pokemon.tipo == 'Agua') {
                TipoAgua.push(pokemon.nombre);
            }
            if (pokemon.tipo == 'Fuego') {
                TipoFuego.push(pokemon.nombre);
            }
            if (pokemon.tipo == 'Electrico') {
                TipoElectrico.push(pokemon.nombre);
            }
            if (pokemon.tipo == 'Planta') {
                TipoPlanta.push(pokemon.nombre);
            }


            
        
console.log(TipoAgua);
        
    });


     return console.log(` 
        agua: ${TipoAgua} 
        Fuego :${TipoFuego}
        Electrico: ${TipoElectrico}
        Planta: ${TipoPlanta}`);
     
}

console.log(pokemones);

console.log(` ${pokemonesSegunSuTipo(pokemones)}`);
