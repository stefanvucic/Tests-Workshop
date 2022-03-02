import React from 'react'
import App from '../App'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('AccountBar Component test', () => {
  it('navigates to 404 if route is not matched', () => {
    const history = createMemoryHistory({
      initialEntries: [`/fakeRoute`],
    })
    const { getAllByRole } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(getAllByRole('heading', { name: '404' }).length).toBe(1)
  })
})