import { useState } from 'react';

// components
import Field from './components/Field';
import Languages from './components/Languages';

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('bn');

  return (
    <div>
      <Field
        label='Enter English'
        onChange={setText}
        value={text}
      />
      <Languages
        language={language}
        onLanguageChange={setLanguage}
      />
    </div>
  );
}

export default App;
