import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Testimonials } from  '../components/Testimonials';

export default {
  title: 'Components/Testimonials',
  component: Testimonials
} as Meta;

const Template: Story = (args) => <Testimonials {...args} />;

export const TestimonialsComponent = Template.bind({});
TestimonialsComponent.args = {};