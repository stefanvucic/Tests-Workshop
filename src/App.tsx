import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Users from './pages/Users'
import UserPage from './pages/UserPage'

const NotFound = () => <h4>404</h4>

const App: React.FC = () => {
  const [users, setUsers] = useState([])

  // const getUsers = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   setUsers(data)
  // }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  const theme = createMuiTheme()
  return (
    <MuiThemeProvider theme={theme}>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '0px',
          paddingBottom: '50px',
        }}
      >
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/users"
            component={() => <Users />}
          />
          <Route
            exact
            path="/users/:id"
            component={() => <UserPage users={users} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  )
}

export default App
