import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CirclePlus, BarChart2, Home, Calendar, Bell } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const InteractivePhone = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  const [items, setItems] = useState([
    { name: 'Spotify', price: 9.99, color: 'bg-green-500', icon: 'S' },
    { name: 'Dropbox', price: 11.99, color: 'bg-blue-500', icon: 'D' },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Animation sequence loop
  useEffect(() => {
    let isMounted = true;
    const cycle = async () => {
      if (!isMounted) return;
      
      // 1. Start at Home
      setActiveTab('home');
      await wait(2000);
      if (!isMounted) return;

      // 2. Show Add Modal
      setShowAddModal(true);
      await wait(1500); // Simulate user interaction
      if (!isMounted) return;
      
      // 3. Add Item
      setShowAddModal(false);
      setItems(prev => [{ name: 'Netflix', price: 15.99, color: 'bg-red-600', icon: 'N' }, ...prev]);
      await wait(800);
      if (!isMounted) return;
      
      // 4. Show Notification
      setNotification('Netflix bill due tomorrow!');
      await wait(3000);
      setNotification(null);
      if (!isMounted) return;

      // 5. Switch to Analytics
      setActiveTab('analytics');
      await wait(4000);
      if (!isMounted) return;

      // Reset
      setItems([
        { name: 'Spotify', price: 9.99, color: 'bg-green-500', icon: 'S' },
        { name: 'Dropbox', price: 11.99, color: 'bg-blue-500', icon: 'D' },
      ]);
      cycle();
    };
    cycle();

    return () => { isMounted = false; };
  }, []);

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-900/50 mx-auto lg:mr-0 select-none cursor-default">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

        {/* Screen Content */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            
            {/* Header */}
            <div className="h-24 bg-blue-600 flex items-end justify-between px-6 pb-4 text-white z-10 shadow-md">
                <span className="font-bold text-lg tracking-wide">
                    {activeTab === 'home' ? t('phone_tab_home') : t('phone_tab_stats')}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border border-white/30">TA</div>
            </div>

            {/* Main Body */}
            <div className="flex-1 overflow-hidden relative p-4">
                <AnimatePresence mode="wait">
                    {activeTab === 'home' && (
                        <motion.div 
                            key="home"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-4 h-full"
                        >
                            {/* Total Card */}
                            <motion.div 
                              layoutId="total-card"
                              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20"
                            >
                                <div className="text-xs font-medium opacity-80 mb-1">{t('phone_total')}</div>
                                <motion.div 
                                    key={items.length}
                                    initial={{ scale: 1.1, opacity: 0.5 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-3xl font-bold tracking-tight"
                                >
                                    ${items.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
                                </motion.div>
                            </motion.div>

                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">{t('phone_subs_list')}</div>
                            
                            {/* List */}
                            <div className="space-y-3 pb-20 overflow-y-auto no-scrollbar h-full">
                                <AnimatePresence initial={false}>
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            layout
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm flex items-center justify-between border border-slate-200 dark:border-slate-800"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold shadow-md`}>{item.icon}</div>
                                                <div>
                                                    <div className="font-bold text-slate-800 dark:text-slate-100 text-sm">{item.name}</div>
                                                    <div className="text-[10px] text-slate-400">Next billing: Oct 24</div>
                                                </div>
                                            </div>
                                            <div className="font-bold text-slate-800 dark:text-slate-100 text-sm">${item.price}</div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Floating Action Button */}
                            <motion.div 
                                animate={{ scale: showAddModal ? 0.8 : 1 }}
                                className="absolute bottom-4 right-4 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 z-30"
                            >
                                <CirclePlus size={28} />
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'analytics' && (
                        <motion.div 
                            key="analytics"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col pt-4 gap-4"
                        >
                             <motion.div 
                              layoutId="total-card"
                              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20 shrink-0"
                            >
                                <div className="text-xs font-medium opacity-80 mb-1">{t('phone_yearly')}</div>
                                <div className="text-3xl font-bold tracking-tight">$1,714.56</div>
                            </motion.div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex-1">
                                <div className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-8 flex justify-between items-center">
                                    <span>{t('phone_trend')}</span>
                                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">6M</span>
                                </div>
                                <div className="h-32 flex items-end justify-between gap-3 px-2">
                                    {[40, 65, 30, 85, 50, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: '5%' }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, type: 'spring', damping: 12 }}
                                            className="w-full bg-blue-500 rounded-t-sm relative group"
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${h * 2}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium uppercase">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                </div>
                            </div>
                            
                            <div className="h-20 bg-white dark:bg-slate-900 rounded-2xl p-4 flex items-center justify-between border border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                                        <BarChart2 size={20} />
                                    </div>
                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{t('phone_top_cat')}</div>
                                </div>
                                <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{t('phone_cat_ent')}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Simulated Notification */}
                <AnimatePresence>
                    {notification && (
                        <motion.div
                            initial={{ y: -60, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -60, opacity: 0, scale: 0.9 }}
                            className="absolute top-2 left-2 right-2 bg-slate-800/95 backdrop-blur-md text-white p-3 rounded-xl shadow-xl z-50 flex items-center gap-3 border border-slate-700"
                        >
                            <div className="bg-yellow-500/20 p-2 rounded-full">
                                <Bell size={16} className="text-yellow-400" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-200">{t('phone_upcoming')}</div>
                                <div className="text-xs text-slate-400">{notification}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                 {/* Simulated Add Modal */}
                 <AnimatePresence>
                    {showAddModal && (
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute inset-0 bg-white dark:bg-slate-950 z-40 p-6 flex flex-col pt-24"
                        >
                            <div className="text-2xl font-bold text-slate-800 dark:text-white mb-8">New Subscription</div>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Name</div>
                                    <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded-xl w-full flex items-center px-4 text-slate-400 text-sm">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                        >
                                            Netf...
                                        </motion.span>
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="ml-0.5 w-0.5 h-4 bg-blue-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Price</div>
                                    <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded-xl w-1/3 flex items-center px-4 text-slate-400 text-sm">
                                        $15.99
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30">
                                Save Subscription
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
            </div>

            {/* Bottom Nav */}
            <div className="h-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around text-slate-400 z-10 pb-4">
                <div className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                    <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
                    <span className="text-[10px] font-medium">{t('phone_nav_home')}</span>
                </div>
                <div className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'analytics' ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                    <BarChart2 size={24} strokeWidth={activeTab === 'analytics' ? 2.5 : 2} />
                    <span className="text-[10px] font-medium">{t('phone_nav_stats')}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Calendar size={24} />
                    <span className="text-[10px] font-medium">{t('phone_nav_plan')}</span>
                </div>
            </div>
        </div>
    </div>
  );
};