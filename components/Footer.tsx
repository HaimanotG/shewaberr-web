import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/styles';

import Link from 'next/link'

import { MineShaft } from 'theme/MineShaft';
import CustomerServiceIcon from 'components/CustomerServiceIcon';

export const Footer = () => {
  return (
    <ThemeProvider theme={MineShaft}>
			<div className="w-full flex flex-col items-center text-white p-10 mt-72" style={{background: '#262626'}}>
				<div className="flex flex-col items-center justify-center gap-0">
					<Typography variant="h5" className="font-bold">
						Customer Service
					</Typography>
					<IconButton aria-label="customer-service">
          	<CustomerServiceIcon />
						<Typography variant="h4" className="font-bold text-white ml-3">3245</Typography>
       		</IconButton>
				</div>
				<div className="inline-flex flex-row items-center justify-center m-10 gap-28">
					<div className="flex flex-col">
						<Typography variant="h6" className="font-bold">About Shewaberr</Typography>
						<Typography>Why Shewaberr?</Typography>
						<Typography>Testimonials</Typography>
					</div>
					<div className="flex flex-col">
						<Typography variant="subtitle1" className="font-bold">Help</Typography>
						<Typography>How to Buy?</Typography>
						<Link href="/faq">
							<Typography>FAQ</Typography>
						</Link>
					</div>
				</div>
				<Typography variant="h4" className="mt-10 font-bold">Shewaberr Techinologies PLC.</Typography>
				<Typography variant="subtitle1" align={"center"}>
					© Copyright 2021
				</Typography>
			</div>
    </ThemeProvider>
  )
}