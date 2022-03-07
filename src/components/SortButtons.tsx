import React from "react";

type SortButtonsType = {
    callback:(el:string)=> void
}

export const SortButtons = (props: any) => {
    return (
        <div>
            <button onClick={() => props.callback('All')}>Sort All</button>
            <button onClick={() => props.callback('Dollars')}>Sort Dollars</button>
            <button onClick={() => props.callback('RUB')}>Sort Rubles</button>
        </div>
    )
}