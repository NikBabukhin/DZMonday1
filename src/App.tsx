import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Banknotes} from "./components/Banknotes";

function App() {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUB', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUB', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUB', value: 50, number: ' v1234567890'},
    ])

    type moneyTypes = {
        banknotes: string
        value: number
        number: string
    }

    const [filter, setFilter] = useState('all')
    let currentMoney = money

    const deleteBanknote = (idElement: string) => {
        let filteredMoney = currentMoney.filter((el: moneyTypes) => el.number !== idElement)
        setMoney(filteredMoney);
    }

    const setFilterMoney = (valueFilter: string) => {
        setFilter(valueFilter);
        if (filter === 'RUB') {
            currentMoney = money.filter((el: moneyTypes) => el.banknotes === 'RUB')
            console.log(filter, valueFilter)
        } else if (filter === 'Dollars') {
            currentMoney = money.filter((el: moneyTypes) => el.banknotes === 'Dollars')
            console.log(filter, valueFilter)
        } else {
            currentMoney = money;
            console.log(filter, valueFilter)
        }
        setMoney(currentMoney)
    }

    console.log(money, currentMoney);
    return (
        <div className="App"><Banknotes dataBanknotes={currentMoney}
                                        callbackFuncDelete={deleteBanknote}
                                        callbackFuncSortAll={setFilterMoney}/></div>
    );
}

export default App;


