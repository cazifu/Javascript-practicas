
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

function pokemonesConMasLetras(pokemones){
    mayorPeso = 0;
    pokemones.forEach(pokemon => {

        MayorCantLetras = 0
        Letras = pokemon.nombre.split("");
        CantLetras = Letras.length

        
        if (CantLetras >= MayorCantLetras) {
            MayorCantLetras = CantLetras;
            pokemonPesado = pokemon.nombre;
        }
        
    });

    return console.log(`el pokemon con mas letras es: ${pokemonPesado}`);
     ;
}

console.log(pokemones);

console.log(` ${pokemonesConMasLetras(pokemones)}`);
