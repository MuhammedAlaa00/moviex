import React from 'react'
import Footer from '../../components/Footer/Footer';
import Grid from '@mui/material/Grid';
function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Question? Contact Us.</Footer.Title>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item lg={3} md={6} xs={12}>
                    <Footer.Column>
                        <Footer.Link href="#">Faq</Footer.Link>
                        <Footer.Link href="#">Investor Relatioship</Footer.Link>
                        <Footer.Link href="#">Ways To Watch</Footer.Link>    
                        <Footer.Link href="#">Coporate Information</Footer.Link>
                        <Footer.Link href="#">Movie X Original</Footer.Link>
                    </Footer.Column>
                </Grid>
                <Grid item lg={3} md={6} xs={12} >
                    <Footer.Column>
                        <Footer.Link href="#">Help Centre</Footer.Link>
                        <Footer.Link href="#">Jobs</Footer.Link>
                        <Footer.Link href="#">Terms of Use</Footer.Link>    
                        <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.Column>                
                </Grid>
                <Grid item lg={3} md={6} xs={12} >
                    <Footer.Column>
                        <Footer.Link href="#">Account</Footer.Link>
                        <Footer.Link href="#">Redeem Gift Card</Footer.Link>
                        <Footer.Link href="#">Privacy</Footer.Link>    
                        <Footer.Link href="#">Speed Test</Footer.Link>
                    </Footer.Column>                
                </Grid>
                <Grid item lg={3} md={6} xs={12} >
                    <Footer.Column>
                        <Footer.Link href="#">Media Centre</Footer.Link>
                        <Footer.Link href="#">Buy Gift Card</Footer.Link>
                        <Footer.Link href="#">Cookie Preferences</Footer.Link>    
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>                
                </Grid>
            </Grid>
            <Footer.Break></Footer.Break>
            <Footer.Text>Movie X Egypt Version</Footer.Text>
        </Footer>
    )
}

export default FooterContainer
