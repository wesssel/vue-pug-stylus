import Vue from 'vue'
import ItemList from './component/item-list/index.vue'

Vue.create = obj => new Vue(obj)

Vue.create({
  el: '#app',
  components: { ItemList },
  template: `<ItemList />`,
})
