import React from 'react';
import { Story, Meta } from '@storybook/react';

import LandingPage from '../../pages/landing';

export default {
    title: 'Page/Landing',
    component: LandingPage
} as Meta;

const Template: Story = (args) => <LandingPage {...args} />;

export const Landing = Template.bind({});
