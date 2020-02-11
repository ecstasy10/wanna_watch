<template>
  <div>
    <div class="container" v-on:load="movieCarousel()">
      <div class="row">
        <div class="col">
          <h2 class="text-white pt-4"> Popular Movies </h2>
          <div id="carouselMovie" class="carousel slide shadow-lg p-1 mb-0 bg-dark rounded" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img v-bind:src="`https://image.tmdb.org/t/p/original` + firstMovieImg"
                  class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="bg-light text-dark rounded p-1"> {{ firstMovie }} </h5>
                </div>
              </div>
              <div class="carousel-item" v-for="movie in movieList.slice(1)" :key="movie.id">
                <img v-bind:src="`https://image.tmdb.org/t/p/original` + movie.backdrop_path"
                  class="d-block w-100" alt="">
                <div class="carousel-caption d-md-block">
                  <h5 class="bg-light text-dark rounded p-1"> {{ movie.title }} </h5>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselMovie" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselMovie" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col">
          <h2 class="text-white pt-4"> Popular Tv-Shows </h2>
          <div id="carouselTv" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img v-bind:src="`https://image.tmdb.org/t/p/original` + firstTvImg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="bg-light text-dark rounded p-1"> {{ firstTv }} </h5>
                </div>
              </div>
              <div class="carousel-item" v-for="tv in tvList.slice(1)" :key="tv.id">
                <img v-bind:src="`https://image.tmdb.org/t/p/original` + tv.backdrop_path" class="d-block w-100" alt="">
                <div class="carousel-caption d-md-block">
                  <h5 class="bg-light text-dark rounded p-1"> {{ tv.name }} </h5>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselTv" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselTv" role="button" data-slide="next">
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
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      movieName: 'hola',
      movieList: [],
      firstMovie: 'first',
      firstMovieImg: 'img',
      tvList: [],
      firstTv: 'first',
      firstTvImg: 'img'
    }
  },
  mounted () {
    let linkMov = 'https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1'
    axios.get(linkMov)
      .then(response => {
        var aux = [...response.data.results]
        for (let i = 0; i < aux.length; i++) {
          // problema cuando es una persona
          if (aux[i].overview !== undefined && aux[i].overview.length > 100) {
            aux[i].overview = aux[i].overview.slice(0, 100) + ' ...'
          }
          if (aux[i].title !== undefined && aux[i].title.length > 20) {
            aux[i].title = aux[i].title.slice(0, 20) + ' ...'
          }
        }
        this.firstMovie = aux[0].title
        this.firstMovieImg = aux[0].backdrop_path
        this.movieList = aux
      })

    let linkTv = 'https://api.themoviedb.org/3/tv/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1'
    axios.get(linkTv)
      .then(response => {
        var aux = [...response.data.results]
        for (let i = 0; i < aux.length; i++) {
          // problema cuando es una persona
          if (aux[i].overview !== undefined && aux[i].overview.length > 100) {
            aux[i].overview = aux[i].overview.slice(0, 100) + ' ...'
          }
          if (aux[i].name !== undefined && aux[i].name.length > 20) {
            aux[i].name = aux[i].name.slice(0, 20) + ' ...'
          }
        }
        this.firstTv = aux[0].name
        this.firstTvImg = aux[0].backdrop_path
        this.tvList = aux
      })
  }
}
</script>
