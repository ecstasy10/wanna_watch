<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #25262B;">
        <div class="container">
            <router-link class="navbar-brand" to="/">wanna watch?</router-link>
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
            <form class="form-inline">
                <input id="inputSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" @click="()=>{ $router.push('search') }">
                    Search
                  </button>
              </form>
            </div>
        </nav>
        <div class="container">
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
