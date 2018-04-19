//conponenets
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++" class="btn ">You clicked me {{ count }} times.</button>'
});

Vue.component('header-component',{
  props:['name'],
  template:'<h1 class="text-center">{{name}}</h1>'
});

Vue.component('lista-personas',{
  props:['lista'],
  template:`<ul>
    <li v-for="li in lista">{{li.id}}{{li.name}}</li>
  </ul> `
});

app = new Vue({
  el:"#app",
  data:{
    name:"Richard",
    lista :[
      {id:1, name:'Richard', lastname:'Berna'},
      {id:1, name:'Juan', lastname:'Perez'},
      {id:1, name:'Rodrigo', lastname:'Martinez'}
    ]
  }
});
