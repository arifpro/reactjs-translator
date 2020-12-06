import { useState } from 'react';

// components
import Field from './components/Field';

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <Field
        label='Enter English'
        onChange={setText}
        value={text}
      />
    </div>
  );
}

export default App;
