import React from 'react';
import { Story, Meta } from '@storybook/react';

import CommingSoonPage from '../../pages/index';

export default {
    title: 'Page/CommingSoon',
    component: CommingSoonPage
} as Meta;

const Template: Story = (args) => <CommingSoonPage {...args} />;

export const CommingSoon = Template.bind({});
CommingSoonPage.args = {

};