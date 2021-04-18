import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Hero } from  '../../components/Hero';

export default {
  title: 'Components/Hero',
  component: Hero
} as Meta;

const Template: Story = (args) => <Hero {...args} />;

export const HeroComponent = Template.bind({});
//DeliveryComponent.args = {};