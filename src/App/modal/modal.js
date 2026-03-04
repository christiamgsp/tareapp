import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'; // Verifica que el archivo se llame exactamente así

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      <div className='ModalContent'>{children}</div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
