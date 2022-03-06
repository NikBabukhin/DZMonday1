import {useState} from "react";

type BanknotesPropsType = {
    banknotes: string,
    value: number,
    number: string,
}
type BanknotesPropsTypeAll = {
    dataBanknotes: Array<BanknotesPropsType>
    callbackFuncDelete: (el: string) => void
    callbackFuncSortAll: (el: string) => void
}


export const Banknotes = (props: BanknotesPropsTypeAll) => {

    const onClickHandlerDelete = (idElement: string) => {
        props.callbackFuncDelete(idElement);
    }
    const onClickHandlerSort = (el:string) => {
        props.callbackFuncSortAll(el)
        console.log(props.dataBanknotes, el);
    }

    return (
        <div>
            <ul>
                {props.dataBanknotes.map((el, index: number) => {
                    return (
                        <li key={index}>
                            <span>{el.banknotes} </span>
                            <span>{el.value} </span>
                            <span>{el.number} </span>
                            <button onClick={() => onClickHandlerDelete(el.number)}>Delete banknote</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>onClickHandlerSort('Dollars')}>Show Dollars</button>
                <button onClick={()=>onClickHandlerSort('RUB')}>Show Rubles</button>
                <button onClick={()=>onClickHandlerSort('all')}>Show All</button>
            </div>
        </div>
    )
}