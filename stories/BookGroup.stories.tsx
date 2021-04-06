import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BookGroup } from  '../components/BooksGroup';

export default {
  title: 'Components/BooksGroup',
  component: BookGroup
} as Meta;

const Template: Story = (args) => <BookGroup {...args} />;

export const BooksGroupComponent = Template.bind({});
BooksGroupComponent.args = {};