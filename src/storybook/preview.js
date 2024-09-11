import { withActions } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';

export const decorators = [withActions, withLinks];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
