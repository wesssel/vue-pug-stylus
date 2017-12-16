import { expect } from 'chai'
import { mount } from 'vue-test-utils'
import ItemList from './index.vue'
import config from './config.json'

describe('Item list', () => {
  it('Pictures should be in view', () => {
    const wrapper = mount(ItemList)
    const $images = wrapper.findAll('.artist__image').wrappers

    config.artists.forEach((artist, index) => {
      const src = $images[index].element.getAttribute('src')

      expect(src).to.equal(artist.image)
    })
  })
})
