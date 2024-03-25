import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  it('renders properly', () => {
    const wrapper = mount(TodoList, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
