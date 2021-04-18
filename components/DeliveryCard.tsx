import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FedexLogo from 'components/Logo/Fedex';

export const FedexDeliveryCard = () => {
    return (
        <Paper className="p-5 inline-flex flex-row gap-8 items-center rounded-md shadow-lg">
            <FedexLogo width="80" height="80"/>
            <div className="flex flex-col gap-1">
                <Typography className="text-lg text-gray-900 font-bold">Fedex Fast Delivery</Typography>
                <Typography className="text-xs text-gray-400">Expected Delivery:</Typography>
                <Typography className="text-xs text-gray-400">Friday, 28</Typography>
            </div>
            <Typography className="text-sm font-semibold text-gray-900">Birr 75.55</Typography>
        </Paper>
    )
}