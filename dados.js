const pokemons = [
    {
      nome: "Bulbassauro",
      tipo: "Grama/Veneno",
      forcas: "Água, Terra",
      fraquezas: "Fogo, Voador",
      numero: "1",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
      link: "https://www.pokemon.com/br/pokedex/bulbassauro"
    },
    {
      nome: "Charmander",
      tipo: "Fogo",
      forcas: "Planta, Inseto",
      fraquezas: "Água, Rocha",
      numero: "4",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
      link: "https://www.pokemon.com/br/pokedex/charmander"
    },
    {
      nome: "Squirtle",
      tipo: "Água",
      forcas: "Fogo, Terra",
      fraquezas: "Elétrico, Planta",
      numero: "7",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
      link: "https://www.pokemon.com/br/pokedex/squirtle"
    },
    {
      nome: "Pikachu",
      tipo: "Elétrico",
      forcas: "Voador, Água",
      fraquezas: "Terra",
      numero: "25",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
      link: "https://www.pokemon.com/br/pokedex/pikachu"
    },
    {
      nome: "Eevee",
      tipo: "Normal",
      forcas: "Nada",
      fraquezas: "Lutador",
      numero: "133",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/133.png",
      link: "https://www.pokemon.com/br/pokedex/eevee"
    },
    {
      nome: "Gengar",
      tipo: "Fantasma/Veneno",
      forcas: "Psíquico, Fantasma",
      fraquezas: "Fada, Psíquico",
      numero: "94",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
      link: "https://www.pokemon.com/br/pokedex/gengar"
    },
    {
      nome: "Dragonite",
      tipo: "Dragão/Voador",
      forcas: "Planta, Dragão",
      fraquezas: "Gelo, Dragão, Fada",
      numero: "149",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/149.png",
      link: "https://www.pokemon.com/br/pokedex/dragonite"
    },
    {
      nome: "Mewtwo",
      tipo: "Psíquico",
      forcas: "Lutador",
      fraquezas: "Fantasma, Inseto",
      numero: "150",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
      link: "https://www.pokemon.com/br/pokedex/mewtwo"
    },
    {
      nome: "Lucario",
      tipo: "Aço/Lutador",
      forcas: "Fada, Rocha, Escuro",
      fraquezas: "Fogo, Lutador, Terra",
      numero: "448",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/448.png",
      link: "https://www.pokemon.com/br/pokedex/lucario"
    },
    {
      nome: "Garchomp",
      tipo: "Dragão/Terra",
      forcas: "Fogo, Rocha, Elétrico",
      fraquezas: "Gelo, Dragão, Fada",
      numero: "445",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/445.png",
      link: "https://www.pokemon.com/br/pokedex/garchomp"
    },
    {
      nome: "Greninja",
      tipo: "Água/Sombrio",
      forcas: "Fogo, Terra, Fada",
      fraquezas: "Elétrico, Grama, Lutador",
      numero: "658",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/658.png",
      link: "https://www.pokemon.com/br/pokedex/greninja"
    },
    {
      nome: "Alakazam",
      tipo: "Psíquico",
      forcas: "Lutador",
      fraquezas: "Fantasma, Inseto",
      numero: "65",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/065.png",
      link: "https://www.pokemon.com/br/pokedex/alakazam"
    },
    {
      nome: "Blaziken",
      tipo: "Fogo/Lutador",
      forcas: "Aço, Grama, Inseto",
      fraquezas: "Água, Rocha, Fada",
      numero: "257",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/257.png",
      link: "https://www.pokemon.com/br/pokedex/blaziken"
    },
    {
      nome: "Gardevoir",
      tipo: "Psíquico/Fada",
      forcas: "Lutador, Veneno, Sombrio",
      fraquezas: "Aço, Fantasma",
      numero: "282",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/282.png",
      link: "https://www.pokemon.com/br/pokedex/gardevoir"
    },
    {
      nome: "Arcanine",
      tipo: "Fogo",
      forcas: "Grama, Inseto, Gelo",
      fraquezas: "Água, Rocha, Terra",
      numero: "59",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/059.png",
      link: "https://www.pokemon.com/br/pokedex/arcanine"
    },
    {
      nome: "Florges",
      tipo: "Fada",
      forcas: "Dragão",
      fraquezas: "Aço",
      numero: "671",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/671.png",
      link: "https://www.pokemon.com/br/pokedex/florges"
    },
    {
      nome: "Hawlucha",
      tipo: "Lutador/Voador",
      forcas: "Inseto, Normal",
      fraquezas: "Fada, Elétrico, Rocha",
      numero: "701",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/701.png",
      link: "https://www.pokemon.com/br/pokedex/hawlucha"
    }
  ];