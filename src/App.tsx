import React from 'react';
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

    const Button1Foo=(subscriber:string, age:number, address:string) => {
        console.log(`Hi ${subscriber}, i'm ${age} y.o, my address is ${address}`)
    }

    const Button2Foo=(name:string)=>{
        console.log(`Hi ${name}`)
    }

    const Button3Foo=()=> {
        console.log("i'm stupid button")
    }

    return (
        <div className="App">
            <Header titleHeader={'New Header'}/>
            <Body titleBody={'New Body'}/>
            <NewComponent contentComponent={topCars}/>
            <Button name={'YouTube Channel 1'} callback={()=>Button1Foo('Vasya', 24, 'Moscow, New Arbat st.')}/>
            <Button name={'YouTube Channel 2'} callback={()=>Button2Foo('Petya')}/>
            <Button name={'Stupid button'} callback={Button3Foo}/>
        </div>
    );
}

export default App;


