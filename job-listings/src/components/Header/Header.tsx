import React from 'react'
import imgBg from '../../images/bg-header-desktop.svg'
import { StyledImage } from './HeaderElements'
const Header = () => {
  return (
    <nav>
     <StyledImage src={imgBg}></StyledImage>   
    </nav>
  )
}

export default Header