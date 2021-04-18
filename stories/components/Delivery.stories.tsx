import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Delivery } from  '../../components/Delivery';

export default {
  title: 'Components/Delivery',
  component: Delivery
} as Meta;

const Template: Story = (args) => <Delivery {...args} />;

export const DeliveryComponent = Template.bind({});
DeliveryComponent.args = {};