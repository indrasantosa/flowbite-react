import { Meta, Story } from '@storybook/react/types-6-0';

import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: '02. Components/FormControls',
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const DefaultToggleSwitch = Template.bind({});
DefaultToggleSwitch.storyName = 'ToggleSwitch';
DefaultToggleSwitch.args = {};
