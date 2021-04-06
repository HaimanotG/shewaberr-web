import React from 'react';
import { Story, Meta } from '@storybook/react';

import SigninPage from '../pages/sign_in';

export default {
    title: 'Page/SigninPage',
    component: SigninPage
} as Meta;

const Template: Story = (args) => <SigninPage {...args} />;

export const Signin = Template.bind({});
Signin.args = {

};