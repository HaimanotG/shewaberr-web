import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FedexDeliveryCard } from  '../../components/DeliveryCard';

export default {
  title: 'Components/DeliveryCard',
  component: FedexDeliveryCard
} as Meta; 

const Template: Story = (args) => <FedexDeliveryCard {...args} />;

export const DeliveryCardComponent = Template.bind({});
DeliveryCardComponent.args = {};