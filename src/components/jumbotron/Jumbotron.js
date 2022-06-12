import React from 'react'
import {P , Image , Title , Container , Inner} from './styles/jumbotron-style'
import './styles/style.scss'
export default function Jumbotron({children , direction="row" , ...restProps}) {
    // console.log(Inner)
    return (
        <Inner direction = {direction}>
            {children}
        </Inner>
    )
}
Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Title = function Jumbotrontitle ({children, ...restProps}){
    return <Title{...restProps}>{children}</Title>
}
Jumbotron.Image = function JumbtronImage ({...restProps}){
    return <Image {...restProps}/>
}
Jumbotron.P = function JumbtronP({children , ...restProps }) {
    return <P {...restProps}>{children}</P>
}