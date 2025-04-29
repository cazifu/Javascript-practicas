
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

function pokemonesMasPesado(pokemones){
    mayorPeso = 0;
    pokemones.forEach(pokemon => {
        if (pokemon.peso >= mayorPeso) {
            mayorPeso = pokemon.peso;
            pokemonPesado = pokemon.nombre;
        }
        
    });

    return console.log(`el pokemon mas pesado es: ${pokemonPesado}`);
     ;
}

console.log(pokemones);

console.log(` ${pokemonesMasPesado(pokemones)}`);
