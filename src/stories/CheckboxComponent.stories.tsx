import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CheckboxComponent from '.src/components/CheckboxComponent';
import { action } from '@storybook/addon-actions';

storiesOf('CheckboxComponent', module)
  .add('Default', () => <CheckboxExample />)
  .add('Checked Option 1', () => {
    const [checked1, setChecked1] = useState<boolean>(true);
    const [checked2, setChecked2] = useState<boolean>(false);
    const [checked3, setChecked3] = useState<boolean>(false);

    return (
      <View style={styles.container}>
        <CheckboxExample />
      </View>
    );
  })
  .add('All Checked', () => {
    const [checked1, setChecked1] = useState<boolean>(true);
    const [checked2, setChecked2] = useState<boolean>(true);
    const [checked3, setChecked3] = useState<boolean>(true);
});
