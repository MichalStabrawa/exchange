<template>
  <nav>
<p>KURSY WALUT I ZŁOTA</p>
 <el-button round><a href="#" v-scroll-to="'#element'"></a></el-button>
  </nav>

</template>
<script>
const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
  export default {
    name: 'Nav',

}
</script>
<style scoped>
  nav {
    background: #000;
    height: 80px;
    color:gold;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
  }

  nav i {
    color: #fff;
  }

  nav button{
    background: transparent;
  }
</style>
