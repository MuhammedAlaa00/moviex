import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FixData from '../../fixturesJsonData/faqs.json';
import { makeStyles } from '@material-ui/core/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import {useState} from 'react';
import {TitleContainer, Title} from '../../components/Fixtures/styles/fixtures-style'
function FixturesContainer() {
    /* 
        - add the usestyles 
        - remove style from expanded {}
        - add new style to the root :{
            "&$expanded" : {
                margin:"0"
            }
        }
        - add all the classes in the element 
        classes = {{expanded : classes.expand , root: classes.root}}
        - add styledEngineProvider from '@mui/material/styles';
        - add attr injectedFirst in ProviderTag
    */
    const useStyles = makeStyles((theme) => ({
        expanded: {},
        root: {
            width: '90%',
            margin: 'auto',
            '&$expanded': {
                margin: 'auto',
                marginBottom: theme.spacing(0),
            },
            [theme.breakpoints.up('lg')] : {
                width: '50%',
            }
        },
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event , isExpanded) => {
        console.log(panel);
        console.log(isExpanded);
        setExpanded(isExpanded ? panel : false);
    };
    const fixData = FixData.map(item => (
        <Accordion  
        expanded = {expanded === item.id} 
        key={item.id} 
        onChange={handleChange(item.id)}
        classes={{expanded: classes.expanded , root: classes.root}}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id={item.id}>
                <Typography sx={{ width: '33%'}}>
                    {item.header}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.body}
                </Typography>
            </AccordionDetails>
        </Accordion>
    ))
    return (
        <StyledEngineProvider injectFirst>
            <TitleContainer>
                <Title>Frequently Asked Questions</Title>       
            </TitleContainer>          
            {fixData}
        </StyledEngineProvider>
    )
}
export default FixturesContainer
