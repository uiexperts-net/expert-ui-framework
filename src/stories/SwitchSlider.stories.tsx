// src/stories/SwitchSlider.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SwitchSlider from '../components/SwitchSlider';

storiesOf('SwitchSlider', module)
  .add('default', () => <SwitchSlider label="Default Switch" initial={false} />)
  .add('enabled', () => <SwitchSlider label="Enabled Switch" initial={true} />);
