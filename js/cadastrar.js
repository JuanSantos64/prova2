document.querySelector("#btn-cadastrar").addEventListener("click", (e) =>{
        e.preventDefault()
        // console.log("Funcionou")
    const form = document.querySelector("form")

    const tarefa = {
        nome: form.nome.value,
        time: form.time.value,
        gols: form.gols.value,
        assistencias: form.assistencias.value,
        foto: form.foto.value
    }
    
    console.log(tarefa)

    if(validar(tarefa)){
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "/"
        
    }




})


function validar(tarefa){
    let deuCerto = true
    limparErros()
    if(tarefa.nome.trim() === ""){
        console.log("Falta nome")
        document.querySelector("#nome-error").innerText = "Falta colocar nome"
        deuCerto = false
    }
    if(tarefa.time.trim() === ""){
        console.log("Falta time")
        document.querySelector("#time-error").innerText = "Falta colocar time"
        deuCerto = false
    }
    if(tarefa.gols < 0 || tarefa.gols.trim() === ""){
        console.log("Falta gol")
        document.querySelector("#gols-error").innerText = "Falta colocar gols"
        deuCerto = false
    }
    if(tarefa.assistencias.trim() === "" || tarefa.assistencias < 0){
        console.log("Falta assis")
        document.querySelector("#assistencias-error").innerText = "Falta colocar assistencias"
        deuCerto = false
    }
    if(tarefa.foto.trim() === ""){
        console.log("Falta foto")
        document.querySelector("#foto-error").innerText = "Falta colocar foto"
        deuCerto = false
    }
    return deuCerto
}

function limparErros(){
    document
    .querySelectorAll("span.is-error")
    .forEach(span => span.innerText = "")
}



