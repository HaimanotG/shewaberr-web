import React from 'react';
import { Story, Meta } from '@storybook/react';

import { OrderList } from  '../../components/OrderList';

export default {
  title: 'Components/Orderlist',
  component: OrderList
} as Meta;

const Template: Story = (args) => <OrderList {...args} />;

export const OrderListComponent = Template.bind({});