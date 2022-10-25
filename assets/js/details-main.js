
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// console.log(params)

const pokemonDetalhamento = document.getElementById('box-content')
// console.log(pokemonDetalhamento)

const pokeDetail = {};

const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`


pokeDetail.getDetais = () => {
    fetch(url)
    .then((response) => response.json())
    .then(convertPokemonsDetailsPage)
    .then(loadPokemonDetailPage)
}

pokeDetail.getDetais ()
  

// console.log (pokeDetail.getDetais)

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}

function convertPokemonsDetailsPage (pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    // console.log(pokeDetail)

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type =type

    // pokemon.photo = pokeDetail.sprites.other.official_artwork.front_default

    return pokemon

}

// console.log(convertPokemonsDetailsPage (pokeDetail))

function convertPokemonToPageDetail(pokemon) {
    console.log(pokemon)
    return `<div class="moldura">

    <section class="line-top">

        <div class="buttom-back">
            <a href="index.html"><i class="bi bi-arrow-left"></i></a>
        </div>

        <div class="favorite-heart">
            <i class="bi bi-heart"></i>
        </div>

    </section>

    <section class="line-1">

        <div class="info-top">

            <div class="boxName">
                <span class="namePoke">${pokemon.name}</span>
            </div>

            <div class="boxNumber">
                <span class="numberPoke">#001</span>
            </div>

        </div>

        <div class="info-med">
            <div class="types">
                <span class="type">grass</span>
                <span class="type">poison</span>
            </div>
        </div>

    </section>

    <section class="line-2">

        <div class="box-imagem">
            <img class="pokeImg"
                src=
                alt=>
        </div>


    </section>

    <section class="line-3">

        <div class="info-down">
            
            <div class="tab-buttons">
                <button class="about-button">
                    Sobre
                </button>

                <button class="stats-button">
                    Estatísticas
                </button>

                <!-- <button class="evolutions-button">
                    Evoluções
                </button> -->

                <button class="abilities-buttons">
                    Habilidades
                </button>
            </div>

            <section class="infos-tabs">
                <div class="info-about">
                    <code>
                        A strange seed was
                        planted on its
                        back at birth.
                        The plant sprouts
                        and grows with
                        this POKéMON.
                    </code>
                </div>

                <div class="info-stats">
                    <ol class="stats">
                        <li>
                            HP : 45
                        </li>
                        <li>
                            attack : 49
                        </li>
                        <li>
                            defense : 49
                        </li>
                        <li>
                            speed : 45
                        </li>
                    </ol>

                </div>
                
                <div class="info-abilities">
                    <ol class="abilities">
                        <li>
                            overgrow
                        </li>
                        <li>
                            chlorophyll
                        </li>
                    </ol>
                </div>

            </section>

           

        </div>


    </section>


</div>`
  
}


function loadPokemonDetailPage (pokemon) {
    console.log(pokemon)
    pokeDetail.getPokemons(pokemon)
    .then((pokemon = []) => {
        const newHtml = pokemon.map(convertPokemonsDetailsPage).join ('')
        pokemonDetalhamento.innerHTML += newHtml
    })   
}





// pokeDetail.getPokemons = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     return fetch(url)
//         .then((response) => response.json())
//         .then((jasonBody) => jasonBody.results)
//         .then((pokemons)=> pokemons.map(pokeDetail.getPokemonDetail))
//         .then((detailRequest)=> Promise.all(detailRequest))
//         .then((pokemonsDetails2) => pokemonsDetails2)
// }
// console.log (pokeDetail)