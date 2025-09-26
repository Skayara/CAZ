// Test script to verify chord transposition
import { transposeChord, transposeLyrics } from './src/data/songsData.js';

// Test cases
console.log('Testing chord transposition:');

// Test basic major chords
console.log('SOL +1 semitone:', transposeChord('SOL', 1)); // Should be SOL#
console.log('SOL +2 semitones:', transposeChord('SOL', 2)); // Should be LA
console.log('SOL -1 semitone:', transposeChord('SOL', -1)); // Should be FA#

// Test minor chords
console.log('mim +1 semitone:', transposeChord('mim', 1)); // Should be fa
console.log('lam +2 semitones:', transposeChord('lam', 2)); // Should be sim

// Test complex chords
console.log('DOadd9 +1 semitone:', transposeChord('DOadd9', 1)); // Should be DO#add9
console.log('mim7 +3 semitones:', transposeChord('mim7', 3)); // Should be soL7

// Test lyrics transposition
const testLyrics = `SOL        RE     DOadd9
Test lyrics with chords
mim7      lam     FA`;

console.log('\nOriginal lyrics:');
console.log(testLyrics);

console.log('\nTransposed +2 semitones:');
console.log(transposeLyrics(testLyrics, 2));