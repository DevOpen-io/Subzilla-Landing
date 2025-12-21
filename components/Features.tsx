import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrackingWidget, AnalyticsWidget, CalendarWidget, SecureWidget } from './FeatureWidgets';
import { CreditCard, BarChart2, Calendar, Bell, LockKeyhole as LockIcon, Palette } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} id="features" className="py-24 relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div 
           style={{ y: y1, rotate }}
           className="absolute top-0 -left-20 w-72 h-72 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl"
         />
         <motion.div 
           style={{ y: y2 }}
           className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-3xl"
         />
         <motion.div 
           style={{ y: y1 }}
           className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-3xl"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('feat_title')} <br/>
            <span className="text-blue-600">{t('feat_title_highlight')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
             {t('feat_desc')}
          </motion.p>
        </div>

        {/* Bento Grid Layout - Optimized for spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          
          {/* Card 1: Detailed Tracking (Span 2 cols, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group overflow-hidden"
          >
            <div className="mb-6 relative z-10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('feat_card_tracking_title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">
                {t('feat_card_tracking_desc')}
              </p>
            </div>
            {/* Widget Area - Fills bottom */}
            <div className="w-full mt-auto relative z-0">
              <TrackingWidget />
            </div>
          </motion.div>

          {/* Card 2: Analytics (Span 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('feat_card_analytics_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t('feat_card_analytics_desc')}
              </p>
            </div>
            <div className="w-full mt-auto">
              <AnalyticsWidget />
            </div>
          </motion.div>

           {/* Card 3: Reminders (Span 1 col) */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-600 mb-4">
                <Bell size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('feat_card_reminders_title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t('feat_card_reminders_desc')}
              </p>
            </div>
            <div className="w-full mt-auto flex justify-center">
               <CalendarWidget />
            </div>
          </motion.div>

          {/* Card 4: Privacy (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
          >
             <div className="max-w-md">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                  <LockIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('feat_card_privacy_title')}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('feat_card_privacy_desc')}
                </p>
             </div>
             <div className="shrink-0">
                <SecureWidget />
             </div>
          </motion.div>

           {/* Card 5: Theming (Span 2 cols) */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 bg-gradient-to-r bg-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
          >
             <div>
                <div className="flex items-center gap-3 mb-4">
                   <Palette size={24} className="text-blue-400" />
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('feat_card_theme_title')}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                   {t('feat_card_theme_desc')}
                </p>
             </div>
             <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-full bg-white shadow-lg transform hover:scale-110 transition-transform"></div>
                 <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-600 shadow-lg transform hover:scale-110 transition-transform"></div>
                 <div className="w-10 h-10 rounded-full bg-blue-500 shadow-lg transform hover:scale-110 transition-transform"></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;