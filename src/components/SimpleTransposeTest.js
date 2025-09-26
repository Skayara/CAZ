import React, { useState } from 'react';
import { transposeChord, transposeLyrics } from '../data/songsData';

const SimpleTransposeTest = () => {
  const [semitones, setSemitones] = useState(0);
  
  const testChord = 'SOL';
  const testLyrics = 'SOL RE DOadd9 mim7';
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', backgroundColor: '#f9f9f9' }}>
      <h3>Test Simple de Transposición</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setSemitones(s => s - 1)}>-</button>
        <span style={{ margin: '0 10px' }}>Semitonos: {semitones}</span>
        <button onClick={() => setSemitones(s => s + 1)}>+</button>
        <button onClick={() => setSemitones(0)} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Acorde individual:</strong><br/>
        {testChord} → <strong style={{ color: 'blue' }}>{transposeChord(testChord, semitones)}</strong>
      </div>
      
      <div>
        <strong>Letras:</strong><br/>
        Original: {testLyrics}<br/>
        Transpuesto: <strong style={{ color: 'blue' }}>{transposeLyrics(testLyrics, semitones)}</strong>
      </div>
    </div>
  );
};

export default SimpleTransposeTest;