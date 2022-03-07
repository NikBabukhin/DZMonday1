import React, {useState} from "react";

type MoneyDataArrayType = {
    banknotes: string
    value: number
    number: string
}

type moneyDataPropsType = {
    moneyData: Array<MoneyDataArrayType>
    callback: (el: string)=>void
}


export const Banknotes = (props: moneyDataPropsType) => {
    return (
        <div>
            <ul>
                {props.moneyData.map((el:MoneyDataArrayType) => {
                    return (
                        <li key={el.number}>
                            <span>{el.banknotes}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                            <button onClick={() => props.callback(el.number)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}