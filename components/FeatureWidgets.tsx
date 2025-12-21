import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, LockKeyhole as LockIcon } from 'lucide-react';

export const TrackingWidget = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden flex flex-col gap-3 justify-end">
      {/* Gradient matches card background (white in light, slate-800 in dark) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800 to-transparent z-10 pointer-events-none" />
      
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-20px" }}
          transition={{ delay: i * 0.15 }}
          className="w-full h-12 bg-slate-50 dark:bg-slate-700 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600 flex items-center px-4 justify-between"
        >
          <div className="flex items-center gap-3">
             <div className={`w-8 h-8 rounded-full ${['bg-red-500', 'bg-blue-500', 'bg-green-500'][i]} shrink-0`} />
             <div className="h-2 w-24 bg-slate-200 dark:bg-slate-600 rounded-full" />
          </div>
          <div className="h-2 w-12 bg-slate-200 dark:bg-slate-600 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

export const AnalyticsWidget = () => {
  return (
    <div className="w-full h-32 flex items-end justify-between gap-2 px-1">
      {[40, 75, 50, 90, 60].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: '10%' }}
          whileInView={{ height: `${h}%` }}
          viewport={{ margin: "-20px" }}
          transition={{ type: 'spring', damping: 12, delay: i * 0.1 }}
          className="flex-1 bg-blue-500 dark:bg-blue-600 rounded-t-lg opacity-90 hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  );
};

export const CalendarWidget = () => {
  return (
    <div className="relative w-28 h-32 bg-slate-50 dark:bg-slate-700 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-600 flex flex-col items-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="w-full h-10 bg-red-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black/20 mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-black/20 mx-1"></div>
      </div>
      <div className="flex-1 flex items-center justify-center text-4xl font-bold text-slate-800 dark:text-white">
        24
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-2 right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm"
      >
        <Bell size={12} className="text-yellow-900" />
      </motion.div>
    </div>
  );
};

export const SecureWidget = () => {
    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div 
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center"
            >
                <LockIcon size={40} className="text-green-600 dark:text-green-400" />
            </motion.div>
            <motion.div 
                className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-700 rounded-full p-1.5 shadow-lg border border-slate-100 dark:border-slate-600"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
            >
                <Check size={14} className="text-green-500" />
            </motion.div>
        </div>
    )
}