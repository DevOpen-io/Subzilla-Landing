import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" 
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" 
      />
    </div>
  );
};