import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Product } from  '../components/Product';

export default {
  title: 'Components/Product',
  component: Product
} as Meta;

const Template: Story = (args) => <Product {...args} />;

export const ProductComponent = Template.bind({});
ProductComponent.args = {};