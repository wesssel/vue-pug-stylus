import config from './config.json'

export default {
  name: 'item-list',

  data() {
    return {
      items: config.artists,
    }
  },
}
