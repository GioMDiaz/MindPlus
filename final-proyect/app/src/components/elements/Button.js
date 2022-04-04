import React from 'react'
import "./Button.sass"

const Button = ({className, children, ...props}) => {
  return (
    <button {...props} className={`button ${className}`}>{children}</button>
  )
}

export default Button