import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { BackToTop, StyledProvider, CookiesBanner } from 'components-extra';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrMini } from 'components/Logo';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';

export default () => {
    return (
        <ThemeProvider theme={OrangeTheme}>
            <div className="flex flex-col h-screen justify-between">
                <Navbar />
                <main>
                    
                    <div className=" static">
                        <StyledProvider>
                            <BackToTop />
                            <CookiesBanner className="fixed bottom-0 left-0 w-screen" text='Please be aware that this awesome cookies banner informs you that this awesome website uses cookies. Why ? Because cookies are an awesome delight of course!'>
                            <CookiesBanner.Button href="#">More</CookiesBanner.Button>
                            <CookiesBanner.Button onClick={() => console.log('Got-it-button clicked!')}>
                                Ok
                            </CookiesBanner.Button>
                            </CookiesBanner>
                        </StyledProvider>
                    </div>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}