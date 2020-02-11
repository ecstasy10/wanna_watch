<template>
  <div class="my-4">
    <div class="card" style="width: 18rem;">
      <img src="../assets/logo.png" class="card-img-top" alt="Photo">
      <div class="card-body">
        <h5 class="card-title"> {{ title }} </h5>
        <p class="card-text"> {{ description }} </p>
        <a href="#" class="btn btn-primary">Show more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      title: 'titulo',
      description: 'desc'
    }
  }
}
</script>
