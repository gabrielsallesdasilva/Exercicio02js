const listaDeEstudantes = [
  {
    nome: "Gabriel",
    primeiraNota: 8,
    segundaNota: 8,
  },

  {
    nome: "Rebeca",
    primeiraNota: 9,
    segundaNota: 8,
  },

  {
    nome: "Erica",
    primeiraNota: 4,
    segundaNota: 8,
  },

  {
    nome: "Bruno",
    primeiraNota: 3,
    segundaNota: 7,
  }
]

function mediaAluno (primeiraNota, segundaNota){
  media = (primeiraNota + segundaNota)/2
  return media
}

for(let estudante of listaDeEstudantes){
  mediaPorEstudante = mediaAluno(estudante.primeiraNota, estudante.segundaNota)
  
  if(mediaPorEstudante < 7 ){
    alert(`A média do(a) aluno(a) ${estudante.nome} foi de ${mediaPorEstudante}.
    Não foi dessa vez, ${estudante.nome}! Tente novamente!`)
  }else{
    alert(`A média do(a) aluno(a) ${estudante.nome} foi de ${mediaPorEstudante}.
    Parabéns ${estudante.nome}! Você foi aprovado(a) no concurso!`)
  }
}