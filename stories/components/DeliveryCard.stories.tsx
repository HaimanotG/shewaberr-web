import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DeliveryCard } from  '../../components/DeliveryCard';

export default {
  title: 'Components/DeliveryCard',
  component: DeliveryCard
} as Meta; 

const Template: Story = (args) => <DeliveryCard {...args} />;

export const DeliveryCardComponent = Template.bind({});
DeliveryCardComponent.args = {};