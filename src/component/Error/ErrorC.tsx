import React, { useEffect } from 'react'

export interface ErrorCprops
{
    children?: React.ReactNode
} 


const ErrorC : React.FC<ErrorCprops>= ({ children}) => {

  useEffect(()=> {

  }, [children]);
  return (
    <small className='text-danger hstack gap-1'>
      <i className="fa-solid fa-triangle-exclamation"/>
      {children}
    </small>
  )
}

export default ErrorC