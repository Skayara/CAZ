import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mb-6"
            >
              CAZ Atocha
            </motion.h1>
            
            <motion.h2 
              className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6"
            >
              Repertorio Musical
            </motion.h2>
            
            <motion.div 
              className="flex items-center justify-center gap-2 text-gray-500 mb-8"
            >
              <Music className="w-5 h-5" />
              <span>Canciones con Acordes Transportables</span>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Bienvenido al repertorio musical de CAZ Atocha. Aquí encontrarás una colección completa de canciones con acordes transportables.
            </motion.p>

            <motion.button
              onClick={() => {
                const element = document.getElementById('repertorio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Music className="w-5 h-5" />
              Ver Repertorio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
