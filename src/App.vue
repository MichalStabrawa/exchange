<template>
  <div id="app">
 <Nav />
 <Header />
</div>
</template>

<script>
import Nav from '../src/components/Nav'
import Header from '../src/components/Header'

export default {
  name: 'App',
  components: {
    Nav,
    Header
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

}
</style>
