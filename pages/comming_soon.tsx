import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrFull, ShewaberrMini } from 'components/Logo';

export default () => {
    return (
        <ThemeProvider theme={OrangeTheme}>
            <div className="w-full h-full fixed block top-0 left-0 opacity-75 z-50" style={{background: 'linear-gradient(90deg, #FF6600 0%, #FF9800 100%)'}}>
                <Container maxWidth="lg">
                    <div className="flex flex-col items-center mb-10 mt-72 gap-10">
                        <ShewaberrFull fill="#fff" height="100px"/>
                        <Typography variant="h1" className="text-white font-bold tracking-wide">
                            Coming&nbsp;
                            <span className="shadow-sm rounded-full px-8 py-1" style={{background: '#006252'}}>Soon!</span>
                        </Typography>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    )
}