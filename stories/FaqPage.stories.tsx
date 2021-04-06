import React from 'react';
import { Story, Meta } from '@storybook/react';

import FaqPage from  '../pages/faq';

export default {
  title: 'Page/FaqPage',
  component: FaqPage
} as Meta;

const Template: Story = (args) => <FaqPage {...args} />;

export const Faq = Template.bind({});
Faq.args = {};