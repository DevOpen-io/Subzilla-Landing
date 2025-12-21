import React from 'react';
import { Github, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import ConfigData from '@/config';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        <div className="mb-8">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            <img src="/App_Logo.png" className=" rounded-lg" />
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-8">
          {t('footer_desc')}
        </p>

        <div className="flex gap-6 mb-12">
          <motion.a
            href={ConfigData.github_url}
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 5, color: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github />
          </motion.a>
        </div>

        <div className="text-sm text-slate-400 flex flex-col md:flex-row items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {ConfigData.app_name} App. MIT License.</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            {t('footer_made_with')} <Heart size={14} className="text-red-500 fill-red-500" /> {t('footer_by')} DevOpen
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;