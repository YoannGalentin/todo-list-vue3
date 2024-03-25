import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  it('renders properly', async () => {
    render(TodoList)

    const title = screen.getByRole('heading', { level: 1 })

    expect(screen.queryByText('Times clicked: 2')).toBeTruthy()
  })
})
