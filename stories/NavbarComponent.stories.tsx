import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Navbar } from  '../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const NavbarComponent = Template.bind({});
NavbarComponent.args = {};