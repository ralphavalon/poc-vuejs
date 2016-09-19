<template>
  <div id="grid">
     <h2>{{ titleTable }}</h2>
     <table class="table">
         <thead>
            <tr>Nome</tr>
            <tr>Faixa de Preço</tr>            
         </thead>
         <tbody v-for="item in listRestaurante">
             <td>{{ item.nome }}</td>
             <td>{{ item.price }}</td>
         </tbody>
     </table>
  </div>
</template>

<script>
var Vue = require('vue');
var json = "";
var getJson = (function(){
    Vue.$http.get('../data/data.json').then((response) => {
       return response;
    });    
});    
export default {

    data () {
        return {
            titleTable: 'Restaurantes',
            listRestaurante: getJson()
        }
    }
}
</script>
