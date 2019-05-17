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

// function getPokemons() {
// 	return fetch(POKEMONS_URL)
// 		.then((resp) => resp.json())
// }

// function addPokemons (pokemons) {
//     pokemons.forEach()
// }

function addTrainer (trainer) {
    // const pokemons = getPokemons().then(pokemons => pokemons.filter(pokeList))
    // function pokeList(pokemon) {
    //     return pokemon.trainer_id == trainer.id;
    // }
    // debugger
    const card = document.createElement('div')
    card.className = 'card' 
    card.innerHTML = `
    <p> ${trainer.name} </p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul>
   <li> </li>
    </ul>
    `

    mainBody.appendChild(card)
}

document.addEventListener('DOMContentLoaded', event => {
    getTrainers()
        .then(trainers => addTrainers(trainers))
        
}) 
 
