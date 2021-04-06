import React from 'react';
import { Story, Meta } from '@storybook/react';

import VerifyAccountPage from '../pages/verify_account';

export default {
    title: 'Page/VerifyAccountPage',
    component: VerifyAccountPage
} as Meta;

const Template: Story = (args) => <VerifyAccountPage {...args} />;

export const VerifyAccount = Template.bind({});
VerifyAccount.args = {

};