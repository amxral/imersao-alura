
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";

    // Itera sobre cada Pokémon no array de Pokémon
    for (let dado of pokemons) {
        // Constrói o HTML para cada item de resultado, utilizando template literals
        resultado += `
        <div class="item-resultado">
            <h2>${dado.nome}</h2> <p class="descricao-meta">Tipo: ${dado.tipo}</p> <p class="descricao-meta">É forte contra: ${dado.forcas}</p> <p class="descricao-meta">É fraco contra: ${dado.fraquezas}</p> <p class="descricao-meta">Número na Pokédex: ${dado.numero}</p> <img src=${dado.img} alt="${dado.nome}"> <a href=${dado.link} target="_blank">Mais informações</a> </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}