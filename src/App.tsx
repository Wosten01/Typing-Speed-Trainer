import React, { useState, useEffect, useRef } from 'react';
import TypingTest from './components/TypingElem';

const words = ["example", "words", "for", "typing", "test"];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TypingTest />
    </div>
  );
};

export default App;