import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { FedexDeliveryCard } from 'components/DeliveryCard';

export const Delivery = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className="flex flex-col gap-6 ">
            <div>
                <Typography variant="h5">Delivery</Typography>
            </div>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className="inline-grid grid-cols-2 gap-y-20 gap-x-0 ml-5">
                    <FormControlLabel value="female" control={<Radio />} label={<FedexDeliveryCard />} />
                    <FormControlLabel value="male" control={<Radio />} label={<FedexDeliveryCard />} />
                    <FormControlLabel value="other" control={<Radio />} label={<FedexDeliveryCard />} />
                    <FormControlLabel value="a" control={<Radio />} label={<FedexDeliveryCard />} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}