import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navbar
    nav_features: 'Features',
    nav_tech: 'Tech Stack',
    nav_install: 'Install',
    nav_star: 'Star on GitHub',

    // Hero
    hero_badge: 'The smartest way to manage subscriptions',
    hero_title_1: 'Stop Overpaying.',
    hero_title_2: 'Start Tracking.',
    hero_desc: 'Easily add your subscriptions, get notified before payments, and see exactly where your money goes with our interactive analytics.',
    hero_btn_download: 'Download App',
    hero_btn_features: 'See Features',
    hero_usp_offline: 'Offline Database',
    hero_usp_privacy: 'Privacy Focused',
    hero_usp_no_account: 'No Accounts Needed',
    hero_usp_dark_mode: 'Dark Mode Ready',
    phone_status: 'Status',
    phone_status_val: 'All Paid',

    // Features
    feat_title: 'Powerful Features in a',
    feat_title_highlight: 'Minimalist Package',
    feat_desc: 'Everything you need to track your recurring expenses, visualized beautifully and stored securely on your device.',
    feat_card_tracking_title: 'Detailed Tracking',
    feat_card_tracking_desc: 'Keep a precise record of all your subscriptions. Add names, prices, billing cycles, and categories.',
    feat_card_analytics_title: 'Visual Analytics',
    feat_card_analytics_desc: 'Understand your spending habits with interactive charts.',
    feat_card_reminders_title: 'Smart Reminders',
    feat_card_reminders_desc: 'Get notified locally before bills are due. Never miss a payment.',
    feat_card_privacy_title: 'Offline & Private',
    feat_card_privacy_desc: 'Your data is stored locally on your device using SQLite. No cloud servers, no tracking.',
    feat_card_theme_title: 'Dark & Light Mode',
    feat_card_theme_desc: 'Built with FlexColorScheme for a polished look in any environment.',

    // Tech Stack
    tech_title: 'Built with modern, robust technologies',

    // Installation
    install_title: 'Open Source &',
    install_title_highlight: 'Community Driven',
    install_desc: 'SubsZilla is fully open source. You can inspect the code, build it yourself, or contribute to its development.',
    install_step_1_title: 'Clone Repository',
    install_step_1_desc: 'Get the latest source code from GitHub.',
    install_step_2_title: 'Generate Code',
    install_step_2_desc: 'Run build_runner for Riverpod & Freezed.',
    install_step_3_title: 'Run',
    install_step_3_desc: 'Launch on iOS Simulator or Android Emulator.',

    // Footer
    footer_desc: 'A Flutter application to manage your subscriptions efficiently. Built with precision and care.',
    footer_made_with: 'Made with',
    footer_by: 'by',

    // Phone Interface
    phone_tab_home: 'My Subs',
    phone_tab_stats: 'Analytics',
    phone_total: 'Total Monthly',
    phone_subs_list: 'Your Subscriptions',
    phone_yearly: 'Yearly Projection',
    phone_trend: 'Spending Trend',
    phone_top_cat: 'Top Category',
    phone_cat_ent: 'Entertainment',
    phone_upcoming: 'Upcoming Bill',
    phone_nav_home: 'Home',
    phone_nav_stats: 'Stats',
    phone_nav_plan: 'Plan',
  },
  tr: {
    // Navbar
    nav_features: 'Özellikler',
    nav_tech: 'Teknolojiler',
    nav_install: 'Kurulum',
    nav_star: 'GitHub\'da Yıldızla',

    // Hero
    hero_badge: 'Abonelikleri yönetmenin en akıllı yolu',
    hero_title_1: 'Fazla Ödemeye Son.',
    hero_title_2: 'Takibe Başla.',
    hero_desc: 'Aboneliklerinizi kolayca ekleyin, ödemelerden önce bildirim alın ve interaktif analizlerle paranızın nereye gittiğini tam olarak görün.',
    hero_btn_download: 'Uygulamayı İndir',
    hero_btn_features: 'Özellikleri Gör',
    hero_usp_offline: 'Çevrimdışı Veritabanı',
    hero_usp_privacy: 'Gizlilik Odaklı',
    hero_usp_no_account: 'Hesap Gerektirmez',
    hero_usp_dark_mode: 'Karanlık Mod Hazır',
    phone_status: 'Durum',
    phone_status_val: 'Hepsi Ödendi',

    // Features
    feat_title: 'Minimalist Pakette',
    feat_title_highlight: 'Güçlü Özellikler',
    feat_desc: 'Tekrarlayan harcamalarınızı takip etmek için ihtiyacınız olan her şey, güzel bir görselleştirme ve güvenli yerel depolama ile.',
    feat_card_tracking_title: 'Detaylı Takip',
    feat_card_tracking_desc: 'Tüm aboneliklerinizin kesin kaydını tutun. İsim, fiyat, fatura döngüsü ve kategori ekleyin.',
    feat_card_analytics_title: 'Görsel Analiz',
    feat_card_analytics_desc: 'Etkileşimli grafiklerle harcama alışkanlıklarınızı anlayın.',
    feat_card_reminders_title: 'Akıllı Hatırlatıcılar',
    feat_card_reminders_desc: 'Faturalar gelmeden önce yerel bildirimler alın. Hiçbir ödemeyi kaçırmayın.',
    feat_card_privacy_title: 'Çevrimdışı & Gizli',
    feat_card_privacy_desc: 'Verileriniz SQLite kullanılarak cihazınızda yerel olarak saklanır. Bulut sunucusu yok, takip yok.',
    feat_card_theme_title: 'Karanlık & Aydınlık Mod',
    feat_card_theme_desc: 'Her ortamda şık bir görünüm için FlexColorScheme ile oluşturuldu.',

    // Tech Stack
    tech_title: 'Modern ve sağlam teknolojilerle geliştirildi',

    // Installation
    install_title: 'Açık Kaynak &',
    install_title_highlight: 'Topluluk Odaklı',
    install_desc: 'SubZilla tamamen açık kaynaktır. Kodu inceleyebilir, kendiniz derleyebilir veya geliştirmeye katkıda bulunabilirsiniz.',
    install_step_1_title: 'Repoyu Klonla',
    install_step_1_desc: 'GitHub\'dan en son kaynak kodunu alın.',
    install_step_2_title: 'Kod Üret',
    install_step_2_desc: 'Riverpod & Freezed için build_runner çalıştırın.',
    install_step_3_title: 'Çalıştır',
    install_step_3_desc: 'iOS Simülatör veya Android Emülatör üzerinde başlatın.',

    // Footer
    footer_desc: 'Aboneliklerinizi verimli bir şekilde yönetmek için Flutter uygulaması. Özenle geliştirildi.',
    footer_made_with: 'ile yapıldı',
    footer_by: 'Yapan:',

    // Phone Interface
    phone_tab_home: 'Aboneliklerim',
    phone_tab_stats: 'Analizler',
    phone_total: 'Aylık Toplam',
    phone_subs_list: 'Abonelikleriniz',
    phone_yearly: 'Yıllık Tahmin',
    phone_trend: 'Harcama Trendi',
    phone_top_cat: 'En Çok Harcanan',
    phone_cat_ent: 'Eğlence',
    phone_upcoming: 'Yaklaşan Fatura',
    phone_nav_home: 'Ana Sayfa',
    phone_nav_stats: 'İstatistik',
    phone_nav_plan: 'Plan',
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      setLanguage(savedLang);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'tr') {
        setLanguage('tr');
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'tr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
