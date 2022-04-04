import './DropDown.sass'

const DropDown = ({children, className, onClose, ...props}) => {
  
  return (
    <div className={`dropdown ${className}`}onClose={onClose}{...props}>{children}</div>
  )
}

export default DropDown