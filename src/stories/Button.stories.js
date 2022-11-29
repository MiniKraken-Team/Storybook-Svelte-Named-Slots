import ButtonMigrationSvelte from './Button-Migration.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Button',
  component: ButtonMigrationSvelte,
  argTypes: {
    backgroundColor: { control: 'color' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    defaultSlot: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    primary: true,
    defaultSlot: 'Button',
    prefix: '',
    suffix: '',
  }
};

export const Base = {}

export const Prefix = {
  ...Base,
  args: {
    prefix: 'prefix',
  },
}

export const Suffix = {
  ...Base,
  args: {
    suffix: 'suffix',
  },
}

export const AllSlots = {
  ...Base,
  args: {
    defaultSlot: 'Button',
    prefix: 'prefix',
    suffix: 'suffix',
  },
}
