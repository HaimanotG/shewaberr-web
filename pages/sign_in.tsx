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
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { OrangeTheme } from 'theme/Orange';
import { ShewaberrMini } from 'components/Logo';

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
				<div className="flex flex-col items-center mb-10 gap-10">
					<ShewaberrMini height="100" width="100"/>
					<Typography variant="h4">Creating Account</Typography>
				</div>
				<form className="flex flex-col">
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
					<div className="m-10 flex items-center justify-center">
						<Button
							className="w-full h-12"
							variant="contained"
							color="primary"
							size="large"
							disableElevation
							>
							Create Account
						</Button>
					</div>
				</form>
			</Container>
		</ThemeProvider>
	)
}