import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CheckoutNavbar } from  '../../components/CheckoutNavbar';

export default {
  title: 'Components/CheckoutNavbar',
  component: CheckoutNavbar
} as Meta;

const Template: Story = (args) => <CheckoutNavbar {...args} />;

export const CheckoutNavbarComponent = Template.bind({});
CheckoutNavbarComponent.args = {};