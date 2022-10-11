
// Função que define o padrão do elemento (li) a ser incluído na Lista OL do index
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
            
        <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
    </li>
    `
}

// constante que recebe o elemento OL do index
const pokemonOl = document.getElementById('pokemonOl')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join ('')
    pokemonOl.innerHTML = newHtml
    
 
//  const newList = pokemons.map(convertPokemonToLi (pokemon))

//  const newHtml = newList.join ('')
//  pokemonOl.innerHTML += newHtml
})

    // const listItens = []
    //     for (let i = 0; i < pokemonList.length; i++) {
    //         const pokemon = pokemonList[i]
    //     listItens.push(convertPokemonToLi(pokemon))    
    
    //     }
    // })

