function inc(nome){

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)

    tarefa.gols ++
    // if(tarefa.gols > 100) tarefa.gols = 100
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    // const card = document.querySelector("#pico-background-pink-600")
    // card.querySelector("progress").value = tarefa.gols

    window.location = "./index.html"
}

function dec(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)

    tarefa.gols --
    if(tarefa.gols < 0) tarefa.gols =0
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    // const card = document.querySelector(`#${titulo}`)
    // card.querySelector("progress").value = tarefa.gols

    window.location = "./index.html"
}

function incAssis(nome){

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)

    tarefa.assistencias ++ 
    // if(tarefa.assistencias ) tarefa.assistencias = 100
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    // const card = document.querySelector("#pico-background-pink-600")
    // card.querySelector("progress").value = tarefa.gols

    window.location = "./index.html"
}
function decAssis(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)

    tarefa.assistencias -- 
    // if(tarefa.assistencias < 0) tarefa.assistencias =0
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    // const card = document.querySelector(`#${titulo}`)
    // card.querySelector("progress").value = tarefa.gols

    window.location = "./index.html"
}
