const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const mainBody = document.querySelector('main')

function getTrainers() {
	return fetch(TRAINERS_URL)
		.then((resp) => resp.json())
}

function addTrainers (trainers) {
    trainers.forEach(addTrainer)
}

function addTrainer (trainer) {
    // const pokemons = getPokemons().then(pokemons => pokemons.filter(pokeList))
    // function pokeList(pokemon) {
    //     return pokemon.trainer_id == trainer.id;
    // }
    

    const card = document.createElement('div')
    const list = document.createElement('ul')
    function addPokemon (pokemons) {
            pokemons.forEach(pokemon => {
                list.innerHTML += `
                    <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>
                    `
            })
    }
    card.className = 'card' 
    card.innerHTML = `
    <p> ${trainer.name} </p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    `
    // debugger
    addPokemon(trainer.pokemons)
    mainBody.appendChild(card)
    card.appendChild(list)
}


document.addEventListener('DOMContentLoaded', event => {
    getTrainers()
        .then(trainers => addTrainers(trainers))
        
}) 
 
