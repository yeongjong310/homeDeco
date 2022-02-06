import { DecoViewer } from 'components';
import { Contents } from 'page';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Contents>
        <DecoViewer />
      </Contents>
    </div>
  );
}

export default App;
