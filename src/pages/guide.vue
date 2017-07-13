<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      <router-link to="/home">go to home</router-link>
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/css/function';

</style>
