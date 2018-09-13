<template>
  <div class="wrraper-gold">
    <div class="wrapper-gold-item" >1</div>
    <div class="wrapper-gold-item">2</div>
    <div class="wrapper-gold-item">3</div>
    <div class="wrapper-gold-item">4</div>
  </div>

</template>
<script>
import Header from '../components/Header'

console.log('Sprawdzam');
  export default {
      name: 'Gold',
      components:{
          Header
      },

      data ()
{
    return {

    }
},

   

  

  }
  
</script>
<style>
.wrraper-gold{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 300px;
    align-items: flex-end;
    background:greenyellow;
}
.wrapper-gold-item{
    width: 10px;

}
</style>


