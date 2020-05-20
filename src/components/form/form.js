import React, {useState} from 'react';

const Form = ({ sumChanged, itemsLoaded, data, sum}) => {
    const [money, setMoney] = useState(0)
    const [currency, setCurrency] = useState('')
    const sendInfo = (money, currency) => {
        
        const Total = sum += money
        if(currency === '') {
            alert('Выберите валюту')
        } else {
            if (currency === 'usd') {
                money = money * 65
            } else if (currency === 'eur') {
                money = money * 80
            }  
            sumChanged(money)
            let newData = [];
            data.map((item) => {
                if(item.price <= Total) {
                   newData.push(item)
                }
                return item
            })
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
            <form className="form">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value=""></option>
                    <option value="rub">RUB</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
                <input type="number" placeholder="Сумма" value={money} onChange={(e) => setMoney (Number(e.target.value))}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    sendInfo(money, currency)
                    }}>Добавить</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    clearInfo()
                }}>Сбросить</button>
            </form>
    )
}
export default Form