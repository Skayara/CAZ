import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Clock, CheckCircle, MoreHorizontal, Mic } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { timelineData } from '../data/cvData';

const Timeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const typeConfig = {
    trabajo: { color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-700', label: 'Trabajo' },
    voluntariado: { color: 'from-green-500 to-green-600', bg: 'bg-green-50', text: 'text-green-700', label: 'Voluntariado' },
    proyecto: { color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', text: 'text-purple-700', label: 'Proyectos' },
    colaboracion_europea: { color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50', text: 'text-yellow-700', label: 'Europa' },
    congreso: { color: 'from-red-500 to-pink-500', bg: 'bg-red-50', text: 'text-red-700', label: 'Congresos' },
    certificacion: { color: 'from-indigo-500 to-violet-600', bg: 'bg-indigo-50', text: 'text-indigo-700', label: 'Certificación' },
    docencia: { color: 'from-teal-500 to-cyan-600', bg: 'bg-teal-50', text: 'text-teal-700', label: 'Docencia' },
    estudios: { color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', text: 'text-amber-700', label: 'Estudios' },
    ponencia: { color: 'from-pink-500 to-rose-600', bg: 'bg-pink-50', text: 'text-pink-700', label: 'Ponencia' },
    tfg: { color: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', text: 'text-cyan-700', label: 'TFG' },
    // Nuevos filtros para estado
    'en-curso': { color: 'from-emerald-500 to-green-600', bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'En curso' },
    finalizado: { color: 'from-gray-500 to-slate-600', bg: 'bg-gray-50', text: 'text-gray-700', label: 'Finalizado' }
  };

  const filterTypes = [
    { key: 'all', label: 'Todos', icon: null },
    // Separador visual para filtros de estado
    { key: 'separator-estado', label: '— Estado —', disabled: true },
    { key: 'en-curso', label: 'En curso', icon: Clock },
    { key: 'finalizado', label: 'Finalizado', icon: CheckCircle },
    // Separador visual para filtros de tipo
    { key: 'separator-tipo', label: '— Tipo —', disabled: true },
    ...Object.entries(typeConfig)
      .filter(([key]) => !['en-curso', 'finalizado'].includes(key))
      .map(([key, config]) => ({ 
        key, 
        label: config.label, 
        icon: null // Quitamos todos los iconos para simplificar
      }))
  ];

  // Filtrar y ordenar datos por año (más reciente primero)
  const allFilteredData = (
    selectedType === 'all'
      ? timelineData
      : selectedType === 'en-curso'
        ? timelineData.filter(item => item.tags && item.tags.includes('En curso'))
      : selectedType === 'finalizado'
        ? timelineData.filter(item => item.tags && item.tags.includes('Finalizado'))
      : selectedType === 'docencia'
        ? timelineData.filter(item => item.tags && item.tags.includes('Docencia'))
      : selectedType === 'proyecto'
        ? timelineData.filter(item => item.tags && item.tags.includes('Proyecto'))
      : selectedType === 'ponencia'
        ? timelineData.filter(item =>
            (item.tags && item.tags.includes('Ponencia')) ||
            item.type === 'ponencia'
          )
      : selectedType === 'tfg'
        ? timelineData.filter(item =>
            (item.tags && (
              item.tags.includes('TFG') ||
              item.tags.includes('tfg') ||
              item.tags.includes('Tfg')
            )) ||
            item.type === 'tfg'
          )
      : selectedType === 'colaboracion_europea'
        ? timelineData.filter(item =>
            (item.tags && item.tags.includes('Europa')) ||
            item.type === 'colaboracion_europea'
          )
      : timelineData.filter(item => item.type === selectedType)
  ).sort((a, b) => b.year - a.year); // Ordenar por año descendente

  // Paginación progresiva
  const ITEMS_PER_PAGE = 10;
  const itemsToShow = currentPage * ITEMS_PER_PAGE;
  const filteredData = allFilteredData.slice(0, itemsToShow);
  const hasMoreItems = allFilteredData.length > itemsToShow;
  const remainingItems = allFilteredData.length - itemsToShow;

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const handleFilterChange = (newType) => {
    setSelectedType(newType);
    setCurrentPage(1); // Reset página cuando cambia el filtro
    setExpandedItem(null); // Cerrar cualquier item expandido
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const showAll = () => {
    setCurrentPage(Math.ceil(allFilteredData.length / ITEMS_PER_PAGE));
  };

  const showLess = () => {
    setCurrentPage(1);
    // Scroll suave hacia arriba de la timeline
    const timelineElement = document.querySelector('#timeline-section');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un viaje a través de mis experiencias profesionales, proyectos y logros más significativos
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterTypes.map((type, index) => {
            // Renderizar separadores
            if (type.key.startsWith('separator-')) {
              return (
                <div key={type.key} className="w-full flex justify-center">
                  <span className="text-sm text-gray-400 font-medium px-4 py-2">
                    {type.label}
                  </span>
                </div>
              );
            }

            // Renderizar botones de filtro normales
            const IconComponent = type.icon;
            
            return (
              <motion.button
                key={type.key}
                onClick={() => !type.disabled && handleFilterChange(type.key)}
                disabled={type.disabled}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedType === type.key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 border border-gray-200'
                } ${type.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                whileHover={!type.disabled ? { scale: 1.05 } : {}}
                whileTap={!type.disabled ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                {type.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Counter */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-blue-600">{filteredData.length}</span> de{' '}
            <span className="font-semibold text-gray-900">{allFilteredData.length}</span> entradas
            {selectedType !== 'all' && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {filterTypes.find(f => f.key === selectedType)?.label}
              </span>
            )}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => {
                const config = typeConfig[item.type] || { color: 'from-gray-400 to-gray-500', bg: 'bg-gray-50', text: 'text-gray-700', label: 'Desconocido' };
                
                // Configuración especial para items con tags específicas
                if (selectedType === 'docencia' && item.tags && item.tags.includes('Docencia')) {
                  Object.assign(config, typeConfig.docencia);
                }
                if (selectedType === 'ponencia' && item.tags && item.tags.includes('Ponencia')) {
                  Object.assign(config, typeConfig.ponencia);
                }
                if (selectedType === 'tfg' && item.tags && (
                  item.tags.includes('TFG') ||
                  item.tags.includes('tfg') ||
                  item.tags.includes('Tfg')
                )) {
                  Object.assign(config, typeConfig.tfg);
                }
                
                const isExpanded = expandedItem === item.id;

                // Determinar el estado del item para mostrar el indicador visual
                const isEnCurso = item.tags && item.tags.includes('En curso');
                const isFinalizado = item.tags && item.tags.includes('Finalizado');

                return (
                  <motion.div
                    key={item.id}
                    className="relative pl-20 pb-12"
                    layout
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: (index % ITEMS_PER_PAGE) * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${config.color} border-4 border-white shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: (index % ITEMS_PER_PAGE) * 0.1 + 0.3, type: "spring" }}
                    />

                    {/* Content Card */}
                    <motion.div
                      className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                        isEnCurso ? 'ring-2 ring-emerald-200' : ''
                      }`}
                      whileHover={{ y: -5 }}
                      layout
                    >
                      {/* Header */}
                      <div className={`${config.bg} p-6 border-b border-gray-100`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} border`}>
                                {config.label}
                              </span>
                              {/* Indicador de estado */}
                              {isEnCurso && (
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  En curso
                                </span>
                              )}
                              {isFinalizado && (
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200 flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3" />
                                  Finalizado
                                </span>
                              )}
                              <div className="flex items-center gap-1 text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{item.year}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">{item.company}</span>
                            </div>
                          </div>
                          
                          <motion.button
                            onClick={() => toggleExpanded(item.id)}
                            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </motion.button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags
                            .filter(tag => !['En curso', 'Finalizado'].includes(tag)) // Filtrar las tags de estado ya mostradas arriba
                            .map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/70 text-gray-700 text-xs font-medium rounded-lg border"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (index % ITEMS_PER_PAGE) * 0.1 + tagIndex * 0.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 space-y-6">
                              {/* Description */}
                              <div className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                                <ReactMarkdown 
                                  remarkPlugins={[remarkGfm]}
                                  components={{
                                    h1: ({node, ...props}) => <h1 className="text-xl font-bold text-gray-900 mb-3" {...props} />,
                                    h2: ({node, ...props}) => <h2 className="text-lg font-bold text-gray-900 mb-2 mt-4" {...props} />,
                                    h3: ({node, ...props}) => <h3 className="text-base font-semibold text-gray-800 mb-2 mt-3" {...props} />,
                                    p: ({node, ...props}) => <p className="text-gray-700 mb-2" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1" {...props} />,
                                    ol: ({node, ...props}) => <ol className="list-decimal list-inside text-gray-700 mb-3 space-y-1" {...props} />,
                                    li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                                    strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                                    em: ({node, ...props}) => <em className="italic text-gray-700" {...props} />
                                  }}
                                >
                                  {item.description}
                                </ReactMarkdown>
                              </div>

                              {/* Achievements */}
                              {item.achievements && item.achievements.length > 0 && (
                                <div>
                                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                                    <Award className="w-5 h-5 text-yellow-500" />
                                    Logros destacados
                                  </h4>
                                  <div className="space-y-3">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <motion.div
                                        key={achIndex}
                                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: achIndex * 0.1 }}
                                      >
                                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{achievement}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Load More / Show Less Buttons */}
            <div className="text-center mt-12 space-y-4">
              {hasMoreItems && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    onClick={loadMore}
                    className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MoreHorizontal className="w-5 h-5" />
                    Ver más ({remainingItems > ITEMS_PER_PAGE ? ITEMS_PER_PAGE : remainingItems} de {remainingItems} restantes)
                    <ChevronDown className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    onClick={showAll}
                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Mostrar todas ({allFilteredData.length})
                  </motion.button>
                </div>
              )}

              {currentPage > 1 && (
                <motion.button
                  onClick={showLess}
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto bg-gray-500 text-white hover:bg-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ChevronUp className="w-4 h-4" />
                  Mostrar menos
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;