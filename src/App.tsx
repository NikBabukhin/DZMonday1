import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Banknotes} from "./components/Banknotes";
import {SortButtons} from "./components/SortButtons";

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

    const [filterCount, setFilter] = useState('All')

    let currentMoneyArray = money;

    const onClickHandler = (numberOfElement: string) => {
        let moneyArrayIfDeletedItem = currentMoneyArray.filter(el => el.number !== numberOfElement)
        setMoney(moneyArrayIfDeletedItem);
        console.log(numberOfElement);
    }

    if (filterCount === 'Dollars') {
        currentMoneyArray = money.filter(el => el.banknotes === 'Dollars')
    }
    if (filterCount === 'RUB') {
        currentMoneyArray = money.filter(el => el.banknotes === 'RUB')
    }

    const sortMoneyArray = (filterCount: 'Dollars' | 'RUB' | 'All') => {
        setFilter(filterCount)
        currentMoneyArray = money.filter(el => el.banknotes !== filterCount)
        console.log(currentMoneyArray, filterCount);
    }

    return (
        <div>
            <Banknotes moneyData={currentMoneyArray} callback={onClickHandler}/>
            <SortButtons callback={sortMoneyArray}/>
        </div>
    )
}


export default App;


