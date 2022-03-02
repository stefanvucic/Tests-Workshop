import React from 'react'
import UserPage from '../UserPage'
import { cleanup, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Route, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { users } from '../../tools/mockedData'
import { User } from '../Users'

const renderComponent = (
  args?: { users?: User[]; active?: boolean },
  id = users[0].id
) => {
  const history = createMemoryHistory({ initialEntries: [`/users/${id}`] })
  history.replace = jest.fn()
  const defaultProps = {
    users,
    active: true,
  }
  const props = { ...defaultProps, ...args }
  return {
    ...render(
      <Router history={history}>
        <Route exact path="/users/:id">
          <UserPage {...props} />
        </Route>
      </Router>
    ),
    history,
  }
}

beforeEach(() => {
  cleanup()
})

describe('UserPage Component tests', () => {
  it('renders the content properly', async () => {
    const { getByRole } = renderComponent()
    expect(
      getByRole('heading', { name: `${users[0].name}` })
    ).toBeInTheDocument()
  })
  it('displays ACTIVE status properly', () => {
    const { getByRole } = renderComponent()
    expect(getByRole('heading', { name: `ACTIVE` })).toBeInTheDocument()
  })
  it('displays INACTIVE status properly', () => {
    const { getByRole } = renderComponent({ active: false })
    expect(getByRole('heading', { name: `INACTIVE` })).toBeInTheDocument()
  })
  it('navigates back to users page when user is not found', () => {
    const { history } = renderComponent({}, users.length + 1)
    expect(history.replace).toBeCalledTimes(1)
    expect(history.replace).toBeCalledWith('/users')
    
  })
})
