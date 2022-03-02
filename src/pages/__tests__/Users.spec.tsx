import React from 'react'
import Users from '../Users'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { users } from '../../tools/mockedData'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { fakeFetch } from '../../tools/utils'

const renderComponent = () => {
  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        <Users />
      </Router>
    ),
  }
}

// global.fetch = fakeFetch()


describe('Users Component tests', () => {
  //   it('renders the proper content after the data is successfully fetched', async () => {
  //     const { findByText } = renderComponent()
  //     expect(await findByText(`${users[0].name}`)).toBeInTheDocument()
  //   })
  it('renders the proper content after user types in search field', async () => {
    axios.get = fakeFetch(true)
    const { findByText, getByRole, getByText, queryByText } = renderComponent()
    expect(await findByText(`${users[0].name}`)).toBeInTheDocument()
    expect(getByText(`${users[1].name}`)).toBeInTheDocument()
    const search = getByRole('textbox')
    userEvent.type(search, `${users[0].name.slice(3)}`)
    expect(getByText(`${users[0].name}`)).toBeInTheDocument()
    expect(queryByText(`${users[1].name}`)).not.toBeInTheDocument()
  })
  it('handles fetch error properly', async () => {
    axios.get = fakeFetch(true, false)
    const { findByRole } = renderComponent()
    expect(
      await findByRole('heading', { name: 'Something Went Wrong' })
    ).toBeInTheDocument()
  })
})
