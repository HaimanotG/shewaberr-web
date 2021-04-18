import React from 'react';
import { Story, Meta } from '@storybook/react';

import CheckoutPage from '../../pages/checkout';

export default {
    title: 'Page/CheckoutPage',
    component: CheckoutPage
} as Meta;

const Template: Story = (args) => <CheckoutPage {...args} />;

export const Checkout = Template.bind({});
Checkout.args = {

};