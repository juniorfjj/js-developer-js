
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// console.log(params)

const pokemonDetalhamento = document.querySelector('.moldura')
const namePoke = document.getElementById("name")
const numberPoke = document.getElementById("number")
const pokeImg = document.getElementById("img")
const pokeType = document.getElementById("types")
const infoStats = document.getElementById("info-stats");
const infoAbilities = document.getElementById("info-abilities");


const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
const infoTabUrl = `https://pokeapi.co/api/v2/pokemon-species/${params.id}/`


async function getData() {
    const pokeDetail = await fetch(url);

    const pokemon = await pokeDetail.json();
    // console.log(pokemon)


    let name = `<span class="namePoke" id="name">${pokemon.name}</span>`
    let number = `<span class="numberPoke" id="number">#${pokemon.id}</span>`
    let photo = `<img class="pokeImg" id="img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
    alt=${pokemon.name}>`

    const getTypes = pokemon.types.map((typeSlot) => `<span class="type" id= ${typeSlot.type.name}>${typeSlot.type.name}</span>`).join('')
    const getTypeColor = pokemon.types[0].type.name

    const typeColor = `<div class="moldura" id=${getTypeColor}></div>`;

    var liInfoStatsHP = pokemon.stats[0].base_stat
    var liInfoStatsAttack = pokemon.stats[1].base_stat
    var liInfoStatsDefense = pokemon.stats[2].base_stat
    var liInfoStatsSpeed = pokemon.stats[5].base_stat

    const statsInsert =

        `<ol class="stats">
    <li>
        HP : ${liInfoStatsHP}
    </li>
    <li>
        attack : ${liInfoStatsAttack}
    </li>
    <li>
        defense : ${liInfoStatsDefense}
    </li>
    <li>
        speed : ${liInfoStatsSpeed}
    </li>
    </ol>`

    const abilitieOne = pokemon.abilities[0].ability.name
    const abilitieTwo = pokemon.abilities[1].ability.name



    const abilitiesInsert =
        `
    <ol class="abilities">
        <li>
            ${abilitieOne}
        </li>
        <li>
            ${abilitieTwo}
        </li>
    </ol>
    `


    namePoke.innerHTML += name
    numberPoke.innerHTML += number
    pokeImg.innerHTML += photo
    pokeType.innerHTML += getTypes
    infoStats.innerHTML += statsInsert
    infoAbilities.innerHTML += abilitiesInsert




    // Mudando a cor do "plano de fundo"
    pokemonDetalhamento.setAttribute('id', getTypeColor)


}
getData();









// Exibindo informações na TAB

// Buscando as áreas onde as informações são exibidas na página

const infoAbout = document.getElementById("info-about");


async function getInfosTab() {
    const pokeInfos = await fetch(infoTabUrl);
    const infoAssets = await pokeInfos.json();

    var textInfoAbout = `<span class="about">${infoAssets.flavor_text_entries[0].flavor_text}</span>`

    infoAbout.innerHTML += textInfoAbout


}
getInfosTab();


