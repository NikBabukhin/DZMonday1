type DataCarsType = {
    manufacturer: string,
    model: string,
}

type MyPropsType = {
    contentComponent: Array<DataCarsType>,
}

export const NewComponent = (props: MyPropsType) => {

    return (
        <div>
            {props.contentComponent.map((el, index) => {
                return (
                    <div key={index}>
                        <div>{el.manufacturer}</div>
                        <div>{el.model}</div>
                    </div>
                )
            })}
        </div>
    )
}