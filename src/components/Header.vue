<template>
  <header>
    <h1>Kursy Walut {{info}}</h1>
    <a href="" v-scroll-to="'#element'">ZŁOTO</a>
    <div class="wrapper" v-if="this.info3!=null">
      <div class="wrapper-item">
        <h3 id="eur">{{info3[7].code}}</h3>
        <hr>
        <h4>{{info3[7].mid}}</h4>
      </div>
      <div class="wrapper-item">
        <h3 id="usa">{{info3[1].code}}</h3>
        <hr>
        <h4>{{info3[1].mid}}</h4>
      </div>
      <div class="wrapper-item">
        <h3 id="chf">{{info3[9].code}}</h3>
        <hr>
        <h4>{{info3[9].mid}}</h4>
      </div>
      <div class="wrapper-item">
        <h3 id="gbp">{{info3[10].code}}</h3>
        <hr>
        <h4>{{info3[10].mid}}</h4>
      </div>
    </div>
    <div>{{info2}}</div>
    <hr>
    <div class="wrapper-table">
      <div>
        <h2>TABELA KURSÓW WALUT</h2>
        <table>

          <thead>
            <tr>
              <th>KRAJ</th>
              <th>KOD</th>
              <th>KURS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,itemKey) in info3" :key="itemKey">
              <td>{{item.code}}</td>
              <td>{{item.currency}}</td>
              <td>{{item.mid}}</td>
            </tr>
          </tbody>

        </table>
      </div>

      <div class="wraper-form">
        <h2>PRZELICZ NA ZŁ</h2>
        <input type="number" v-model="val1" placeholder="wpisz kwotę" min="1">
        <select name="" id="" v-model="selected">
          <option v-bind:value="item.mid" v-for="(item,itemKey) in info3" :key="itemKey">{{item.code}}</option>
        </select>


        <span>kurs: <strong>{{selected}}</strong></span>
        <span>ilość <strong>{{val1}}</strong></span>
        <button v-on:click="changeVal">PRZELICZ</button><br>
        <span id="span11"></span>



        <div class="wrapper-form-gold" v-if="this.goldDate!=null">
          <h3>KURS ZŁOTA {{goldDate.data}}</h3>
          <div class="wrapper-item">
            <h3>CENA</h3>
            <hr>{{goldDate.cena}}
          </div>
          <h3>OSTATNIE 4 notowania</h3>
          <div class="wrraper-gold" v-if="this.goldLast!=null">
            <div class="wrapper-gold-item" v-bind:style="{ height: goldLast0+'px'}"><span>{{goldLast[0].cena}}</span><span>{{goldLast[0].data}}</span></div>
            <div class="wrapper-gold-item" v-bind:style="{ height: goldLast1+'px'}"><span>{{goldLast[1].cena}}</span><span>{{goldLast[1].data}}</span></div>
            <div class="wrapper-gold-item" v-bind:style="{ height: goldLast2+'px'}"><span>{{goldLast[2].cena}}</span><span>{{goldLast[2].data}}</span></div>
            <div class="wrapper-gold-item" v-bind:style="{ height: goldLast3+'px'}"><span>{{goldLast[3].cena}}</span><span>{{goldLast[3].data}}</span></div>
          </div>




          <div class="block" id="element">
            <span class="demonstration">Przelicz wartość złota(g)</span>
            <el-slider v-model="value2" value=""></el-slider>
          </div>
          <span>{{value2}}g</span>

          <span class="goldPriceNow">{{value2*((goldDate.cena)/100)}}zł</span>
          <span></span>
        </div>


      </div>
      <div></div>
    </div>



  </header>
</template>

