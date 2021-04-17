import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrFull } from 'components/Logo';
import { Button } from '@material-ui/core';

export const CheckoutNavbar = () => {
    return (
        <ThemeProvider theme={OrangeTheme}>
            <AppBar position="static" color="secondary">
                <Toolbar className="flex justify-between">
                    <ShewaberrFull fill="#fff"/>
                    <Typography variant="h6">
                        Checkout
                    </Typography>
                    <IconButton  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
        </ThemeProvider>
    )
}