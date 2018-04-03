<template>
  <div id="app">
    <ul>
      <li><router-link :to="{ name: 'hello' }">HelloWorld Page</router-link></li>
      <li><router-link :to="{ name: 'index' }">Index Page</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./style/style.scss";
</style>
