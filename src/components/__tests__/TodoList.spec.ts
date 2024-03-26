import {describe, expect, it} from 'vitest'
import {render, screen, waitFor} from '@testing-library/vue'
import TodoList from '../TodoList.vue'
import router from '../../router'

describe('TodoList', () => {
    it('renders properly', async () => {
        render(TodoList, {
                global: {
                    plugins: [router]
                },
                props: {
                    title: "Todo List",
                    subtitle: "Subtitle"
                }
            }
        )

        const title = screen.getByRole('heading', {level: 1})

        await waitFor(() => {
            expect(title.textContent).toBe("Todo List")
        })
    })
})
