import React, { FC, ReactElement, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import { User } from './Users'
import { useHistory, useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

interface UserPageProps {
  users: User[]
  active?: boolean
}

const UserPage: FC<UserPageProps> = ({
  users,
  active = true,
}): ReactElement => {
  const [user, setUser] = useState({} as User)
  const params = useParams<{ id: string }>()
  const history = useHistory()

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === +params.id)
    if (!selectedUser) {
      return history.replace('/users')
    }
    setUser(selectedUser)
  }, [])
  return (
    <Box>
      <Typography variant="h5">Name</Typography>
      <Typography variant="h5">{user?.name}</Typography>
      <Typography variant="h5">{active ? 'ACTIVE' : 'INACTIVE'}</Typography>
    </Box>
  )
}

export default UserPage
