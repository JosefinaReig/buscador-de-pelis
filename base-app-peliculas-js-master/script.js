document.getElementById('searchButton').addEventListener('click', searchMovies)

let apiKey= 'efcd2a3f4f972d416ecaeedb1b5409c2'
let urlBase= 'https://api.themoviedb.org/3/search/movie'
let image= 'https://image.tmdb.org/t/p/w500/'

let resultsContainer = document.getElementById('results')

function searchMovies(){
    resultsContainer.innerHTML= 'Cargando...'
    let searchInput = document.getElementById('searchInput').value 

    fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
    .then(response=> response.json())
    .then(response=> displayMovies(response.results))
}

function displayMovies(movies){
resultsContainer.innerHTML= ''
if(movies.length === 0){
    resultsContainer.innerHTML= '<p>No se ha encontrado una pelicula :(</p>'
    return
}

movies.forEach(movie=>{
    let movieDiv = document.createElement('div')
    movieDiv.classList.add('movie')

    let titulo = document.createElement('h1') 
    titulo.textContent = movie.title
    let releaseDate = document.createElement('p')
    releaseDate.textContent= 'Fecha de lanzamiento: ' + movie.release_date
    let overview = document.createElement('p')
    overview.textContent= movie.overview
    let posterPath= image + movie.poster_path
    let poster = document.createElement('img')
    poster.src= posterPath

    movieDiv.appendChild(poster)
    movieDiv.appendChild(titulo)
    movieDiv.appendChild(releaseDate)
    movieDiv.appendChild(overview)

    resultsContainer.appendChild(movieDiv) 
})
}