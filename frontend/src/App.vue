<template>
  <div id="app">
    <Index></Index>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Reset from './css/reset.css';
import Index from './components/index';

export default {
  name: 'App',

  components : {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
</style>
