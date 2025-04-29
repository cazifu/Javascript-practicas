
document.getElementById('boton').addEventListener('click', ()=>{
  document.getElementById(`carta`).innerHTML;

  const nombre = document.getElementById('nombre').value;
  BuscarPKM(nombre)
}); 



function BuscarPKM(nombre) {
  const respuesta = fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

console.log(respuesta);

respuesta.then((data)=>{
  
  const informacion = data.json();
  
  informacion.then((datos)=>{
      const nombrepkm = document.createElement(`span`);
      
      nombrepkm.textContent = datos.name.toUpperCase();
      
      document.getElementById(`encabezado`).appendChild(nombrepkm);
      
//--------------------------------------------------------------------------------------------------


      const tipopkm = datos.types;
      
      tipopkm.forEach(item => {
          
          const tipopkm = document.createElement(`span`);
      
          tipopkm.textContent = item.type.name;
          
          document.getElementById(`carta`).appendChild(tipopkm);
          
      });

//---------------------------------------------------------------------------------------------------

//const tipopkm    = datos.types;
      
//tipopkm.forEach(item => {
    
  //  const tipopkm = document.createElement(`span`);

 //   tipopkm.textContent = item.type.name;
    
   // document.getElementById(`carta`).appendChild(tipopkm);
    
//});

//---------------------------------------------------------------------------------------------------
      
      const imagen = document.createElement(`img`);

      imagen.src = datos.sprites.front_default

      document.getElementById(`imagen`).appendChild(imagen)

//--------------------------------------------------------------------------------------------------

      const stat = datos.stats;

      
      stat.forEach(item => {
          const datos = document.createElement(`div`)  

          const statName = document.createElement(`span`);
          const statsValor = document.createElement(`span`);
      
          statName.textContent = item.stat.name + `:`;
          statsValor.textContent = item.base_stat;

          datos.appendChild(statName)
          datos.appendChild(statsValor)
          
          document.getElementById(`stats`).appendChild(statName);
          document.getElementById(`stats`).appendChild(statsValor);
      
      
          
      });
      
      
//--------------------------------------------------------------------------------------------------

  }); 
}).catch((error)=>{




}).finally((asa)=>{
  console.log("sda");
  
})


}