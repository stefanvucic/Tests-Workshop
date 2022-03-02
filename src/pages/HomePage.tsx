import React, { FC, ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (): ReactElement => {
  return (
    <Box>
      <Box m="40px" flexGrow={1}>
        <Typography variant="h4">Welcome to first FE Workshop!!</Typography>
      </Box>
    </Box>
  )
}

export default HomePage
