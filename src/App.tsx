import { useState } from 'react'
import { ZText } from './ui-framework/generic/Text'
import { ZButton } from './ui-framework/material-ui/Button'
import { MyTextComponent} from './Native-react';

function App() {
  // const [count, setCount] = useState(0)
  const [curName, setCurName] = useState('');

  return (
    <>
      <div style={
        {
          position: 'absolute', height: '550px', width: '100%', top: 0,
          display: 'block', backgroundColor: 'cyan'
        }}>
        <ZText value={curName} onChange={(event) => { setCurName(event.target.value) }}></ZText>
        <ZButton ></ZButton>
        CurName::::{curName}ß
      </div>

    </>
  )
}

export default App
