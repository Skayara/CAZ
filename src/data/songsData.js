// Song data structure for chord transposition and search functionality
export const songsData = [
  {
    id: 1,
    title: "TAN SÓLO HE VENIDO",
    category: "himno",
    key: "SOL",
    lyrics: `SOL        RE     DOadd9   SOL RE    DO
No he venido a pedirte como suelo,

RE    DOadd9    mim7      RE
si antes de yo clamarte conoces mi petición

SOL    RE   DOadd9    SOL RE   DO
Solo quiero escucharte pon el lema,

SOL     RE    DOadd9   mim7      RE
caminar de tu mano y decirte una canción

SOL      RE        mi
TAN SÓLO HE VENIDO A ESTAR CONTIGO

RE    DO         lam         RE
A SER TU AMIGO A COMPARTIR CON MI DIOS,

SOL        RE     mi      RE      DO
ADORARTE Y DARTE GRACIAS POR SIEMPRE SIN PREGUNTAR NADA

lam        RE      SOL
POR LO QUE HAS HECHO, CONMIGO A ORAR

SOL      RE     DOadd9  SOL RE  DO
2 Cuéntame de tus obras que hay de nuevo

RE     DOadd9  mim7 RE   DO
Y de paso pregunto ¿qué puedo hacer yo?

SOL     RE     DOadd9    SOL RE  DO
Y yo, solo quiero abrazarte bendecirte mi Dios

SOL    RE    DOadd9  mim7     RE
caminar por las calles y abrirte mi corazón`,
    chords: ["SOL", "RE", "DOadd9", "mim7", "DO", "mi", "lam"]
  },
  {
    id: 2,
    title: "COMO LLUVIA",
    category: "adoracion",
    key: "DO",
    lyrics: `DO      FA     SOL     DO
Como lluvia en el desierto

FA       SOL      lam
Así es tu amor en mi

DO      FA     SOL     DO
Como río en tierra seca

FA       SOL      DO
Así eres tú para mí`,
    chords: ["DO", "FA", "SOL", "lam"]
  },
  {
    id: 3,
    title: "DIGNO ES EL CORDERO",
    category: "alabanza",
    key: "LA",
    lyrics: `LA        MI      RE        LA
Digno es el Cordero que fue inmolado

MI        RE        LA
De recibir el poder

LA        MI      RE        LA
Y las riquezas y la sabiduría

MI        RE        LA
Y la fortaleza y honor`,
    chords: ["LA", "MI", "RE"]
  },
  {
    id: 4,
    title: "BENDITO SEA EL SEÑOR",
    category: "alabanza",
    key: "RE",
    lyrics: `RE        LA        SOL      RE
Bendito sea el Señor Dios de Israel

LA        SOL        RE
Que vive y reina con poder

RE        LA        SOL      RE
Bendito sea por siempre su nombre

LA        SOL        RE
Su gloria llene toda la tierra`,
    chords: ["RE", "LA", "SOL"]
  },
  {
    id: 5,
    title: "SANTO ESPÍRITU VEN",
    category: "adoracion",
    key: "SOL",
    lyrics: `SOL       RE        mim      DOadd9
Santo Espíritu ven, llena este lugar

SOL       RE        DOadd9
Santo Espíritu ven, como tú sabes llegar

SOL       RE        mim      DOadd9
Muévete en mí, transforma mi ser

SOL       RE        DOadd9     SOL
Santo Espíritu ven, Santo Espíritu ven`,
    chords: ["SOL", "RE", "mim", "DOadd9"]
  },
  {
    id: 6,
    title: "JEHOVÁ ES MI PASTOR",
    category: "himno",
    key: "MI",
    lyrics: `MI        SI        DO#m     LA
Jehová es mi pastor, nada me faltará

MI        SI        LA
En lugares de delicados pastos

MI        SI        DO#m     LA
me hará descansar, junto a aguas de reposo

MI        SI        LA        MI
me pastoreará, mi alma restaurará`,
    chords: ["MI", "SI", "DO#m", "LA"]
  }
];

export const songCategories = [
  { key: 'all', label: 'Todas', count: 0 },
  { key: 'himno', label: 'Himnos', count: 0 },
  { key: 'adoracion', label: 'Adoración', count: 0 },
  { key: 'alabanza', label: 'Alabanza', count: 0 },
  { key: 'communion', label: 'Comunión', count: 0 },
  { key: 'navidad', label: 'Navidad', count: 0 },
  { key: 'pascua', label: 'Pascua', count: 0 }
];

// Chord transposition mappings
// Simple chromatic scale
export const chromaticScale = [
  'DO', 'DO#', 'RE', 'RE#', 'MI', 'FA', 'FA#', 'SOL', 'SOL#', 'LA', 'LA#', 'SI'
];

