import config from './config'

export default {
  name: 'item-list',

  data() {
    return {
      items: config.artists,
    }
  }
}
