import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import ConfigData from '@/config';

const Installation: React.FC = () => {
  const { t } = useLanguage();

  const codeSnippet = `git clone ${ConfigData.github_url}
cd SubZilla
flutter pub get
dart run build_runner build -d
flutter run`;

  return (
    <section id="install" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('install_title')} <br/>
              <span className="text-blue-600">{t('install_title_highlight')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              {t('install_desc')}
            </p>
            <div className="space-y-4">
               <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('install_step_1_title')}</h4>
                    <p className="text-sm text-slate-500">{t('install_step_1_desc')}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('install_step_2_title')}</h4>
                    <p className="text-sm text-slate-500">{t('install_step_2_desc')}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('install_step_3_title')}</h4>
                    <p className="text-sm text-slate-500">{t('install_step_3_desc')}</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            {/* Added max-w-[calc(100vw-3rem)] to constrain width on mobile within padding */}
            <div className="relative rounded-xl bg-slate-100 dark:bg-slate-900 p-4 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto shadow-2xl w-full max-w-[calc(100vw-3rem)] md:max-w-full">
              <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2 min-w-max">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-slate-400 flex items-center gap-1 text-xs">
                    <Code size={12} /> bash
                 </div>
              </div>
              <pre className="text-green-400">
                <code>
                  <span className="text-slate-500"># Clone the repo</span>
                  <br />
                  git clone {ConfigData.github_url}
                  <br /><br />
                  <span className="text-slate-500"># Install dependencies</span>
                  <br />
                  flutter pub get
                  <br /><br />
                  <span className="text-slate-500"># Run code generation</span>
                  <br />
                  dart run build_runner build -d
                  <br /><br />
                  <span className="text-slate-500"># Launch App</span>
                  <br />
                  flutter run
                </code>
              </pre>
              <motion.button 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigator.clipboard.writeText(codeSnippet)}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                <Copy size={16} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Installation;