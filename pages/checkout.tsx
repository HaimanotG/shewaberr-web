import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrMini } from 'components/Logo';
import { CheckoutNavbar } from 'components/CheckoutNavbar';
import { Footer } from 'components/Footer';

export default () => {
    return (
        <ThemeProvider theme={OrangeTheme}>
            <div className="flex flex-col h-screen justify-between">
            <CheckoutNavbar />
            <main className="flex">
                <div>
                    
                </div>
                
            </main>
            <Footer />
            </div>
        </ThemeProvider>
    )
}