
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("busca").value;

    if (campoPesquisa == "") {
        section.innerHTML = `<p style="color: #bf061c";>Digite o nome ou número do Pokémon no campo de pesquisa!</p>`;
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";
    let nome = "";
    let tipo = "";
    let numero = "";

    // Itera sobre cada Pokémon no array de Pokémon
    for (let dado of pokemons) {
        nome = dado.nome.toLowerCase();
        tipo = dado.tipo.toLowerCase();
        numero = dado.numero.toLowerCase();
        if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa) || numero.includes(campoPesquisa)) {
        // Constrói o HTML para cada item de resultado, utilizando template literals
        resultado += `
        <div class="item-resultado">
            <div>
                <h2>${dado.nome}</h2>
                <p class="descricao-meta"><strong>Tipo:</strong> ${dado.tipo}</p>
                <p class="descricao-meta"><strong>É forte contra:</strong> ${dado.forcas}</p>
                <p class="descricao-meta"><strong>É fraco contra:</strong> ${dado.fraquezas}</p>
                <p class="descricao-meta"><strong>Número na Pokédex:</strong> ${dado.numero}</p>
            </div>
            <img src=${dado.img} alt="${dado.nome}" class="pkn"> 
            <a href=${dado.link} target="_blank">Mais informações</a> 
        </div>
        `;
        }
    }

    if (!resultado) {
        resultado = "<p>Pokémon não encontrado em nossa base de dados :(</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}