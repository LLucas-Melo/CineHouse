const listaFilme = require('./modulos/listaFilme')

let filme = {
  codigo: 4,
  titulo: 'Gente Grande',
  duracao:  120,
  atores:['Adam', 'Kevin', ' Cris'],
  anoDeLancamento: 1996,
  emCartaz: false

}

const adicionarFilme = (filme) =>{
  listaFilme.push(filme)
  return listaFilme
} 

adicionarFilme(filme )
console.log(listaFilme )

const buscarFilme= cd => 
   listaFilme.find(i =>  i.codigo ==cd )

  
console.log(buscarFilme(2))


const update = function(lista) {
  for(let i=0; i<lista.length; i++) {
    lista[i]?.emcartaz ? lista[i].emcartaz = false : lista[i].emcartaz = true;
  }
  return lista;
  
}

update(listaFilme)
console.log(listaFilme )