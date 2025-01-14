import { Meta, Story } from '@storybook/react/types-6-0';

import { DarkThemeToggle } from '.';

export default {
  title: '02. Components/DarkThemeToggle',
  component: DarkThemeToggle,
} as Meta;

const Template: Story = (args) => <DarkThemeToggle {...args} />;

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = 'Default';
DefaultDarkThemeToggle.args = {};
