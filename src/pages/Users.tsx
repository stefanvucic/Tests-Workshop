import React, { FC, ReactElement, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import { Grid, TextField, Typography } from '@material-ui/core'
import UserCard from '../components/UserCard'
import axios from 'axios'

export interface User {
  id: number
  name: string
  email: string
  address: {
    city: string
    geo: {
      lat: string
      lng: string
    }
  }
  company: {
    name: string
  }
}

const Users: FC = (): ReactElement => {
  const [users, setUsers] = useState<User[]>([])
  const [requestError, setRequestError] = useState('')

  const getUsers = async () => {
    setRequestError('')
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/users')
      // const data = await response.json()

      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      setUsers(data)
    } catch (err) {
      setRequestError('Something Went Wrong')
    }
  }

  const handleChange = (input: string) => {
    setUsers((prev) => prev.filter((user) => user.name.includes(input.trim())))
    if (!input) {
      getUsers()
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box mt="40px" width="1200px">
      <Grid container alignItems="center" wrap="nowrap">
        <Box m="40px" flexGrow={1}>
          <Typography variant="h4">Users</Typography>
        </Box>
        <TextField
          variant="outlined"
          label="Search"
          name="search"
          onChange={(e) => handleChange(e.target.value)}
        />
      </Grid>

      <Box m="40px" p="20px">
        {users.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}
      </Box>
      {requestError && <Typography variant="h5">{requestError}</Typography>}
    </Box>
  )
}

export default Users
