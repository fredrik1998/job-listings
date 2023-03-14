import React from 'react'
import imgBg from '../../images/bg-header-desktop.svg'
import imgMobile from '../../images/bg-header-mobile.svg'
import { StyledImage } from './HeaderElements'
const Header: React.FC = () => {
  return (
    <nav>
     <StyledImage src={imgBg} mobileSrc={imgMobile}></StyledImage>   
    </nav>
  )
}

export default Header