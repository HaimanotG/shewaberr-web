import { createMuiTheme } from '@material-ui/core';

export const OrangeTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#FF6600',
			contrastText: '#fff'
		},
		secondary: {
			main: '#006252',
			contrastText: '#fff'
		}
	}
})