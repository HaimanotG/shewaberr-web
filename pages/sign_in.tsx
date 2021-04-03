import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { OrangeTheme } from 'theme/Orange';

export default () => {
	const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

	const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

	const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

	return (
		<ThemeProvider theme={OrangeTheme}>
			<Container maxWidth="xs">
				<form>
					<TextField
						size="small"
						margin="normal"
						label="Phone Number"
						variant="outlined"
						InputLabelProps={{ shrink: true }}
						fullWidth
					/>
					<FormControl
						variant="outlined"
						size="small"
						margin="normal"
						fullWidth
						>
							<InputLabel htmlFor="outlined-adornment-password" shrink={true}>Password</InputLabel>
							<OutlinedInput
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={70}
							/>
					</FormControl>
				</form>
			</Container>
		</ThemeProvider>
	)
}