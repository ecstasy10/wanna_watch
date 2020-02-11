<template>
  <div>
    <div class="container" v-on:load="movieCarousel()">
      <div class="row">
        <div class="col">
          <h2 class="text-white pt-4"> Popular Movies </h2>
          <div id="carouselExampleControls" class="carousel slide shadow-lg p-1 mb-0 bg-dark rounded" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://media.metrolatam.com/2019/12/20/template1-ea257706fb7bda31b41155ccfe7db231-600x400.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5> nombre</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://media.metrolatam.com/2019/12/20/template1-ea257706fb7bda31b41155ccfe7db231-600x400.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5> nombre</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://media.metrolatam.com/2019/12/20/template1-ea257706fb7bda31b41155ccfe7db231-600x400.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5> nombre</h5>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col">
          <h2 class="text-white pt-4"> Popular Tv-Shows </h2>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      movieName: 'hola'
    }
  },
  methods: {
    req: function (url) {
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
  },
  carouselName: function () {
    let link = 'https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1'
    const moviePromise = this.req(link)
    moviePromise
      .then(function printMovies (json) {
        let movie = JSON.parse(json)
        console.log(movie.results[0].title)
        this.movieName = 'holis'
        return this.movieName
      })
      .catch(new Error('Error in the Movies Carousel Promise'))
    this.movieName = 'asdfas'
    return (this.movieName)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
