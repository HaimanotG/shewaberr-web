import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Hero = () => {
    return (
        <div>
            <Typography className="text-lg font-montserrat">Let's make the best investments</Typography>
                <Typography className="font-montserrat font-bold text-7xl leading-snug">
                    A <span style={{color: '#ff7200'}}>BOOK</span><br />
                    CAN CHANGE<br />
                    <span style={{color: '#006252'}}>YOUR LIFE !</span>
                </Typography>
                <Typography className="font-montserrat text-lg">Read Listen Learn Repeat</Typography>
        </div>
    )
}