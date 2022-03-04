type BodyPropsType = {
    titleBody: string,
}

export const Body=(props:BodyPropsType)=> {
    return (
        <>Some {props.titleBody}</>
    )
}