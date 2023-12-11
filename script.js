
const tarefasAtivas = document.querySelector('.tarefas-ativas'),
      tarefasCompletas = document.querySelector('.tarefas-completas')
      botaoAddTarefa = document.querySelector('.adicionar'),
      inputAddTarefa = document.querySelector('#addTarefa')
      botaoLimpar = document.querySelector('.limpar')

function adicionandoTarefa(){
  if(inputAddTarefa.value === ""){
    alert('Preencha o campo')
  } else {
    let tarefa = document.createElement('div'),
        descricaoTarefa = document.createElement('input')
    
    tarefasAtivas.appendChild(tarefa)
    tarefa.appendChild(descricaoTarefa)
    descricaoTarefa.value = inputAddTarefa.value
   
    tarefa.classList.add('tarefa')
    descricaoTarefa.classList.add('descricao-tarefa')

    let botoes = document.createElement('div')
    botoes.classList.add('botoes')
    tarefa.appendChild(botoes)

    const removerTarefa = document.createElement('a')
    botoes.appendChild(removerTarefa)
    removerTarefa.classList.add('botao-remover')
    removerTarefa.onclick = ()=>{
      tarefasAtivas.removeChild(tarefa)
    }

    const divCompletarTarefa = document.createElement('div'),
          completarTarefa = document.createElement('input'),
          botaoCompletar = document.createElement('div')

    
    divCompletarTarefa.appendChild(completarTarefa)
    divCompletarTarefa.appendChild(botaoCompletar)
    botoes.appendChild(divCompletarTarefa)
    
    completarTarefa.setAttribute('type', 'checkbox')
    botaoCompletar.classList.add('botao-completar')
    divCompletarTarefa.classList.add('completar-box')
  
    completarTarefa.onclick = ()=>{
      if(completarTarefa.checked === true){
        tarefa.classList.add('completa')
        descricaoTarefa.setAttribute('disabled', true)
        tarefasCompletas.appendChild(tarefa)
        
      } else {
        tarefa.classList.remove('completa')
        descricaoTarefa.removeAttribute('disabled')
      }
    }
    
    botaoLimpar.addEventListener('click', ()=>{
      tarefasAtivas.removeChild(tarefa)
      tarefasCompletas.removeChild(tarefa)
    })
  }
}

  botaoAddTarefa.addEventListener('click', adicionandoTarefa)
  inputAddTarefa.addEventListener('keydown', (event)=>{
    if(event.key === "Enter"){
      adicionandoTarefa()
    }
  })
