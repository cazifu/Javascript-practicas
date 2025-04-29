const pokemones = [
    {
        nombre: 'Pikachu',
        peso: 2.0,
        tipo: 'Electrico',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg ' 
    }, {
        nombre: 'Raichu',
        peso: 2.0,
        tipo: 'Electrico',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg ' 
    }, {
        nombre: 'Bulbasaur',
        peso: 10.0,
        tipo: 'Planta',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg ' 
    }, {
        nombre: 'Charmander',
        peso: 3.0,
        tipo: 'Fuego',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg ' 
    }, {
        nombre: 'Squirtle',
        peso: 9.0,
        tipo: 'Agua',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg ' 
    }
];



pokemones.forEach(pokemon => {
    let divCarta = document.createElement('div'); 
    divCarta.innerHTML = `
        <h2>${pokemon.nombre}</h2>
        <img src="${pokemon.url}" alt="${pokemon.nombre}" />
        <p>Peso: ${pokemon.peso} kg</p>
        <p>Tipo: ${pokemon.tipo}</p>
    `; 


    document.body.appendChild(divCarta);
        
    });
    


