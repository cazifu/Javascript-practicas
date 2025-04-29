
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

function pokemonesPorNombre(pokemones){
   a = pokemones.forEach(pokemon => {
        console.log(pokemon);
        
    });
    return ;
}

console.log(pokemones);

console.log(`${pokemonesPorNombre(pokemones)}`);
