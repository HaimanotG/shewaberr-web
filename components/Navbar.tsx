import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrFull } from 'components/Logo';
import { Button } from '@material-ui/core';

export const Navbar = () => {
  return (
		<ThemeProvider theme={OrangeTheme}>
			<AppBar position="static" className="fixed" style={{background: 'linear-gradient(90deg, #FF6600 0%, #FF9800 100%)'}}>
				<Toolbar>
					<ShewaberrFull fill="#fff" />
					<InputBase
            placeholder="Search Books"
            className="bg-white ml-28 rounded-tl rounded-bl px-6 py-1 w-3/5"
            inputProps={{ 'aria-label': 'search' }}
          />
        		<Button
					type="submit" 
					className="h-10 rounded-tr rounded-br"
					style={{borderRadius: '0'}}
					variant="contained"
					color="secondary"
					disableElevation
					size="small"
					aria-label="search">
					<SearchIcon />
				</Button>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
  )
}