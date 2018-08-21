import { shallowMount } from '@vue/test-utils'
import Climas from '@/views/Climas.vue'

describe('Climas.vue', () => {
  it('Render Brazil div map', () => {
    const wrapper = shallowMount(Climas, {})
    expect(wrapper.find('#map').exists()).toBe(true)
  })
})
