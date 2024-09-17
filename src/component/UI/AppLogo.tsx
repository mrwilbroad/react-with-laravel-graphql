import React from 'react'
import Logo from "./../../assets/image/appLogo.png";
import { Image } from 'react-bootstrap';

const AppLogo = () => {
  return (
      <Image
        src={Logo}
        className='shadow'
        style={{ 
            width : "200px",
            height : "200px",
            objectFit : "cover",
            borderRadius : "50%",
            marginBottom : "1rem"
         }}
      />
  )
}

export default AppLogo