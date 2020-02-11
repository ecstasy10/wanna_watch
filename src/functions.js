function request(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.timeout = 2000
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.ontimeout = function () {
            reject(new Error('timeout'))
        }
        xhr.open('get', url, true)
        xhr.send()
    })
}

function movieCarousel() {
    let link = 'https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1'
    const moviePromise = request(link)
    moviePromise
        .then(function printMovies(json) {
            let movie = JSON.parse(json)
            console.log(movie.results[0].title)
            return (movie.results[0].title)
        })
        .catch(new Error('Error in the Movies Carousel Promise'))
}