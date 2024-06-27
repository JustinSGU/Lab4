import React from 'react'

const Modal = ({ children, open, close }) => {
    if (!open) return null
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50" onClick={close} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-50">
                <button className="btnCloseModal text-left mb-4" onClick={close}>X</button>
                {children}
            </div>
        </>
    )
}

export default Modal
