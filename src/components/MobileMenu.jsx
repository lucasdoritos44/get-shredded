import React from 'react'
import { Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'


const MobileMenu = ({ setMobileMenu }) => {

  return (
    <Stack className="mobile__menu">
      <CloseIcon className="close__icon" onClick={() => setMobileMenu(false)} />
      <Link className="mobile__links" onClick={() => setMobileMenu(false)} to='/'>Home</Link>
      <Link className="mobile__links" onClick={() => setMobileMenu(false)} to='/exercises'>Exercises</Link>
      <Link className="mobile__links" onClick={() => setMobileMenu(false)} to='/body-calculator'>Body Calculator</Link>
    </Stack>

  )


}

export default MobileMenu