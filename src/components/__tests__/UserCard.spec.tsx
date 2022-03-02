import React from 'react'
import UserCard from '../UserCard'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { user } from '../../tools/mockedData'

const renderComponent = () => {
  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        <UserCard data={user} />
      </Router>
    ),
  }
}

describe('UserCard Component tests', () => {
  it('renders the proper number of columns', () => {
    const { getAllByRole } = renderComponent()
    expect(getAllByRole('heading').length).toBe(5)
  })
  it('renders the Company data properly', () => {
    const { getByRole, getByText } = renderComponent()
    expect(getByRole(`heading`, { name: 'Company' })).toBeInTheDocument()
    expect(getByText(`${user.company.name}`)).toBeInTheDocument()
  })
  it('sets Link to prop properly', () => {
    const { getByRole } = renderComponent()
    const link = getByRole('link') as HTMLAnchorElement
    expect(link.href).toContain(`/users/${user.id}`)
  })
})
