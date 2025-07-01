import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../components/Router'
import { getCurrentPath } from '../utils/utils'

vi.mock('../utils/utils', () => {
    return {
        getCurrentPath: vi.fn(),
    }
})

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should work', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('Should render 404 page', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        // screen.debug()
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('Should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')

        const routes = [
            {
                path: '/',
                component: () => <h1>Home</h1>,
            },
            {
                path: '/about',
                component: () => <h1>About</h1>,
            },
        ]
        render(<Router routes={routes} />)
        screen.debug()
        expect(screen.getByText('About')).toBeTruthy()
    })
})