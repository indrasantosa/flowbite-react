import { Meta, Story } from '@storybook/react/types-6-0';

import { Tooltip, TooltipProps } from '.';
import { Button } from '../Button';

export default {
  title: '02. Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const DefaultTooltip = Template.bind({});
DefaultTooltip.storyName = 'Default';
DefaultTooltip.args = {
  content: 'Tooltip content',
  placement: 'bottom',
  children: <Button>Default tooltip</Button>,
};