// All possible chord mappings
export const chordMapping = {
  // Major chords
  'DO': 0, 'DO#': 1, 'RE': 2, 'RE#': 3, 'MI': 4, 'FA': 5, 'FA#': 6, 'SOL': 7, 'SOL#': 8, 'LA': 9, 'LA#': 10, 'SI': 11,
  // Minor lowercase
  'do': 0, 'do#': 1, 're': 2, 're#': 3, 'mi': 4, 'fa': 5, 'fa#': 6, 'sol': 7, 'sol#': 8, 'la': 9, 'la#': 10, 'si': 11,
  // Minor with m
  'dom': 0, 'do#m': 1, 'rem': 2, 're#m': 3, 'mim': 4, 'fam': 5, 'fa#m': 6, 'solm': 7, 'sol#m': 8, 'lam': 9, 'la#m': 10, 'sim': 11,
  // 7th chords
  'DO7': 0, 'DO#7': 1, 'RE7': 2, 'RE#7': 3, 'MI7': 4, 'FA7': 5, 'FA#7': 6, 'SOL7': 7, 'SOL#7': 8, 'LA7': 9, 'LA#7': 10, 'SI7': 11,
  'dom7': 0, 'do#m7': 1, 'rem7': 2, 're#m7': 3, 'mim7': 4, 'fam7': 5, 'fa#m7': 6, 'solm7': 7, 'sol#m7': 8, 'lam7': 9, 'la#m7': 10, 'sim7': 11,
  // Add9 chords
  'DOadd9': 0, 'DO#add9': 1, 'REadd9': 2, 'RE#add9': 3, 'MIadd9': 4, 'FAadd9': 5, 'FA#add9': 6, 'SOLadd9': 7, 'SOL#add9': 8, 'LAadd9': 9, 'LA#add9': 10, 'SIadd9': 11
};

// Simple and direct chord transposition
export const transposeChord = (chord, semitones) => {
  if (semitones === 0 || !chord.trim()) return chord;
  
  // Direct lookup first
  if (chordMapping.hasOwnProperty(chord)) {
    const currentIndex = chordMapping[chord];
    let newIndex = (currentIndex + semitones) % 12;
    if (newIndex < 0) newIndex += 12;
    
    const newRoot = chromaticScale[newIndex];
    
    // Preserve the original format
    if (chord === chord.toLowerCase()) {
      return newRoot.toLowerCase();
    } else if (chord.endsWith('m7')) {
      return newRoot + 'm7';
    } else if (chord.endsWith('m')) {
      return newRoot + 'm';
    } else if (chord.endsWith('7')) {
      return newRoot + '7';
    } else if (chord.endsWith('add9')) {
      return newRoot + 'add9';
    } else {
      return newRoot;
    }
  }
  
  // Fallback: try to extract root and suffix
  const match = chord.match(/^([A-Z][#b]?|[a-z][#b]?)(.*)$/);
  if (match) {
    const root = match[1];
    const suffix = match[2];
    
    if (chordMapping.hasOwnProperty(root)) {
      const currentIndex = chordMapping[root];
      let newIndex = (currentIndex + semitones) % 12;
      if (newIndex < 0) newIndex += 12;
      
      const newRoot = chromaticScale[newIndex];
      
      if (root === root.toLowerCase()) {
        return newRoot.toLowerCase() + suffix;
      } else {
        return newRoot + suffix;
      }
    }
  }
  
  return chord; // Return original if cannot transpose
};

// Helper function to transpose just the root note
const transposeRoot = (root, semitones) => {
  const currentIndex = chordMapping[root];
  if (currentIndex === undefined) return root;
  
  let newIndex = (currentIndex + semitones) % 12;
  if (newIndex < 0) newIndex += 12;
  
  const newRoot = chromaticScale[newIndex];
  
  // Preserve case
  if (root === root.toLowerCase()) {
    return newRoot.toLowerCase();
  }
  return newRoot;
};

// Simple lyrics transposition
export const transposeLyrics = (lyrics, semitones) => {
  if (semitones === 0) return lyrics;
  
  console.log(`Transposing by ${semitones} semitones`);
  console.log(`Original: ${lyrics.substring(0, 50)}...`);
  
  // Simple regex to find chord-like words
  const chordRegex = /\b(DO|RE|MI|FA|SOL|LA|SI|do|re|mi|fa|sol|la|si)[#b]?(add\d+|sus\d+|maj\d+|m\d*|dim|\d+)?\b/g;
  
  const result = lyrics.replace(chordRegex, (match) => {
    const transposed = transposeChord(match, semitones);
    console.log(`${match} -> ${transposed}`);
    return transposed;
  });
  
  console.log(`Result: ${result.substring(0, 50)}...`);
  return result;
};