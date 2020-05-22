import React from 'react';
import '../modals.scss';
const SuccessModal = ({ successModal, onClicked, itemModal }) => {
    const { image } = itemModal;
    return (
        <div className={successModal}>
                <div className="modal-dialog success-dialog">
                    <img src={image} alt="Товар" width="150"></img>
                    <h2>Примите товар</h2>
                    <button type="button" className="btn btn-primary modal__button" onClick={onClicked}>Ок</button>
                </div>
        </div>
            
    )
}

export default SuccessModal;