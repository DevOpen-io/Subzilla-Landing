import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  
  const techs = [
    { name: 'Flutter', color: '#02569B' },
    { name: 'Dart', color: '#0175C2' },
    { name: 'Riverpod', color: '#2D3748' },
    { name: 'SQLite', color: '#003B57' },
    { name: 'GoRouter', color: '#F7C52B' },
    { name: 'Freezed', color: '#5C6BC0' },
  ];

  return (
    <section id="tech" className="py-20 bg-slate-50 dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">{t('tech_title')}</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-6 py-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600 flex items-center gap-2"
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: tech.color }}
              />
              <span className="font-semibold text-slate-700 dark:text-slate-200">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;