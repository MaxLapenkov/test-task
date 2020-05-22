import React from 'react';
import '../modals.scss';
const ItemModal = ({modal, onClose, onSubmit}) => {
    const { className, image, price } = modal;
    return (
        <div className={className}>
            <div className="modal-dialog">
                <img src={image} alt="Товар" width="150"></img>
                <p>Цена: {price} Р.</p>
                <h2 className="modal__title">Выбрать данный товар?</h2>
                <div>
                    <button type="button" className="btn btn-danger modal__button item-button" onClick={onClose()}>Отмена</button>
                    <button type="button" className="btn btn-primary modal__button" onClick={onSubmit()}>Да</button>
                </div>
                
            </div>
                
        </div>
    )
}

export default ItemModal;