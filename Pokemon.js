async function logPokemons(id, index) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    const pokemons = await response.json();
    console.log(pokemons.forms);
    name = document.querySelector(`#poke-name-${index}`).innerHTML = pokemons.forms[0].name;
    document.querySelector(`#poke-pic-${index}`).setAttribute('src', pokemons.sprites.front_default);
    document.querySelector(`#poke-hp-${index}`).innerHTML = `HP: ${pokemons.stats[0].base_stat}`;
    let att = document.querySelector(`#poke-atk-${index}`).innerHTML = `Attack: ${pokemons.stats[1].base_stat}`;
    let def = document.querySelector(`#poke-def-${index}`).innerHTML = `Defense: ${pokemons.stats[2].base_stat}`;
    let spd = document.querySelector(`#poke-speed-${index}`).innerHTML = `Speed: ${pokemons.stats[5].base_stat}`;
    document.querySelector(`#poke-skill-${index}`).innerHTML = `<p>Skill-1: ${pokemons.abilities[0].ability.name} </p> <p>Skill-2: ${pokemons.abilities[1].ability.name}</p>`;
    checkWinner();
}

function getPoke(index) {
    let id = document.querySelector(`#poke-id-${index}`).value;
    logPokemons(id, index);
}

function checkWinner() {
    let hp1 = parseInt(document.querySelector("#poke-hp-1").innerText.split(":")[1].trim());
    let att1 = parseInt(document.querySelector("#poke-atk-1").innerText.split(":")[1].trim());
    let def1 = parseInt(document.querySelector("#poke-def-1").innerText.split(":")[1].trim());
    let spd1 = parseInt(document.querySelector("#poke-speed-1").innerText.split(":")[1].trim());

    let hp2 = parseInt(document.querySelector("#poke-hp-1").innerText.split(":")[1].trim());
    let att2 = parseInt(document.querySelector("#poke-atk-2").innerText.split(":")[1].trim());
    let def2 = parseInt(document.querySelector("#poke-def-2").innerText.split(":")[1].trim());
    let spd2 = parseInt(document.querySelector("#poke-speed-2").innerText.split(":")[1].trim());

    let totalStats1 = hp1 + att1 + def1 + spd1;
    let totalStats2 = hp2 + att2 + def2 + spd2;

    let winnerElement = document.querySelector("#winner");

    if (totalStats1 > totalStats2) {
        winnerElement.innerHTML = `
 
            <h1 id="winner-name"> ${document.querySelector("#poke-name-1").innerText} </h1><br>
            <img src="${document.querySelector("#poke-pic-1").getAttribute('src')}" alt="Pokemon 1 ">

        `;
    } else if (totalStats1 < totalStats2) {
        winnerElement.innerHTML = `

            <h1 id="winner-name"> ${document.querySelector("#poke-name-2").innerText} </h1><br>
            <img src="${document.querySelector("#poke-pic-2").getAttribute('src')}" alt="Pokemon 2">

        `;
    } else {
        winnerElement.innerHTML = "It's a tie!";
    }
}

function handleKeyPress(event, index) {
    if (event.key === "Enter") {
        event.preventDefault();
        getPoke(index);
    }
}

