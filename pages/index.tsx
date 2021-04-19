import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';

import Image from 'material-ui-image';

import { OrangeTheme } from 'theme/Orange';

export default () => {
    const [phoneNumber, openPhoneNumber] = useState(false);

    return (
        <ThemeProvider theme={OrangeTheme}>
            <div
                className="w-full h-full overflow-y-scroll fixed block top-0 left-0 "
                style={{
                    background: 'linear-gradient(rgba(29, 38, 113, 0.3), rgba(195, 55, 100, 0.3)), url("https://media-public.canva.com/MACWnG1UY2I/1/screen_2x.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
                >
                <Container maxWidth="xl" className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center lg:mt-44">
                    <div className="inline-flex flex-col justify-center items-center">
                        <Typography className="text-white lg:text-3xl font-extrabold lg:mb-32 lg:ml-56 hidden sm:block">Coming Really Soon...</Typography>
                        <img className="lg:ml-20 hidden lg:block md:block" src="https://i.ibb.co/BZQ0Nyp/Asset-80-4x.png" />
                        <img width="238" className="m-10 block md:hidden lg:hidden" src="https://i.ibb.co/Kx3mLhj/Asset-640-4x.png" />
                        <Typography className="text-white lg:text-2xl font-extrabold lg:mt-28 lg:ml-44">Orignal English Non-fiction Books</Typography>
                    </div>
                    <div
                        className="shadow-xl inline-flex flex-col p-12"
                        style={{
                            background: "#00a287",
                            borderRadius: "20px"
                        }}
                        >
                        <Typography className="text-white text-4xl font-bold text-center">Get a Notify When Live!</Typography>
                        <Typography className="text-white text-lg text-center mt-5">Give us your Phone/ Email & name <br/> to give you updates!!!</Typography>
                        <form noValidate autoComplete="off" className="flex flex-col mt-10 gap-10">
                            <TextField className="bg-white rounded" label="First Name" variant="outlined" />
                            <TextField className="bg-white rounded" label="Phone or email" variant="outlined" />
                            <Button
                                className="text-white font-bold px-5"
                                style={{
                                    background: "#363636"
                                }}
                                size="large"
                                disableElevation
                                fullWidth={true}>Notify Me When Live</Button>
                        </form>
                    </div>
                </Container>
                <div
                    className="hidden md:block"
                    style={{
                        position: "fixed",
                        bottom: "65px",
                        right: "80px"
                    }}
                    >
                    <Fab
                        className=""
                        size="small"
                        variant="extended"
                        style={{
                            background: "#fff"
                        }}
                        onMouseOver={() => openPhoneNumber(true)}
                        onMouseOut={() => openPhoneNumber(false)}
                        >
                        <PhoneIcon />
                        {phoneNumber&& <span className="font-bold">+251999999999</span>}
                    </Fab>
                    <Fab
                        size="small"
                        className="mx-5"
                        style={{
                            background: "#0088cc"
                        }}
                        >
                        <TelegramIcon style={{color: "#fff"}} />
                    </Fab>
                </div>
            </div>
            
        </ThemeProvider>
    )
}