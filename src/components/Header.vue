<template>
    <header>
        <h1>Kursy Walut {{info}}</h1>

        <div class="wrapper" v-if="this.info3!=null">
            <div class="wrapper-item"><h3 id="eur">{{info3[7].code}}</h3><hr><h4>{{info3[7].mid}}</h4></div>
            <div class="wrapper-item"><h3 id="usa">{{info3[1].code}}</h3><hr><h4>{{info3[1].mid}}</h4></div>
            <div class="wrapper-item"><h3 id="chf">{{info3[9].code}}</h3><hr><h4>{{info3[9].mid}}</h4></div>
            <div class="wrapper-item"><h3 id="gbp">{{info3[10].code}}</h3><hr><h4>{{info3[10].mid}}</h4></div>
        </div>
        <div>{{info2}}</div>
        <hr>
        <div class="wrapper-table">
          <div><h2>TABELA KURSÓW WALUT</h2>
                 <table>
               
                <thead>
                    <tr>
                        <th>KRAJ</th>
                        <th>KOD</th>
                        <th>KURS</th>
                    </tr>
                    </thead> 
                    <tbody> <tr v-for="(item,itemKey) in info3" :key="itemKey">  
                <td >{{item.code}}</td>
                <td >{{item.currency}}</td>
                <td >{{item.mid}}</td>
                 </tr></tbody>
               
             </table></div>
         
             <div class="wraper-form">
                 <h2>PRZELICZ NA ZŁ</h2>
                 <input type="number" v-model="val1" placeholder="wpisz kwotę" >
                 <select name="" id="" v-model="selected" >
                     <option  v-bind:value="item.mid" v-for="(item,itemKey) in info3" :key="itemKey">{{item.code}}</option>
                 </select>

                
                <span>kurs: <strong>{{selected}}</strong></span>
                <span>ilość  <strong>{{val1}}</strong></span>
                <button v-on:click="changeVal">PRZELICZ</button><br>
                <span id="span11"></span>

             

                <div class="wrapper-form-gold">
                    <h3>KURS ZŁOTA {{goldDate.data}}</h3>
                    <div class="wrapper-item"><h3>CENA</h3><hr>{{goldDate.cena}}</div>

                    <div class="item-gold" v-bind:style="{ height: goldDate.cena+'px'}">141.90</div><label for="">0.2.09.2018</label>
                </div>


             </div>
<div></div>
        </div>
      
       
  
    </header>
</template>

<script>
import axios from 'axios'




export default {
    name: 'Header',

    data(){
        return{
            info: null ,
          info2: null,
          info3: null,
          selected: '',
          val1: '',
          goldDate: null,
          heightDiv: 200
         

         
        }
    },

    

    methods:{
        changeVal: function(){
            document.getElementById('span11').innerText=(parseInt(this.val1))*(parseFloat(this.selected))+""+ 'zl';
        },

       async metoda(){
 fetch("http://api.nbp.pl/api/exchangerates/tables/a/")
    .then(resp => resp.json())
    .then(resp => {
        this.info=resp[0].effectiveDate;
        this.info2=resp[0].table;
        this.info3=resp[0].rates;
        console.log(resp[0].rates);
    })
        },

             async metoda2(){
 fetch("http://api.nbp.pl/api/cenyzlota/")
    .then(resp => resp.json())
    .then(resp => {
        this.goldDate=resp[0];
        console.log(typeof goldDate);
   console.log(resp[0]);
    })
        }

    },

      mounted () {
  
   this.metoda();
   this.metoda2();

  }

 




}




</script>

<style scoped>
header{
    width: 100%;
    height: auto;
    background:transparent;
    padding-top:50px;
    padding-bottom: 50px;
}

header h1{
    margin:0px;
}
.wrapper{padding:10px;
    max-width: 1200px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;

}
.wrapper-item{
    width:80px;
    height: 120px;
    background:rgb(221, 216, 216);
    border-radius:5px;
    margin:10px;
}

.wrapper-table{
    display: flex;
    justify-content: space-around;
}
thead{
    background:#000;
    color:#fff;
   
}

thead th{
    padding:5px;
}

tbody tr:nth-child(odd){
background:rgb(223, 220, 220);

}
tbody tr td{
    padding:5px;
}

.wraper-form{
    display:flex;
    flex-direction: column;

}

.wraper-form input[type="number"]{
    width: 250px;
    height: 35px;
    margin-bottom: 10px;
    border:0px;
    border-bottom: 1px solid grey;
    padding:5px;
}
.wraper-form select{
      width: 250px;
    height: 35px;
    border:0px;
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
    
}

.wraper-form span{
    margin-bottom:10px;
    display:inline-block;
}
.wraper-form button{
    width:250px;
    height: 35px;
    background:rgb(12, 240, 61);
    border:0px;
}
.wrapper-form-gold{
    border-top:1px solid grey;
    display:flex;
    flex-direction: column;
    padding-top: 50px;
}
.wrapper-form-gold .wrapper-item{
    margin:0 auto;
}
.item-gold{
    width: 10px;
   
    background:rgb(182, 190, 132);
}
</style>

