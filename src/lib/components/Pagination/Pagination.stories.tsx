import { Meta, Story } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from '.';

export default {
  title: '02. Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const DefaultProgress = Template.bind({});
DefaultProgress.storyName = 'Default';
