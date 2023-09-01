const axios = require('axios');

async function getPokemonData(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return null;
    }
}

async function main() {
    const pokemonName = "pikachu";
    const pokemonData = await getPokemonData(pokemonName);

    if (pokemonData) {
        console.log(`Name: ${pokemonData.name}`);
        console.log(`Height: ${pokemonData.height}`);
        console.log(`Weight: ${pokemonData.weight}`);
        console.log("Abilities:");
        pokemonData.abilities.forEach(ability => {
            console.log(`- ${ability.ability.name}`);
        });
    }
}

main();
