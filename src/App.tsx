import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {Header} from "./components/Header";
import {Body} from "./components/Body";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(`Hi ${subscriber}, i'm ${age} y.o, my address is ${address}`)
    }

    const Button2Foo = (name: string) => {
        console.log(`Hi ${name}`)
    }

    const Button3Foo = () => {
        console.log("i'm stupid button")
    }

    let [counter, setCounter] = useState(0);

    const changeCounter = (id: number) => {
        if (id === 1) {
            setCounter(++counter)
        } else if (id === 2) {
            setCounter(counter = 0)
        } else {
            setCounter(--counter)
        }
    }


    return (
        <div className="App">
            <Header titleHeader={'New Header'}/>
            <Body titleBody={'New Body'}/>
            <NewComponent contentComponent={topCars}/>
            <Button name={'YouTube Channel 1'} callback={() => Button1Foo('Vasya', 24, 'Moscow, New Arbat st.')}/>
            <Button name={'YouTube Channel 2'} callback={() => Button2Foo('Petya')}/>
            <Button name={'Stupid button'} callback={Button3Foo}/>
            <h3>{counter}</h3>
            <button id={'1'} onClick={() => changeCounter(1)}>+</button>
            <button id={'2'} onClick={() => changeCounter(2)}>0</button>
            <button id={'3'} onClick={() => changeCounter(3)}>-</button>
        </div>
    );
}

export default App;


