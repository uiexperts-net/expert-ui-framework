// storybook/manager.js
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'TransferListApp',
});

addons.setConfig({
  theme,
});
