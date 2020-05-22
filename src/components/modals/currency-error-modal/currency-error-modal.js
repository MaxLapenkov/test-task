import React from 'react'
import cross from '../../../images/cross.jpg'
import '../modals.scss'
const CurrencyErrorModal = ({ errorModal, onClicked }) => {
    
    return (
            <div className={errorModal}>
                <div className="modal-dialog">
                    <img src={cross} alt="Ошибка" width="100"></img>
                    <h2 className="modal__title">Выберите валюту</h2>
                    <button type="button" className="btn btn-primary modal__button" onClick={onClicked}>Ок</button>
                </div>

            </div>
    )
}

export default CurrencyErrorModal