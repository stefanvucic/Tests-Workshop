import React, { FC, ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import { Link, NavLink } from 'react-router-dom'
import makeStyles from '@material-ui/styles/makeStyles'

interface NavBarProps {}

const links = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
]

const useStyles = makeStyles(() => ({
  link: {
    margin: '15px',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '22px',
  },
  activeLink: {
    color: 'orange',
  },
}))

const NavBar: FC<NavBarProps> = (): ReactElement => {
  const classes = useStyles()
  return (
    <Box>
      {links.map((props) => (
        <NavLink
          key={props.label}
          exact
          className={classes.link}
          activeClassName={classes.activeLink}
          to={props.to}
        >
          {props.label}
        </NavLink>
      ))}
    </Box>
  )
}

export default NavBar
