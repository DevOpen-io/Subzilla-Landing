import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Download, Zap, CircleCheck } from "lucide-react";
import { InteractivePhone } from "./InteractivePhone";
import { useLanguage } from "../LanguageContext";
import ConfigData from "@/config";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], [0, 150]);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden lg:overflow-visible">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-20 relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-semibold mb-8 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
          >
            <Zap size={16} className="text-blue-500" />
            <span>{t("hero_badge")}</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            {t("hero_title_1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              {t("hero_title_2")}
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            {t("hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-50">
            <div className="relative">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all w-full sm:w-auto"
              >
                <Download size={20} />
                {t("hero_btn_download")}
              </motion.button>

              <AnimatePresence>
                {isDownloadOpen && (
                  <motion.div
                    style={{ zIndex: 1000 }}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-3 p-2 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col gap-1 min-w-[200px]"
                  >
                    <a
                      href={ConfigData.fdroid_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group p-2"
                    >
                      <img
                        src="/get-it-on-fdroid.png"
                        alt="Get it on F-Droid"
                      />
                    </a>

                    <a
                      href={ConfigData.playstore_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group p-2"
                    >
                      <img
                        src="/get-it-on-google-play.png"
                        alt="Get it on Google Play"
                      />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#showcase"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              {t("hero_btn_features")}
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CircleCheck size={16} className="text-green-500" />
              <span>{t("hero_usp_offline")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck size={16} className="text-green-500" />
              <span>{t("hero_usp_privacy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck size={16} className="text-green-500" />
              <span>{t("hero_usp_no_account")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck size={16} className="text-green-500" />
              <span>{t("hero_usp_dark_mode")}</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Abstract Background Blobs specific to phone area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            <motion.div
              style={{ y: blobY }}
              className="w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse"
            />
          </div>

          {/* Phone Wrapper for Scaling on Small Screens */}
          <div className="origin-top transform scale-[0.85] sm:scale-100 lg:scale-100">
            <InteractivePhone />
          </div>

          {/* Decorative floating elements - Hidden on small mobile */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 -right-4 lg:right-0 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                <CircleCheck size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">
                  {t("phone_status")}
                </div>
                <div className="font-bold text-slate-800 dark:text-white">
                  {t("phone_status_val")}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
