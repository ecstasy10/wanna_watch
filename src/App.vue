<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #25262B;">
        <div class="container">
            <a class="navbar-brand" href="index.html">wanna watch?</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/movies">Movies</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/tv">Tv-Shows</router-link>
                </li>
              </ul>
            </div>
            <form class="form-inline" v-on:submit.prevent="searchT">
                <input id="inputSearch" v-model="inputSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button id="buttonSearch" class="btn btn-outline-success my-2 my-sm-0" v-show="inputSearch" type="submit">
                    Search
                  </button>
              </form>
            </div>
        </nav>
        <div class="container">
          <router-view ></router-view>
        </div>
  </div>
</template>

<script>
import search from './components/search'

export default {
  name: 'App',
  data () {
    return {
      inputSearch: ''
    }
  },
  methods: {
    searchText: function () {
      // this.$router.push('/search')
      // console.log('hola')
      // this.$root.$emit('search')
      // search.methods.search()
      if (this.$router.history.current.path !== '/search') {
        this.$router.push('/search')
      }
      // this.$root.$on('search', () => { this.$router.push('/search') })
    },
    searchT: function () {
      // console.log(search)
      if (this.$router.history.current.path !== '/search') {
        this.$router.push('/search')
      }
      search.methods.search(document.getElementById('inputSearch').value)
    }
  }
}
</script>
