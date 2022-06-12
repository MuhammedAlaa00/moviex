import React , {useContext , createContext} from 'react'
import {
    Container , 
    Inner , 
    AccordionContainer , 
    AccordionTitle ,
    AccordionItem,
    AccordionHeader,
    AccordionBody
    }
from './styles/fixtures-style'
const CollapseContext = createContext()
function Fixtures({children,...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}
Fixtures.Container = function Accordioncontainer ({children , ...restProps}){
    return <AccordionContainer {...restProps}>{children}</AccordionContainer>
}
Fixtures.Title = function Accordiontitle ({children , ...restProps}){
    return <AccordionTitle {...restProps}>{children}</AccordionTitle>
}
Fixtures.Item = function Accordionitem ({children,isCollapsed,...restProps}){
    return (<CollapseContext.Provider value={{isCollapsed}}>
                    <AccordionItem {...restProps}>{children}</AccordionItem>
            </CollapseContext.Provider>) 
}
Fixtures.Header = function Accordionheader ({children,...restProps}){
    return (<AccordionHeader
            {...restProps}>
            {children}
        </AccordionHeader>);
}
Fixtures.Body = function Accordionbody ({children , ...restProps}){
    const {isCollapsed} = useContext(CollapseContext);
    return (<AccordionBody 
                className={`${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
                {...restProps}>{children}
            </AccordionBody>)
}
export default Fixtures