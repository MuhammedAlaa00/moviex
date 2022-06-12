import React, {useState, useRef} from 'react';
import {Container} from './style/SignIn-style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/router';
import FacebookImage from '../../images/FB-f-Logo__blue_57.png';
import {auth , provider, firebase} from '../../lib/firebase.prod';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './style/style.scss';
function SignIn() {
    const Navigate = useNavigate()
    const LearnMore = useRef()
    const passRef = useRef()
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [emailError, setemailError] = useState("");
    const [passError, setpassError] = useState("");
    const [passVisibile, setpassVisibile] = useState(true);
    const [displayLearnMore, setdisplayLearnMore] = useState(false);
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
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Email === ""){
            setemailError("Please enter a valid email or phone number.");
        }
        if(password === ""){
            setpassError("Your password must contain between 4 and 60 characters.");
        }
        if(Email.length < 7){
            setemailError("Please enter a valid email or phone number.");
            return false;
        }
        if(password.length < 6){
            setpassError("Your password must contain between 4 and 60 characters.");
            return false;
        }
        if(Email !== ""){
            setemailError("")
        }
        if(password !== ""){
            setpassError("")
        }
        if(Email !== "" && password !== ""){
            auth.signInWithEmailAndPassword(Email,password).then(()=>{
                Navigate(ROUTES.BROWSE)
            })
            .catch(error => {
                console.log(error);
            })
            setEmail("");
            setpassword("")
        }
    }
    const handleEmailChange = (e) => {
        setEmail (e.target.value);
        if(Email.length >= 4)
        {   
            setemailError("");
        }
    }
    const handlePassChange = (e) => {
        setpassword(e.target.value)
        if(password.length >= 6)
        {
            setpassError("");
        }
    }
    const handleLearnMore = (e) => {
        e.preventDefault()
        setdisplayLearnMore(!displayLearnMore);
    };
    const handleSignIn = async (e) => {
        e.preventDefault();
        auth.signOut()
        await auth.signInWithPopup(provider)
        .then((res)=> {
            firebase.firestore().collection("users").doc(res.user.uid).set({
                id:res.user.uid,
                email:res.user.email,
                userName: res.user.displayName
            })
            Navigate(ROUTES.BROWSE)
        })
        .catch(err => console.log(err))
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
    return (
        <StyledEngineProvider injectFirst>
            <Container>
                <form className='FormParent' onSubmit={e => handleSubmit(e)}>
                    <h3>Sign In</h3>
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
                    <span className={`errormsg ${emailError || passError ? 'margbtm':null}`}>{emailError}</span>
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
                    <div className='buttonContainer'>
                        <Button variant="contained" type='submit' className={classes.Button}>Sign In</Button>
                        <div className='infoContainer'>
                            <div className='leftInfoContainer'>
                                <Checkbox  className={classes.Checkbox}/>
                                <span>Remember me</span>
                            </div>
                            <div className='rightInfoContainer'>
                                <Link to={ROUTES.HOME} className="helpPageLink">need help ?</Link>
                            </div>
                        </div>
                    </div>
                    <div className='authAndSignupLinks'>
                        <div className='FacebookAuth'>
                            <a href='#' onClick={(e) => handleSignIn(e)}>
                                <img src={FacebookImage} alt="fb"/>
                                <span>Login with Facebook</span>
                            </a>
                        </div>
                        <div className='SignUpContainer'>
                            <span>New to Movie X ?</span>
                            <Link to={ROUTES.SIGN_UP}>Sign Up Now</Link>
                        </div>
                        <div className='LearnmoreContainer'>
                            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            <a href='#' onClick={e => handleLearnMore(e)}>
                                learn more
                            </a>
                            <p ref={LearnMore} className={`${displayLearnMore ? 'displayView': 'displayHidden'} infoMore`}>
                                The information collected by Google reCAPTCHA is subject to the Google <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>, 
                                and is used for providing, maintaining, 
                                and improving the reCAPTCHA service and for general security purposes 
                                (it is not used for personalized advertising by Google).
                            </p>
                        </div>
                    </div>
                </form>
            </Container>
        </StyledEngineProvider>
    );
}

export default SignIn;
