import React, { useState } from 'react'
import { Stack, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

import MobileMenu from './MobileMenu'

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  let isMobile = useMediaQuery('(min-width: 1024px)')

  return (
    <Stack direction="row" p="25px" justifyContent="space-between" backgroundColor="black" border="none">
      <Link className='links' to='/'>Get Shredded</Link>
      {isMobile ? <Stack direction="row" sx={{ gap: { sm: '24px', md: '40px' } }}>
        <Link className="links" to='/'>Home</Link>
        <Link className="links" to='/exercises'>Exercises</Link>
        <Link className="links" to='/'>Body Calculator</Link>
      </Stack> : <MenuIcon className="menu__icon" onClick={() => setMobileMenu(true)} />}
      {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu} /> : ''}
    </Stack>
  )
}

export default Header