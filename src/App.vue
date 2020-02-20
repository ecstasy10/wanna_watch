<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #25262B;">
        <div class="container">
            <a class="navbar-brand text-success" href="index.html">wanna watch?</a>
            <form class="form-inline" v-on:submit.prevent="searchT">
                <input id="inputSearch" v-model="inputSearch" class="form-control mr-sm-2"
                  type="search" placeholder="Search" aria-label="Search">
                  <router-link v-show="inputSearch" to="/search"
                  id="buttonSearch" class="btn btn-outline-success my-5 my-sm-0">
                    Search
                  </router-link>
              </form>
            </div>
            <!-- v-show="inputSearch" -->
        </nav>
        <div class="container">
          <router-view ></router-view>
        </div>
  </div>
</template>

<script>
// import search from './components/search'

export default {
  name: 'App',
  data () {
    return {
      inputSearch: ''
    }
  },
  methods: {
    searchT: function () {
      // console.log(search)
      if (this.$router.history.current.path !== '/search' && document.getElementById('inputSearch').value !== '') {
        this.$router.push('/search')
      }
      // search.methods.search(document.getElementById('inputSearch').value)
    }
  }
}
</script>
