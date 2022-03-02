import React, { FC, ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { getLocation } from '../utils/getLocation'
import { User } from '../pages/Users'
import { Link } from 'react-router-dom'

interface UserCardProps {
  data: User
}

const UserCard: FC<UserCardProps> = ({
  data: {
    id,
    name,
    email,
    company: { name: companyName },
    address: {
      city,
      geo: { lat, lng },
    },
  },
}): ReactElement => {
  return (
    <Link
      to={`/users/${id}`}
      style={{ textDecoration: 'none', color: 'black', width: '1200px' }}
    >
      <Grid container spacing={1} style={{width: "1200px"}}>
        <Grid item xs={2}>
          <Typography variant="h6">Name</Typography>
          <Typography variant="body2">{name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Email</Typography>
          <Typography variant="body2">{email}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Company</Typography>
          <Typography variant="body2">{companyName}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">City</Typography>
          <Typography variant="body2">{city}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h6">Location</Typography>
          <Typography variant="body2">{getLocation(+lat, +lng)}</Typography>
        </Grid>
      </Grid>
    </Link>
  )
}

export default UserCard
