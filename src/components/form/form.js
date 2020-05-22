import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BalanceErrorModal from '../modals/balance-error-modal'
import CurrencyErrorModal from '../modals/currency-error-modal'

import './form.scss'

const Form = ({ sumChanged, itemsLoaded, data, sum}) => {
    const [money, setMoney] = useState('')
    const [currency, setCurrency] = useState('')
    const [currencyValue, setCurrencyValue] = useState();

    const [balanceErrorModal, setBalanceErrorModal] = useState('modal fade modal-hidden')
    const [currencyErrorModal, setCurrencyErrorModal] = useState('modal fade modal-hidden')

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://www.cbr-xml-daily.ru/daily_json.js',
          );
          setCurrencyValue(result.data.Valute);
        };
        fetchData();     
      }, []);
      
      
    const sendInfo = (money, currency) => {
        const usdValue = currencyValue.USD.Value
        const eurValue = currencyValue.EUR.Value
        if(currency === '') {
            setCurrencyErrorModal('modal fade show')
        } else if(money > 0){
            if (currency === 'usd') {
                money = money * Math.round(usdValue)
            } else if (currency === 'eur') {
                money = money * Math.round(eurValue)
            }  
            sumChanged(money)
            const Total = sum += money
            let newData = [];
            data.map((item) => {
                if(item.price <= Total) {
                   newData.push(item)
                }
                return item
            })
            if(newData.length === 0) {
                setBalanceErrorModal('modal fade show')
            }
            itemsLoaded(newData)
        } 
    }
    const clearInfo = () => {
        setMoney('')
        setCurrency('')
        sumChanged('clear')
        itemsLoaded(data)
    }
    return (
        <div>
            <form className="form input-group">
                <select className="custom-select form__select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value=""></option>
                    <option value="rub">RUB</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
                <input type="number" placeholder="Сумма" value={money} onChange={(e) => setMoney (Number(e.target.value))}/>
                <button className="btn btn-success btn-sm" onClick={(e) => {
                    e.preventDefault()
                    sendInfo(money, currency)
                    }}><i className="fa fa-plus-circle"></i> Добавить</button>
                <button className="btn btn-danger btn-sm" onClick={(e) => {
                    e.preventDefault()
                    clearInfo()
                }}><i className="fa fa-trash-o"></i> Сбросить</button>
            </form>
            <BalanceErrorModal errorModal={balanceErrorModal} onClicked={() => setBalanceErrorModal('modal fade modal-hidden')}/>
            <CurrencyErrorModal errorModal={currencyErrorModal} onClicked={() => setCurrencyErrorModal('modal fade modal-hidden')}/>
        </div>
    )
}
export default Form