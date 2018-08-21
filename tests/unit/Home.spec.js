import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Render navbar', () => {
    const wrapper = shallowMount(Home, {})
    expect(wrapper.find('.navbar-fixed').exists()).toBe(true)
  })
})
