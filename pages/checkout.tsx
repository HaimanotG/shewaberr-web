import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrMini } from 'components/Logo';
import { CheckoutNavbar } from 'components/CheckoutNavbar';
import { Footer } from 'components/Footer';

export default () => {
    return (
        <ThemeProvider theme={OrangeTheme}>
            <div className="flex flex-col h-screen justify-between">
            <CheckoutNavbar />
            <main>
                body
            </main>
            <Footer />
            </div>
        </ThemeProvider>
    )
}