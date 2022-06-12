import React from 'react';
import {
    Container,
    Inner,
    Input,
    Button,
    P,
    Label,
    InputContainer,
    ButtonContainer
} from './styles/OptForm-styles'
import { useRef  , useState} from 'react';
function OptForm() {
    const InputRef = useRef(null);
    const [focusLabel, setfocusLabel] = useState(false);
    const HandleFocus = () => {
        setfocusLabel(focusLabel => !focusLabel)
        InputRef.current.focus();
    }
    const handleChange = () => {
        setfocusLabel(focusLabel => !focusLabel)
    }
    const handleTheLabelInteraction = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(e.target.classList.contains('notfocused'))
        {
            setfocusLabel(focusLabel => focusLabel)
            InputRef.current.focus()
        }
        else {
            InputRef.current.blur();
            setfocusLabel(focusLabel => !focusLabel)
        }
    }
  return (
      <Container>
          <Inner>
            <InputContainer>
                <OptForm.InputField autocomplete="off" id="InputEl" onFocus={HandleFocus} ref={InputRef} onBlur={handleChange}/>
                <OptForm.Label htmlFor="InputEl" onClick={e => handleTheLabelInteraction(e)} className = {`${focusLabel ? 'focused' : 'notfocused'}`}></OptForm.Label>
            </InputContainer>
            <ButtonContainer>
                <OptForm.Button></OptForm.Button>
            </ButtonContainer>
          </Inner>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </Container>
  );
}
OptForm.InputContainer = function InputContainerElement ({children,...restProps}){
    return <InputContainer {...restProps}>Email Address</InputContainer>
}
OptForm.ButtonContainer = function ButtonContainerElement ({children,...restProps}){
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}
OptForm.InputField = React.forwardRef((props , InputRef) => (
    <Input {...props} ref={InputRef} name ="input"/>
));
OptForm.Label = function labelElement ({children,...restProps}){
    return <Label {...restProps}>Email Address</Label>
}
OptForm.Button = function buttonElement ({children,...restProps}){
    return <Button {...restProps}>Try It Now</Button>
}
OptForm.Text = function TextElement ({children,...restProps}){
    return <P {...restProps}>{children}</P>
}
export default OptForm;
