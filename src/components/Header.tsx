type HeaderPropsType = {
    titleHeader: string,
}

export const Header=(props:HeaderPropsType)=> {
    return (
        <>Some {props.titleHeader}</>
    )
}