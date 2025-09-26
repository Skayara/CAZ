import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Code, Database, Cloud, Palette, Brain, Users, Shield, Search, Bug, FileText, Globe, Terminal } from 'lucide-react';
import { skillsData, interestsData, languagesData, toolsData, idiomasData } from '../data/cvData';

const Skills = () => {
  const [activeChart, setActiveChart] = useState('cybersecurity');

  const categoryIcons = {
    'Pentesting & Red Team': Shield,
    'OSINT & Ciberinteligencia': Search,
    'Análisis de Malware & Forense': Bug,
    'Infraestructura & Cloud': Cloud,
    'ML & Data Science': Brain,
    'Compliance & Frameworks': FileText,
    'OT/ICS & Ciberseguridad Industrial': Cloud,
    'Hardware Hacking': Bug
  };

  const categoryColors = {
    'Pentesting & Red Team': '#DC2626',
    'OSINT & Ciberinteligencia': '#7C3AED',
    'Análisis de Malware & Forense': '#059669',
    'Infraestructura & Cloud': '#2563EB',
    'ML & Data Science': '#EA580C',
    'Compliance & Frameworks': '#0891B2',
    'OT/ICS & Ciberseguridad Industrial': '#F43F5E', // rosa fuerte
    'Hardware Hacking': '#22D3EE' // cian claro
  };

  const languageColors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#84CC16'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-blue-600">
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p style={{ color: payload[0].color }}>
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Habilidades & Conocimientos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un vistazo detallado a mis competencias técnicas y áreas de especialización en ciberseguridad
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Chart Toggle */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.button
              onClick={() => setActiveChart('cybersecurity')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeChart === 'cybersecurity'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Áreas de Ciberseguridad
            </motion.button>
            <motion.button
              onClick={() => setActiveChart('tools')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeChart === 'tools'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Herramientas & Tecnologías
            </motion.button>
            <motion.button
              onClick={() => setActiveChart('programming')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeChart === 'programming'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Programación
            </motion.button>
            <motion.button
              onClick={() => setActiveChart('languages')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeChart === 'languages'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Idiomas
            </motion.button>
          </div>

          {/* Content based on active chart */}
          <motion.div layout>
            {activeChart === 'cybersecurity' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                {/* Cybersecurity Skills Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Áreas de Especialización
                  </h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={skillsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="level"
                          label={({ name, level }) => `${name}: ${level}%`}
                        >
                          {skillsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={Object.values(categoryColors)[index % Object.values(categoryColors).length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<PieTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Legend */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Competencias Clave</h4>
                  <div className="space-y-3">
                    {skillsData.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: Object.values(categoryColors)[index % Object.values(categoryColors).length] }}
                          />
                          <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{item.level}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeChart === 'tools' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {toolsData.map((category, categoryIndex) => {
                  const Icon = categoryIcons[category.category] || Shield;
                  const color = categoryColors[category.category];
                  
                  return (
                    <motion.div
                      key={category.category}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div 
                          className="p-3 rounded-xl"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <Icon className="w-6 h-6" style={{ color }} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{category.category}</h4>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={tool.name}
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + toolIndex * 0.05, duration: 0.4 }}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700">{tool.name}</span>
                              <span className="text-sm font-semibold" style={{ color }}>
                                {tool.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="h-2 rounded-full"
                                style={{ backgroundColor: color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${tool.level}%` }}
                                transition={{ delay: categoryIndex * 0.1 + toolIndex * 0.05 + 0.2, duration: 0.8 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeChart === 'programming' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                {/* Programming Languages Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Lenguajes de Programación
                  </h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={languagesData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name" 
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          fontSize={12}
                        />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                          dataKey="level" 
                          fill="#3B82F6"
                          radius={[4, 4, 0, 0]}
                        >
                          {languagesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={languageColors[index % languageColors.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Programming Skills List */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-blue-500" />
                    Competencias de Programación
                  </h4>
                  <div className="space-y-4">
                    {languagesData.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{lang.name}</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {lang.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: languageColors[index % languageColors.length] }}
                            initial={{ width: 0 }}
                            animate={{ width: `${lang.level}%` }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeChart === 'languages' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                    <Globe className="w-7 h-7 text-blue-500" />
                    Competencias Lingüísticas
                  </h3>
                  <div className="space-y-6">
                    {idiomasData.map((idioma, index) => (
                      <motion.div
                        key={idioma.name}
                        className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900">{idioma.name}</h4>
                          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                            {idioma.level}%
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{idioma.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${idioma.level}%` }}
                            transition={{ delay: index * 0.2 + 0.3, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;