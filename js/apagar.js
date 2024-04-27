function apagar(nome){

    
    const card = document.querySelector("#pico-background-pink-600")
    card.addEventListener("click", ()=> card.remove())

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefasFiltradas = tarefas.filter(jogador => jogador.nome != nome)

    localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas))

    window.location = "./index.html"
    
}