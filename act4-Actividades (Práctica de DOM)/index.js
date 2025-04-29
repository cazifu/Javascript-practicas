const characters = [
    {
      id: 1,
      name: "Goku",
      ki: "60.000.000",
      maxKi: "90 Septillion",
      race: "Saiyan",
      gender: "Male",
      description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable...",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 2,
      name: "Vegeta",
      ki: "54.000.000",
      maxKi: "19.84 Septillion",
      race: "Saiyan",
      gender: "Male",
      description: "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters...",
      image: "https://dragonball-api.com/characters/vegeta_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 3,
      name: "Piccolo",
      ki: "2.000.000",
      maxKi: "500.000.000",
      race: "Namekian",
      gender: "Male",
      description: "Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre...",
      image: "https://dragonball-api.com/characters/picolo_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 4,
      name: "Bulma",
      ki: "0",
      maxKi: "0",
      race: "Human",
      gender: "Female",
      description: "Bulma es la protagonista femenina de la serie manga Dragon Ball...",
      image: "https://dragonball-api.com/characters/bulma.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    },
    {
      id: 5,
      name: "Freezer",
      ki: "530.000",
      maxKi: "52.71 Septillion",
      race: "Frieza Race",
      gender: "Male",
      description: "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
      image: "https://dragonball-api.com/characters/Freezer.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 6,
      name: "Zarbon",
      ki: "20.000",
      maxKi: "30.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Zarbon es uno de los secuaces de Freezer y un luchador poderoso.",
      image: "https://dragonball-api.com/characters/zarbon.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 7,
      name: "Dodoria",
      ki: "18.000",
      maxKi: "20.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Dodoria es otro secuaz de Freezer conocido por su brutalidad.",
      image: "https://dragonball-api.com/characters/dodoria.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 8,
      name: "Ginyu",
      ki: "9.000",
      maxKi: "25.000",
      race: "Frieza Race",
      gender: "Male",
      description: "Ginyu es el líder de la élite de mercenarios del Ejército de Freeza.",
      image: "https://dragonball-api.com/characters/ginyu.webp",
      affiliation: "Army of Frieza",
      deletedAt: null
    },
    {
      id: 9,
      name: "Celula",
      ki: "250.000.000",
      maxKi: "5 Billion",
      race: "Android",
      gender: "Male",
      description: "Cell es un bioandroide creado por la computadora del Dr. Gero...",
      image: "https://dragonball-api.com/characters/celula.webp",
      affiliation: "Freelancer",
      deletedAt: null
    },
    {
      id: 10,
      name: "Gohan",
      ki: "45.000.000",
      maxKi: "40 septillion",
      race: "Saiyan",
      gender: "Male",
      description: "Son Gohan es uno de los personajes principales de Dragon Ball Z, Super y GT...",
      image: "https://dragonball-api.com/characters/gohan.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    }
  ];



characters.forEach(chara => {
    let divCarta = document.createElement('div'); 
    divCarta.innerHTML = `
        <h2>${chara.name}</h2>
        <img src="${chara.image}" alt="${chara.name}"/>
        <p>Ki: <br>${chara.ki}  </p>
        <p>Ki prime: <br>${chara.maxKi}</p>
        <p>raza: <br>${chara.race}</p>
        <p>genero: <br>${chara.gender}</p>
        <p>raza: <br>${chara.race}</p>
        <p>Trabajo: <br>${chara.affiliation}</p>
        
    `; 


    document.body.appendChild(divCarta);
        
    });
    


