<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/index.vue'
import axios from "axios";




export default {
  name: 'App',
  created() {
    axios.get('http://localhost:8085/hello')
      .then(res => {
        console.log(res)
      })
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
