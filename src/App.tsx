import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    return (
        <div className="App">
            <div>Before NewComponent</div>
            <NewComponent contentComponent={topCars}/>
            <div>After NewComponent</div>
        </div>
    );
}

export default App;


