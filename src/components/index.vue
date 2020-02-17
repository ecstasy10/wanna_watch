<template>
  <div class="mb-5">
    <div class="container">
      <!-- CAROUSELS -->
      <div class="row">
        <div class="col-lg-6">
          <h2 class="text-white pt-4"> Popular Movies </h2>
          <div id="carouselMovie" class="carousel slide shadow-lg pb-2 mb-0 bg-success rounded" data-ride="carousel">
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
        <div class="col-lg-6">
          <h2 class="text-white pt-4"> Popular Tv-Shows </h2>
          <div id="carouselTv" class="carousel slide shadow-lg pb-2 mb-0 bg-success rounded" data-ride="carousel">
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
      <!-- CATEGORIES -->
      <div class="container mt-4 pt-2 bg-white rounded-lg">
        <h3 class="text-dark">Categories</h3>
        <small class="text-muted">Media may belong to several categories</small>
        <div class="row pt-3">
            <div class="col mb-3" v-for="genre in genreList" :key="genre.id">
              <button class="btn btn-outline-dark" @click="click(genre.id, genre.name)">
                {{ genre.name }}
              </button>
            </div>
        </div>
      </div>
      <!-- Mostrar generos -->
      <div class="container mt-4" v-if="showGenre">
        <h5 class="text-muted">Popular in categories</h5>
        <h3 class="text-success">{{ nameGender }} -  {{ nResults }} results found</h3>
        <div class="row">
        <div v-for="genre in pageOfItems" :key="genre.id">
          <div class="col">
            <div class="card mb-3" style="max-width: 32em; min-height: 21em;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img v-bind:src="`https://image.tmdb.org/t/p/original` + genre.poster_path" class="card-img p-1" alt="image">
                  <p class="card-text align-bottom p-1">
                    <small class="text-muted">
                      Release date: {{ genre.release_date }} <br>
                      Votes: {{ genre.vote_count }}
                    </small>
                  </p>
                </div>
                <div class="col-md-8">
                  <div class="card-header  text-center" style="max-height: 4em; overflow-y: auto;">
                    <h5> {{ genre.title }} </h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text border rounded p-2" style="height: 14em; overflow-y: auto;"> {{ genre.overview }} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-5 text-center">
      <jw-pagination :items="genrePopular" @changePage="onChangePage" style="user-select: none;"></jw-pagination>
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
      firstTvImg: 'img',
      genreList: [],
      genrePopular: [],
      showGenre: false,
      pageOfItems: [],
      nameGender: '',
      nResults: 0
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

    let linkGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US'
    axios.get(linkGenre)
      .then(response => {
        var aux = [...response.data.genres]
        this.genreList = aux
      })
  },
  methods: {
    click: function (id, name) {
      var c = 0
      this.genrePopular = []
      var auxGenre = []
      this.showGenre = false
      for (let p = 1; p < 30; p++) {
        let latest = 'https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=' + p
        // console.log(latest)
        axios.get(latest)
          .then(response => {
            var aux = [...response.data.results]
            for (let i = 0; i < aux.length; i++) {
              for (let j = 0; j < aux[i].genre_ids.length; j++) {
                if (aux[i].genre_ids[j] === id) {
                  auxGenre[c] = aux[i]
                  c++
                  this.nResults = c
                }
              }
            }
            if (p === 29) {
              this.genrePopular = auxGenre
              this.showGenre = true
            }
          })
      }
      this.nameGender = name
    },
    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    }
  }
}
</script>