<script>
  import axios from 'axios'
  import Gold from '../components/Gold.vue'



  const Vue = require('vue')
  const VueScrollTo = require('vue-scrollto')
  Vue.use(VueScrollTo)


  export default {
    name: 'Header',
    components: {
      Gold

    },

    data() {
      return {
        info: null,
        info2: null,
        info3: null,
        selected: '',
        val1: '',
        value2: '',
        goldDate: null,
        heightDiv: 200,
        goldLast: null,
        goldLast0: null,
        goldLast1: null,
        goldLast2: null,
        goldLast3: null




      }
    },



    methods: {
      changeVal: function () {
        document.getElementById('span11').innerText = (parseInt(this.val1)) * (parseFloat(this.selected)) + "" + 'zl';
      },


      async metoda() {
        fetch("http://api.nbp.pl/api/exchangerates/tables/a/")
          .then(resp => resp.json())
          .then(resp => {
            this.info = resp[0].effectiveDate;
            this.info2 = resp[0].table;
            this.info3 = resp[0].rates;
            console.log(resp[0].rates);
          })
      },

      async metoda2() {
        fetch("http://api.nbp.pl/api/cenyzlota/")
          .then(resp => resp.json())
          .then(resp => {
            this.goldDate = resp[0];
            console.log(typeof goldDate);
            console.log(resp[0]);
          })
      },
      async metoda3() {
        fetch("http://api.nbp.pl/api/cenyzlota/last/7")
          .then(resp => resp.json())
          .then(resp => {
            this.goldLast = resp;
            console.log(typeof goldLast);
            this.goldLast0 = (resp[0].cena) / 2;
            this.goldLast1 = (resp[1].cena) / 2;
            this.goldLast2 = (resp[2].cena) / 2;
            this.goldLast3 = (resp[3].cena) / 2;

          })
      },


    },

    mounted() {

      this.metoda();
      this.metoda2();
      this.metoda3();

    }






  }
</script>

<style scoped>
  header {
    width: 100%;
    height: auto;
    background: transparent;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  header h1 {
    margin: 0px;
  }

  .wrapper {
    padding: 10px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  }

  .wrapper-item {
    width: 80px;
    height: 120px;
    background: rgb(221, 216, 216);
    border-radius: 5px;
    margin: 10px;
  }

  .wrapper-item:nth-child(odd) {
    background: rgb(192, 200, 247);
  }

  .wrapper-table {
    display: flex;
    justify-content: space-around;
  }

  thead {
    background: #000;
    color: #fff;

  }

  thead th {
    padding: 5px;
  }

  tbody tr:nth-child(odd) {
    background: rgb(223, 220, 220);

  }

  tbody tr td {
    padding: 5px;
  }

  .wraper-form {
    display: flex;
    flex-direction: column;

  }

  .wraper-form input[type="number"] {
    width: 250px;
    height: 35px;
    margin-bottom: 10px;
    border: 0px;
    border-bottom: 1px solid grey;
    padding: 5px;
  }

  .wraper-form select {
    width: 250px;
    height: 35px;
    border: 0px;
    border-bottom: 1px solid grey;
    margin-bottom: 10px;

  }

  .wraper-form span {
    margin-bottom: 10px;
    display: inline-block;
  }

  .wraper-form button {
    width: 250px;
    height: 35px;
    background: rgb(12, 240, 61);
    border: 0px;
  }

  .wrapper-form-gold {
    border-top: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }

  .wrapper-form-gold .wrapper-item {
    margin: 0 auto;
  }

  .item-gold {
    width: 10px;

    background: rgb(182, 190, 132);
  }

  .wrraper-gold {

    width: 100%;
    display: flex;
    justify-content: space-around;

    align-items: flex-end;
    border-bottom: 1px solid grey;
    background: gainsboro;

  }

  .wrapper-gold-item {
    position: relative;
    width: 10px;
    background: red;

  }

  .wrapper-gold-item span {
    position: absolute;
    z-index: 10;
    bottom: 0;
    margin: 0;
    right: 15px;
    font-size: 10px;
  }

  .wrapper-gold-item span:nth-child(1) {
    top: 0;
  }

  #element {
    margin-top: 40px;
  }

  .el-slider__bar {
    background-color: gold !important;
  }

  .el-slider__button {
    border: 2px solid gold;
  }

  .goldPriceNow {
    font-size: 30px;
    font-weight: bold;
  }
</style>