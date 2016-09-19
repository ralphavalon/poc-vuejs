import Vue from 'vue'
import Header from './Header.vue'
import Grid from './Grid.vue'
import vueResource from 'vue-resource';

Vue.use(vueResource);

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  el: '#grid',
  render: h => h(Grid),
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    }
  }
})
