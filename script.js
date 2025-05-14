document.getElementById('pokemon-button').addEventListener('click', function(){

    let pokemonName = document.getElementById('pokemon-search').value


    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)

    .then(res => res.json())

    .then(function(data){

        document.getElementById('pokemon-name').innerHTML = data.name

        document.getElementById('pokemon-img').src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        document.getElementById('pokemon-img-back').src = data.sprites.versions["generation-v"]["black-white"].animated.back_default
        document.getElementById('pokemon-img-shiny').src = data.sprites.versions["generation-v"]["black-white"].animated.front_shiny
        document.getElementById('pokemon-img-shiny-back').src = data.sprites.versions["generation-v"]["black-white"].animated.back_shiny

        document.getElementById('pokemon-search').value = ""

    });

})