import React, { useState } from 'react';
import { transposeChord, transposeLyrics } from '../data/songsData';

const TranspositionTest = () => {
  const [semitones, setSemitones] = useState(0);
  
  const testChords = ['SOL', 'RE', 'DOadd9', 'mim7', 'lam', 'mi'];
  const testLyrics = `SOL        RE     DOadd9   SOL RE    DO
No he venido a pedirte          como suelo,
Señor       RE    DOadd9    mim7      RE
si antes de yo clamarte    conoces mi
petición`;

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Test de Transposición</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSemitones(s => s - 1)}>-1 Semitono</button>
        <span style={{ margin: '0 20px' }}>Semitonos: {semitones}</span>
        <button onClick={() => setSemitones(s => s + 1)}>+1 Semitono</button>
        <button onClick={() => setSemitones(0)} style={{ marginLeft: '20px' }}>Reset</button>
      </div>

      <h3>Acordes individuales:</h3>
      <div style={{ marginBottom: '20px' }}>
        {testChords.map(chord => (
          <div key={chord} style={{ margin: '5px 0' }}>
            <strong>{chord}</strong> → <strong>{transposeChord(chord, semitones)}</strong>
          </div>
        ))}
      </div>

      <h3>Letras completas:</h3>
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <pre>{transposeLyrics(testLyrics, semitones)}</pre>
      </div>
      
      <h3>Original:</h3>
      <div style={{ backgroundColor: '#e5e5e5', padding: '15px', borderRadius: '5px' }}>
        <pre>{testLyrics}</pre>
      </div>
    </div>
  );
};

export default TranspositionTest;