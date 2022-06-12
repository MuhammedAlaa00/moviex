import React, {useState, useRef} from 'react';
import {Container} from './style/SignUp-style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { auth  , firebase} from '../../lib/firebase.prod';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as ROUTES from '../../Constants/router';
import { useNavigate } from 'react-router-dom';
// import party from "party-js";
import './style/style.scss';
function SignUp() {
    const Navigate = useNavigate()
    const [Email, setEmail] = useState("");
    const [UserName, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [Confirmpassword, setConfirmpassword] = useState("");
    const [emailError, setemailError] = useState("");
    const [UserNameError, setUserNameError] = useState("");
    const [passError, setpassError] = useState("");
    const [ConfirmpassError, setConfirmpassError] = useState("");
    const [passVisibile, setpassVisibile] = useState(true);
    const [ConfirmpassVisibile, setConfirmpassVisibile] = useState(true);
    const confirmRef = useRef();
    const passRef = useRef()
    const useStyles = makeStyles(()=>({
        MuiFormControl: {
            width: "100%",
        },
        inputEmailField: {
            color: "#fff",
            marginBottom:!emailError ? "15px":"5px",
            "&:before":{
                borderBottomColor: !emailError ? "#fff" : "#bf5b05"
            },
            "&:hover:not(.Mui-disabled):before":{
                borderBottom:"1px solid",
                borderBottomColor: !emailError ? "#fff" : "#bf5b05"
            },
            "&:after" :{
                borderBottomColor:"#C81D25"
            },
        },
        inputUserNameField: {
            color: "#fff",
            marginBottom:!UserNameError ? "15px":"5px",
            "&:before":{
                borderBottomColor: !UserNameError ? "#fff" : "#bf5b05"
            },
            "&:hover:not(.Mui-disabled):before":{
                borderBottom:"1px solid",
                borderBottomColor: !UserNameError ? "#fff" : "#bf5b05"
            },
            "&:after" :{
                borderBottomColor:"#C81D25"
            },
        },
        inputPassField: {
            color: "#fff",
            marginBottom:!passError ? "15px":"5px",
            "&:before":{
                borderBottomColor:!passError ? "#fff" : "#bf5b05"
            },
            "&:hover:not(.Mui-disabled):before":{
                borderBottom:"1px solid",
                borderBottomColor: !passError ? "#fff" : "#bf5b05"
            },
            "&:after" :{
                borderBottomColor:"#C81D25"
            },
        },
        inputConfirmPassField: {
            color: "#fff",
            marginBottom:!ConfirmpassError ? "15px":"5px",
            "&:before":{
                borderBottomColor:!ConfirmpassError ? "#fff" : "#bf5b05"
            },
            "&:hover:not(.Mui-disabled):before":{
                borderBottom:"1px solid",
                borderBottomColor: !ConfirmpassError ? "#fff" : "#bf5b05"
            },
            "&:after" :{
                borderBottomColor:"#C81D25"
            },
        },
        cssLabel: {
            color: "#8c8c8c",
            "&.Mui-focused": {
                color: "#C81D25"
            }
        },
        Button:{
            backgroundColor:"#C81D25",
            width: "100%",
            fontSize:"14px",
            fontWeight:"700",
            textTransform:"capitalize",
            "&:hover":{
                backgroundColor:"#fff",
                color:"#C81D25"
            }
        },
        Checkbox:{
            color: "#fff",
            padding: "0px",
            "&.MuiSvgIcon-root":{
                color:"#fff",
            },
            "&.Mui-checked":{
                color: "#b7b6b6"
            }
        },
        Icon : {
            color:"#8c8c8c",
            cursor: "pointer",
            transition: "all .3s ease-in-out",
            fontSize:"20px",
            "&:hover" : {
                color:"#fff"
            }
        }
    }));
    const classes = useStyles();
    const handleSubmitSignUp = (e) => {
        e.preventDefault()
        if(Email === ""){
            setemailError("Please enter a valid email or phone number.");
        }
        if(UserName === "")
        {
            setUserNameError("Please enter a valid UserName.")
        }
        if(password === ""){
            setpassError("Your password must contain between 4 and 60 characters.");
        }
        if(Confirmpassword === ""){
            setConfirmpassError("Your confirm password must be similar to your password");
        }
        if(Email.length < 7){
            setemailError("Please enter a valid email or phone number.");
            return false;
        }
        if(password.length < 6){
            setpassError("Your password must contain between 4 and 60 characters.");
            return false;
        }
        if(Confirmpassword !== password){
            setConfirmpassError("Your password not similar to your password");
            return false;
        }
        if(Email !== ""){
            setemailError("")
        }
        if(password !== ""){
            setpassError("")
        }
        if(Email !== "" && password !== "" && UserName !== "" && Confirmpassword !== ""){
            auth.createUserWithEmailAndPassword(Email, password)
            .then((re)=>{
                firebase.firestore().collection("users").doc(re.user.uid).set({
                    id:re.user.uid,
                    email:Email,
                    userName: UserName,
                    password:password
                })
                Navigate(ROUTES.BROWSE)
                // party.confetti(document.getElementById('partyJSParticles'),{
                //     count:100
                // })
            })
            .catch( err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        setemailError(err.message)
                        break;
                    default:
                        break;
                }
            })
            setEmail("");
            setpassword("");
            setConfirmpassword("");
            setUserName("")
        }
    }
    const handleEmailChange = (e) => {
        setEmail (e.target.value);
        if(Email.length >= 4)
        {   
            setemailError("");
        }
    }
    const handleUserNameChange = (e) => {
        setUserName (e.target.value);
        if(UserName.length >= 5)
        {   
            setUserNameError("");
        }
    }
    const handlePassChange = (e) => {
        setpassword(e.target.value)
        if(password.length >= 6)
        {
            setpassError("");
        }
    }
    const handleConfirmPassChange = (e) => {
        setConfirmpassword(e.target.value)
        if(Confirmpassword.length >= 6)
        {
            setConfirmpassError("");
        }
    }
    const handleConfirmPassVisible = (e) => {
        if (e.target.classList.contains('visible') || e.target.parentNode.classList.contains('visible'))
        {
            confirmRef.current.type = "text";
            setConfirmpassVisibile(ConfirmpassVisibile => !ConfirmpassVisibile)
        }
        else{
            confirmRef.current.type = "password";
            setConfirmpassVisibile(ConfirmpassVisibile => !ConfirmpassVisibile)
        }
        
    }
    const handlePassVisible = (e) => {
        if (e.target.classList.contains('visible') || e.target.parentNode.classList.contains('visible'))
        {
            passRef.current.type = "text";
            setpassVisibile(passVisibile => !passVisibile)
        }
        else{
            passRef.current.type = "password";
            setpassVisibile(passVisibile => !passVisibile)
        }
        
    }
    const PassVisibilty = passVisibile ? <VisibilityIcon className = {`${classes.Icon} visible`} onClick={(e) => handlePassVisible(e)}/> : <VisibilityOffIcon className = {`${classes.Icon}`} onClick={(e) => handlePassVisible(e)}/>
    const ConfirmVisibilty = ConfirmpassVisibile ? <VisibilityIcon className = {`${classes.Icon} visible`} onClick={(e) => handleConfirmPassVisible(e)}/> : <VisibilityOffIcon className = {`${classes.Icon}`} onClick={(e) => handleConfirmPassVisible(e)}/>
    return (
      <StyledEngineProvider injectFirst>
        <div id='partyJSParticles'></div>
        <Container>
            <form className='FormParent' onSubmit={e => handleSubmitSignUp(e)}>
                <h3>Sign Up</h3>
                <TextField
                className={classes.MuiFormControl}
                value={Email}
                onChange={e => handleEmailChange (e)}
                InputProps={{
                    className: classes.inputEmailField
                }}
                InputLabelProps={{
                    className: classes.cssLabel
                }}
                id="EmailID" 
                label="Email or Phone number" 
                variant="standard" />
                <span className={`errormsg ${emailError || UserNameError || passError || ConfirmpassError ? 'margbtm':null}`}>{emailError}</span>
                <TextField
                className={classes.MuiFormControl}
                value={UserName}
                onChange={e => handleUserNameChange (e)}
                InputProps={{
                    className: classes.inputUserNameField
                }}
                InputLabelProps={{
                    className: classes.cssLabel
                }}
                id="UserNameID" 
                label="User Name" 
                variant="standard" />
                <span className={`errormsg ${emailError || UserNameError || passError || ConfirmpassError ? 'margbtm':null}`}>{UserNameError}</span>
                <TextField
                className={classes.MuiFormControl}
                value={password}
                onChange={e => handlePassChange (e)}
                type="password"
                inputRef={passRef}
                InputProps={{
                    className: classes.inputPassField,
                    endAdornment: PassVisibilty
                }}
                InputLabelProps={{
                    className: classes.cssLabel
                }}
                id="PassID" 
                label="Password" 
                variant="standard" />
                <span className='errormsg'>{passError}</span>
                <TextField
                className={classes.MuiFormControl}
                value={Confirmpassword}
                onChange={e => handleConfirmPassChange (e)}
                type="password"
                inputRef={confirmRef}
                InputProps={{
                    className: classes.inputConfirmPassField,
                    endAdornment : ConfirmVisibilty
                }}
                InputLabelProps={{
                    className: classes.cssLabel
                }}
                id="ConfirmPassID" 
                label="Confirm Password" 
                variant="standard" />
                <span className='errormsg'>{ConfirmpassError}</span>
                <div className='buttonContainer'>
                    <Button variant="contained" type='submit' className={classes.Button}>Sign Up</Button>
                </div>
            </form>
        </Container>
      </StyledEngineProvider>
    );
}

export default SignUp;
