import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Music, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { songsData, songCategories, transposeChord } from '../data/songsData';

const SongRepertoire = () => {
  const [expandedSong, setExpandedSong] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [searchTerm, setSearchTerm] = useState('');
  const [transpositions, setTranspositions] = useState({}); // Track transposition for each song

  // Filter and search songs
  const filteredSongs = useMemo(() => {
    let filtered = songsData;

    // Filter by category
    if (!selectedCategories.includes('all')) {
      filtered = filtered.filter(song => 
        selectedCategories.some(cat => 
          song.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Search by title and lyrics
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(song =>
        song.title.toLowerCase().includes(searchLower) ||
        song.lyrics.toLowerCase().includes(searchLower)
      );
    }

    // Sort alphabetically by title
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedCategories, searchTerm]);

  // Calculate category counts
  const categoriesWithCounts = useMemo(() => {
    const counts = {};
    songsData.forEach(song => {
      const cat = song.category.toLowerCase();
      counts[cat] = (counts[cat] || 0) + 1;
    });
    
    return songCategories.map(category => ({
      ...category,
      count: category.key === 'all' ? songsData.length : (counts[category.key] || 0)
    }));
  }, []);

  const handleCategoryChange = (categoryKey) => {
    if (categoryKey === 'all') {
      setSelectedCategories(['all']);
    } else {
      const newCategories = selectedCategories.includes('all') 
        ? [categoryKey]
        : selectedCategories.includes(categoryKey)
          ? selectedCategories.filter(cat => cat !== categoryKey)
          : [...selectedCategories.filter(cat => cat !== 'all'), categoryKey];
      
      setSelectedCategories(newCategories.length === 0 ? ['all'] : newCategories);
    }
  };

  const toggleSongExpansion = (songId) => {
    setExpandedSong(expandedSong === songId ? null : songId);
  };

  const transposeSong = (songId, direction) => {
    const currentTransposition = transpositions[songId] || 0;
    const newTransposition = direction === 'up' ? currentTransposition + 1 : currentTransposition - 1;
    
    console.log(`Transposing song ${songId} ${direction}: ${currentTransposition} -> ${newTransposition}`);
    
    setTranspositions(prev => ({
      ...prev,
      [songId]: newTransposition
    }));
  };

  const resetTransposition = (songId) => {
    setTranspositions(prev => {
      const newTranspositions = { ...prev };
      delete newTranspositions[songId];
      return newTranspositions;
    });
  };

  const formatLyrics = (lyrics, transposition = 0) => {
    // Super simple approach: just transpose chord-like patterns and preserve everything else
    let processedLyrics = lyrics;
    
    // If there's a transposition, replace known chord patterns
    if (transposition !== 0) {
      // List of all possible chord patterns we want to transpose
      const chordPatterns = [
        // Major chords
        /\bDO#?\b/g, /\bRE#?\b/g, /\bMI\b/g, /\bFA#?\b/g, /\bSOL#?\b/g, /\bLA#?\b/g, /\bSI\b/g,
        // Minor chords (lowercase)
        /\bdo#?\b/g, /\bre#?\b/g, /\bmi\b/g, /\bfa#?\b/g, /\bsol#?\b/g, /\bla#?\b/g, /\bsi\b/g,
        // Minor chords with m
        /\bDO#?m\b/g, /\bRE#?m\b/g, /\bMIm\b/g, /\bFA#?m\b/g, /\bSOL#?m\b/g, /\bLA#?m\b/g, /\bSIm\b/g,
        /\bdom\b/g, /\brem\b/g, /\bmim\b/g, /\bfam\b/g, /\bsolm\b/g, /\blam\b/g, /\bsim\b/g,
        // 7th chords
        /\bDO#?7\b/g, /\bRE#?7\b/g, /\bMI7\b/g, /\bFA#?7\b/g, /\bSOL#?7\b/g, /\bLA#?7\b/g, /\bSI7\b/g,
        // Add9, sus, etc.
        /\bDO#?add9\b/g, /\bRE#?add9\b/g, /\bMIadd9\b/g, /\bFA#?add9\b/g, /\bSOL#?add9\b/g, /\bLA#?add9\b/g, /\bSIadd9\b/g
      ];
      
      // Simple replacement: find any chord and transpose it
      processedLyrics = lyrics.replace(
        /\b(DO#?|RE#?|MI|FA#?|SOL#?|LA#?|SI|do#?|re#?|mi|fa#?|sol#?|la#?|si)([m]?[0-9]*|add[0-9]+|sus[0-9]*|maj[0-9]*|dim)?\b/g,
        (match) => {
          return transposeChord(match, transposition);
        }
      );
    }
    
    // Split lyrics into lines and format
    return processedLyrics.split('\n').map((line, index) => {
      // Simple detection: if line starts with chord-like patterns, it's probably a chord line
      const trimmedLine = line.trim();
      const startsWithChord = /^(DO#?|RE#?|MI|FA#?|SOL#?|LA#?|SI|do#?|re#?|mi|fa#?|sol#?|la#?|si)/i.test(trimmedLine);
      const hasMultipleChords = (trimmedLine.match(/\b(DO#?|RE#?|MI|FA#?|SOL#?|LA#?|SI|do#?|re#?|mi|fa#?|sol#?|la#?|si)/gi) || []).length >= 2;
      const isChordLine = startsWithChord || hasMultipleChords;
      
      if (isChordLine) {
        return (
          <div key={index} className="text-blue-600 font-bold mb-1 font-mono text-sm leading-relaxed whitespace-pre">
            {line}
          </div>
        );
      } else {
        // This is a lyrics line - highlight any chords within the text
        const formattedLine = line.replace(
          /\b(DO#?|RE#?|MI|FA#?|SOL#?|LA#?|SI|do#?|re#?|mi|fa#?|sol#?|la#?|si)([m]?[0-9]*|add[0-9]+|sus[0-9]*|maj[0-9]*|dim)?\b/g,
          (match) => {
            return `<span class="text-blue-600 font-semibold">${match}</span>`;
          }
        );
        
        return (
          <div 
            key={index} 
            className="text-gray-700 mb-1 leading-relaxed whitespace-pre"
            dangerouslySetInnerHTML={{ __html: formattedLine || '&nbsp;' }}
          />
        );
      }
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Repertorio Musical
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Colección de canciones con acordes transportables. Usa los botones + y - para cambiar la tonalidad.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar canciones o letras..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategories.includes(category.key)
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Songs List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AnimatePresence>
              {filteredSongs.map((song, index) => {
                const isExpanded = expandedSong === song.id;
                const currentTransposition = transpositions[song.id] || 0;
                
                return (
                  <motion.div
                    key={song.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    layout
                  >
                    {/* Song Header */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleSongExpansion(song.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Music className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                              {song.title}
                            </h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                {song.category}
                              </span>
                              <span>Tono: {song.key}</span>
                              {currentTransposition !== 0 && (
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                                  {currentTransposition > 0 ? '+' : ''}{(currentTransposition * 0.5).toFixed(1)} tonos
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Song Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="border-t border-gray-100"
                        >
                          <div className="p-6">
                            {/* Transposition Controls */}
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-700">
                                  Transportar:
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    transposeSong(song.id, 'down');
                                  }}
                                  className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition-colors"
                                  title="Bajar medio tono"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="min-w-[80px] text-center text-sm font-medium">
                                  {currentTransposition === 0 ? 'Original' : 
                                   `${currentTransposition > 0 ? '+' : ''}${(currentTransposition * 0.5).toFixed(1)} T`}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    transposeSong(song.id, 'up');
                                  }}
                                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200 flex items-center justify-center transition-colors"
                                  title="Subir medio tono"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              {currentTransposition !== 0 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    resetTransposition(song.id);
                                  }}
                                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                  Restaurar original
                                </button>
                              )}
                            </div>

                            {/* Lyrics with Chords */}
                            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
                              <div className="whitespace-pre-line">
                                {formatLyrics(song.lyrics, currentTransposition)}
                              </div>
                              {/* Debug info */}
                              {currentTransposition !== 0 && (
                                <div className="mt-4 text-xs text-gray-500">
                                  Debug: Transposition = {currentTransposition}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredSongs.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Music className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  No se encontraron canciones
                </h3>
                <p className="text-gray-400">
                  Intenta cambiar los filtros o el término de búsqueda
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SongRepertoire;