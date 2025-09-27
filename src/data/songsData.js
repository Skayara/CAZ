// Song data structure for chord transposition and search functionality
export const songsData = [
  {
    id: 1,
    title: "ENCIENDEME",
    category: "entrada",
    key: "MI",
    lyrics: `MI                 LA
Hoy quiero, Señor, ponerlo todo en tu presencia,
DO#m                 SI
Darme hasta gastarme contigo y por Ti.
MI                 LA
Hoy quiero, Señor, ponerlo todo ante tu puerta
MI
para en todo amarte y servir.

MI            LA
Enciéndeme y déjame arder donde haga falta,
MI            LA
Enciéndeme y déjame ser tu luz,
MI            LA
y así poder llevarte hasta todas las almas,
MI     SI       MI
saciar la sed que tienes Tú desde la cruz.`,
    chords: ["MI","LA","DO#m","SI"]
  },
  {
    id: 2,
    title: "GEN VERDE",
    category: "gloria",
    key: "RE",
    lyrics: `RE   SOL   sim   LA
Gloria, gloria a Diooos.
RE   SOL   sim   LA
Gloria, gloria a Dios en el cieeelo.
RE   SOL   sim   LA
Paz en la tierra a la gente
DO  SOL  RE  SOL  RE
de buena voluntad, ¡gloooria!`,
    chords: ["RE","SOL","sim","LA","DO"]
  },
  {
    id: 3,
    title: "EL SEÑOR ES MI PASTOR",
    category: "salmo",
    key: "DO",
    lyrics: `DO     SOL      la
El Señor es mi Pastor,
FA        re     SOL
nada me falta, nada me falta. (bis)

FA     SOL        la
Me lleva a descansar en verdes prados,
FA        SOL        DO
me conduce a las aguas refrescantes...
FA     SOL     MI    la
Reconforta mi alma y me conduce por sus caminos.`,
    chords: ["DO","SOL","la","FA","re","MI"]
  },
  {
    id: 4,
    title: "ALELUYA",
    category: "aleluya",
    key: "SOL",
    lyrics: `SOL  DO   SOL   RE
Aleluya, aleluya, el Señor resucitó.
SOL  DO   SOL  RE7  SOL
Aleluya, aleluya, aleluya, ¡resucitó!

DO
¿Por qué buscáis entre los muertos al que vive?
SOL                 RE
¿Por qué buscáis fuera de Él?
SOL7      DO     DO
Si Él está vivo: ¡resucitó!`,
    chords: ["SOL","DO","RE","RE7","DO7"]
  },
  {
    id: 5,
    title: "Y QUE MÁS QUIERES",
    category: "otros",
    key: "SOL",
    lyrics: `SOL
¿Y qué más quieres que alumbrar?
DO
¿Y qué más quieres que dar vida?
RE
¿Qué más quieres que crear algo
DO          SOL
que en ti está como semilla?

mim                 sim
Si te arriesgas a expresar lo que tus ojos descubren,
DO   RE     mim
podrán todos contemplar las aguas que de ti fluyen...`,
    chords: ["SOL","DO","RE","mim","sim"]
  },
  {
    id: 6,
    title: "TE OFRECEMOS",
    category: "ofertorio",
    key: "DO",
    lyrics: `DO      FA       DO
Te ofrecemos pan y vino,
FA                 DO
te ofrecemos nuestro ser,
FA           DO
pan para andar el camino,
SIB     SOL
vino que apaga la sed.

FA      DO
Te ofrecemos pan y vino
FA   SOL   LAm
que ahora se transformarán
FA      DO
en Cuerpo y Sangre de Cristo,
SIB     SOL
nueva vida nos darán.`,
    chords: ["DO","FA","SOL","SIB","LAm"]
  },
  {
    id: 7,
    title: "SANTO",
    category: "santo",
    key: "SOL",
    lyrics: `SOL  DO  RE     SOL  DO  RE
Santo es el Señor, santo es el Señor. (bis)

SOL
Los cielos y la tierra
mi
proclaman tu grandeza,
DO     RE
¡hosanna, hosanna! (bis)

SOL
Bendito el que viene
mi
por siempre en tu nombre,
DO     RE
¡hosanna, hosanna!`,
    chords: ["SOL","DO","RE","mi"]
  },
  {
    id: 8,
    title: "PAZ SALERO",
    category: "paz",
    key: "RE",
    lyrics: `RE-SOL / RE-LA
Paz, ¡oh, paz!
Dale a mi vida tu luz.
Paz, ¡oh, paz!
Dale a mi vida tu luz.

RE
Ponle a mi vida tu ¡salero!
SOL          RE
Tus palabritas de amor sincero,
LA
la paz sea contigo, hermano.
RE                 SOL
Regalo trozos de cielo. (cierre: RE–al aire–LA–RE)`,
    chords: ["RE","SOL","LA"]
  },
  {
    id: 9,
    title: "COSAS DE LOCOS",
    category: "comunion",
    key: "MI",
    lyrics: `MI        sol#       LA
Si pienso lo que quieres que yo haga,
MI        sol#       LA
si tengo que hacer caso a tus palabras...
fa#            SI7
es como si me vaciaras las venas,
LA                 MI
estás loco, estás loco.

LA     SI7      MI
Solo te pido fuerzas para hacer
LA     SI7      MI
de mi debilidad un férreo vendaval...`,
    chords: ["MI","LA","SI7","fa#","sol#"]
  },
  {
    id: 10,
    title: "EN MI GETSEMANÍ",
    category: "comunion",
    key: "DO",
    lyrics: `DO   SOL   LAm
Para que mi amor no sea un sentimiento,
FA     REm   SOL
tan solo un deslumbramiento pasajero.
MI          LAm
Quiero hundir más hondo mi raíz en ti
FA     REm   SOL
y cimentar en solidez este mi afecto.

(Coro)
DO      SOL
Más allá de mis miedos,
LAm   MIm  FA
más allá de mi inseguridad,
REm              SOL
quiero darte mi respuesta.`,
    chords: ["DO","SOL","LAm","FA","REm","MI","MIm"]
  }
];

export const songCategories = [
  { key: 'all', label: 'Todas', count: 0 },
  { key: 'entrada', label: 'Entrada', count: 0 },
  { key: 'gloria', label: 'Gloria', count: 0 },
  { key: 'salmo', label: 'Salmos', count: 0 },
  { key: 'aleluya', label: 'Aleluya', count: 0 },
  { key: 'ofertorio', label: 'Ofertorio', count: 0 },
  { key: 'santo', label: 'Santo', count: 0 },
  { key: 'paz', label: 'Paz', count: 0 },
  { key: 'comunion', label: 'Comunión', count: 0 },
  { key: 'otros', label: 'Otros', count: 0 }
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