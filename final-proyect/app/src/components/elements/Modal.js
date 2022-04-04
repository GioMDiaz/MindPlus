import { MdClose } from "react-icons/md"
import "./Modal.sass"

const Modal = ({className, children, onClose}) => {
    return (
    <div className='backDrop'>
        <div className={`modal ${className}`}>
            <MdClose className="modal__close" onClick={onClose}/>
            {children}
        </div>
    </div>
    )
}

export default Modal