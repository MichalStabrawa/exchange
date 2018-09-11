<template>
  <div id="app">
 <Nav />
 <Header />
 <Footer />
</div>
</template>

<script>
import Nav from '../src/components/Nav'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Footer
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
