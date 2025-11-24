

import { Achievement, Exercise } from './types';

export const URDU_CONCEPTS = [
  { urdu: "صبر", english: "Sabr (Patience)", description: "Perseverance and persistence." },
  { urdu: "شکر", english: "Shukr (Gratitude)", description: "Thankfulness for Allah's blessings." },
  { urdu: "توکل", english: "Tawakkul (Trust)", description: "Complete reliance on God's plan." },
  { urdu: "اخلاص", english: "Ikhlas (Sincerity)", description: "Purity of intention." },
  { urdu: "تقویٰ", english: "Taqwa (God-consciousness)", description: "Being mindful of the Divine." },
  { urdu: "احسان", english: "Ihsan (Excellence)", description: "Worshipping as if you see Him." },
  { urdu: "حیاء", english: "Haya (Modesty)", description: "Self-respect and humility." },
  { urdu: "عاجزی", english: "Aajizi (Humility)", description: "Lowering oneself before the Truth." }
];

export const DUAS = [
{ arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire." },
{ arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي", english: "My Lord, expand for me my breast [with assurance] and ease for me my task." },
{ arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", english: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency." },
{ arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", english: "O Turner of the hearts, keep my heart firm upon Your religion." },
{ arabic: "رَبِّ زِدْنِي عِلْمًا", english: "My Lord, increase me in knowledge." },
{ arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", english: "Allah is sufficient for us, and [He is] the best Disposer of affairs." },
{ arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", english: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and being overpowered by men." },
{ arabic: "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
{ arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", english: "O Allah, You are The Pardoner, You love to pardon, so pardon me." },
{ arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ", english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Forgiving." }
];

export const DAILY_QUOTES = [
  "The best among you is the one who does not harm others with his tongue and hands.",
  "When you see a person who has been given more than you in money and beauty, look to those who have been given less.",
  "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more extremely.",
  "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
  "The world is a prison for the believer and a paradise for the disbeliever.",
  "Take account of yourselves before you are taken to account.",
  "Good character is half of faith.",
  "Speak good or remain silent."
];

// Updated PREDEFINED_DHIKR with ARABIC TEXT ONLY for titles
export const PREDEFINED_DHIKR = [
    { label: "سُبْحَانَ اللَّهِ", arabic: "سُبْحَانَ اللَّهِ" },
    { label: "الْحَمْدُ لِلَّهِ", arabic: "الْحَمْدُ لِلَّهِ" },
    { label: "اللَّهُ أَكْبَرُ", arabic: "اللَّهُ أَكْبَرُ" },
    { label: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ" },
    { label: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ" },
    { label: "أَسْتَغْفِرُ اللَّهَ", arabic: "أَسْتَغْفِرُ اللَّهَ" },
    { label: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ" },
    { label: "حَسْبُنَا اللَّهُ", arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ" },
    { label: "لَا حَوْلَ وَلَا قُوَّةَ", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ" },
    { label: "يَا حَيُّ يَا قَيُّومُ", arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ" }
];

export const PREDEFINED_WORKOUTS = [
    { name: "Biceps Curls", target: 30 },
    { name: "Triceps Dips", target: 20 },
    { name: "Chest Press", target: 25 },
    { name: "Situps", target: 50 },
    { name: "Squats", target: 40 },
    { name: "Plank (sec)", target: 60 },
    { name: "Cobra Stretch", target: 1 }
];

export const PARAH_NAMES_ARABIC = [
  "الم", "سيقول", "تلك الرسل", "لن تنالوا", "والمحصنات", "لا يحب الله", "وإذا سمعوا", "ولو أننا", "قال الملأ", "واعلموا",
  "يعتذرون", "وما من دابة", "وما أبرئ", "ربما", "سبحان الذي", "قال ألم", "اقترب", "قد أفلح", "وقال الذين", "أمن خلق",
  "اتل ما أوحي", "ومن يقنت", "وما لي", "فمن أظلم", "إليه يرد", "حم", "قال فما خطبكم", "قد سمع الله", "تبارك الذي", "عم يتساءلون"
];

export const QURAN_PART_LABELS = {
    rub: "Rub'",
    nisf: "Nisf",
    thalatha: "Thalatha",
    kamil: "Kamil (Parah)"
};

// Massive collection of Urdu Hadees (Sample size increased for variety)
export const HADEES_COLLECTION = [
    "اعمال کا دارومدار نیتوں پر ہے۔ (بخاری)",
    "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔ (بخاری)",
    "مسلمان وہ ہے جس کے ہاتھ اور زبان سے دوسرے مسلمان محفوظ رہیں۔ (بخاری)",
    "صفائی نصف ایمان ہے۔ (مسلم)",
    "خاموشی میں نجات ہے۔ (ترمذی)",
    "غصہ شیطان کی طرف سے ہے۔ (ابو داؤد)",
    "جو چھوٹوں پر رحم نہیں کرتا وہ ہم میں سے نہیں۔ (ابو داؤد)",
    "نماز دین کا ستون ہے۔ (بیہقی)",
    "جنت ماں کے قدموں تلے ہے۔ (نسائی)",
    "دعا مومن کا ہتھیار ہے۔ (مسند حاکم)",
    "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے۔ (مسلم)",
    "پہلوان وہ نہیں جو پچھاڑ دے، پہلوان وہ ہے جو غصے کے وقت خود پر قابو رکھے۔ (بخاری)",
    "تم میں سے کوئی مومن نہیں ہو سکتا جب تک کہ اپنے بھائی کے لیے وہی نہ پسند کرے جو اپنے لیے کرتا ہے۔ (بخاری)",
    "حیا ایمان کا حصہ ہے۔ (بخاری)",
    "علم حاصل کرنا ہر مسلمان پر فرض ہے۔ (ابن ماجہ)",
    "بہترین صدقہ وہ ہے جو تم صحت مندی کی حالت میں کرو۔ (بخاری)",
    "مظلوم کی بددعا سے بچو، کیونکہ اس کے اور اللہ کے درمیان کوئی پردہ نہیں ہوتا۔ (بخاری)",
    "مسکرانا بھی صدقہ ہے۔ (ترمذی)",
    "جو اللہ پر اور آخرت کے دن پر ایمان رکھتا ہو وہ اچھی بات کہے یا خاموش رہے۔ (بخاری)",
    "اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے۔ (مسلم)",
    "سب سے افضل عمل وقت پر نماز پڑھنا ہے۔ (بخاری)",
    "جس نے ملاوٹ کی وہ ہم میں سے نہیں۔ (مسلم)",
    "جھوٹ سے بچو، کیونکہ جھوٹ گناہ کی طرف لے جاتا ہے۔ (بخاری)",
    "اللہ کے نزدیک بہترین عمل وہ ہے جو ہمیشہ کیا جائے چاہے وہ تھوڑا ہی کیوں نہ ہو۔ (مسلم)",
    "قیامت کے دن سب سے پہلے نماز کا حساب ہوگا۔ (ترمذی)"
];

// Expanded Weekly Memorization Content
export const MEMORIZE_CONTENT = [
    { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا", english: "O Allah, I ask You for beneficial knowledge." },
    { arabic: "رَبِّ زِدْنِي عِلْمًا", english: "My Lord, increase me in knowledge." },
    { arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي", english: "O Allah, benefit me with what You have taught me." },
    { arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", english: "O Allah, help me to remember You, to thank You, and to worship You in the best of manners." },
    { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", english: "Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire!" },
    { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ", english: "O Allah, I seek refuge in You from anxiety and sorrow." },
    { arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", english: "O Turner of the hearts, keep my heart firm upon Your religion." },
    { arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", english: "Glory be to Allah and His is the praise, (and) Allah, the Greatest is free from imperfection." },
    { arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", english: "I seek forgiveness from Allah and repent to Him." },
    { arabic: "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." }
];

export const getGrowthStage = (category: string, streak: number) => {
    const c = category.toUpperCase();
  
    if (c === 'SALAH') {
       if (streak > 365) return { current: { label: 'Muqim as-Salah', threshold: 365, icon: '🕋' }, next: { label: 'Jannah Bound', threshold: 1000, icon: '🕊️' } };
       if (streak > 100) return { current: { label: 'Devout', threshold: 100, icon: '🕌' }, next: { label: 'Muqim as-Salah', threshold: 365, icon: '🕋' } };
       if (streak > 40) return { current: { label: 'Committed', threshold: 40, icon: '🤲' }, next: { label: 'Devout', threshold: 100, icon: '🕌' } };
       if (streak > 7) return { current: { label: 'Regular', threshold: 7, icon: '🧎' }, next: { label: 'Committed', threshold: 40, icon: '🤲' } };
       return { current: { label: 'Starter', threshold: 0, icon: '🚶' }, next: { label: 'Regular', threshold: 7, icon: '🧎' } };
    }
  
    if (c === 'DHIKR') {
       if (streak > 365) return { current: { label: 'Zakireen', threshold: 365, icon: '✨' }, next: { label: 'Awliya', threshold: 1000, icon: '👑' } };
       if (streak > 100) return { current: { label: 'Connected', threshold: 100, icon: '💖' }, next: { label: 'Zakireen', threshold: 365, icon: '✨' } };
       if (streak > 30) return { current: { label: 'Mindful', threshold: 30, icon: '📿' }, next: { label: 'Connected', threshold: 100, icon: '💖' } };
       return { current: { label: 'Forgetful', threshold: 0, icon: '🌫️' }, next: { label: 'Mindful', threshold: 30, icon: '📿' } };
    }
  
    if (c === 'QURAN') {
       if (streak > 365) return { current: { label: 'Walking Quran', threshold: 365, icon: '⭐' }, next: { label: 'Companion of Quran', threshold: 1000, icon: '👑' } };
       if (streak > 100) return { current: { label: 'Hafiz (In Progress)', threshold: 100, icon: '🧠' }, next: { label: 'Walking Quran', threshold: 365, icon: '⭐' } };
       if (streak > 30) return { current: { label: 'Reciter', threshold: 30, icon: '📖' }, next: { label: 'Hafiz', threshold: 100, icon: '🧠' } };
       return { current: { label: 'Student', threshold: 0, icon: '📚' }, next: { label: 'Reciter', threshold: 30, icon: '📖' } };
    }
  
    if (c === 'MDF') {
       if (streak > 365) return { current: { label: 'Pure Soul', threshold: 365, icon: '🕊️' }, next: { label: 'Angel', threshold: 1000, icon: '😇' } };
       if (streak > 90) return { current: { label: 'Guardian', threshold: 90, icon: '🛡️' }, next: { label: 'Pure Soul', threshold: 365, icon: '🕊️' } };
       if (streak > 30) return { current: { label: 'Warrior', threshold: 30, icon: '⚔️' }, next: { label: 'Guardian', threshold: 90, icon: '🛡️' } };
       if (streak > 7) return { current: { label: 'Strong', threshold: 7, icon: '💪' }, next: { label: 'Warrior', threshold: 30, icon: '⚔️' } };
       return { current: { label: 'Struggler', threshold: 0, icon: '🪵' }, next: { label: 'Strong', threshold: 7, icon: '💪' } };
    }
  
    if (c === 'HYGIENE') {
       if (streak > 100) return { current: { label: 'Pure', threshold: 100, icon: '✨' }, next: { label: 'Radiant', threshold: 365, icon: '🌟' } };
       if (streak > 30) return { current: { label: 'Clean', threshold: 30, icon: '🚿' }, next: { label: 'Pure', threshold: 100, icon: '✨' } };
       return { current: { label: 'Tidy', threshold: 0, icon: '🧹' }, next: { label: 'Clean', threshold: 30, icon: '🚿' } };
    }
  
    if (c === 'HADEES' || c === 'WISDOM') {
       if (streak > 100) return { current: { label: 'Scholar', threshold: 100, icon: '👳' }, next: { label: 'Sage', threshold: 365, icon: '🧙' } };
       if (streak > 30) return { current: { label: 'Seeker', threshold: 30, icon: '🔭' }, next: { label: 'Scholar', threshold: 100, icon: '👳' } };
       return { current: { label: 'Student', threshold: 0, icon: '📝' }, next: { label: 'Seeker', threshold: 30, icon: '🔭' } };
    }
  
    if (c === 'NIGHT') {
       if (streak > 100) return { current: { label: 'Tahajjud Regular', threshold: 100, icon: '🌌' }, next: { label: 'Night Guardian', threshold: 365, icon: '🛡️' } };
       if (streak > 30) return { current: { label: 'Vigilant', threshold: 30, icon: '🦉' }, next: { label: 'Tahajjud Regular', threshold: 100, icon: '🌌' } };
       return { current: { label: 'Sleeper', threshold: 0, icon: '😴' }, next: { label: 'Vigilant', threshold: 30, icon: '🦉' } };
    }
  
    if (c === 'FITNESS') {
       if (streak > 100) return { current: { label: 'Titan', threshold: 100, icon: '🦾' }, next: { label: 'Olympian', threshold: 365, icon: '🏛️' } };
       if (streak > 30) return { current: { label: 'Athlete', threshold: 30, icon: '🏃' }, next: { label: 'Titan', threshold: 100, icon: '🦾' } };
       return { current: { label: 'Mover', threshold: 0, icon: '🤸' }, next: { label: 'Athlete', threshold: 30, icon: '🏃' } };
    }
    
    if (c === 'HABITS' || c === 'DETOX') {
       if (streak > 100) return { current: { label: 'Lungs of Steel', threshold: 100, icon: '🫁' }, next: { label: 'New Life', threshold: 365, icon: '🌱' } };
       if (streak > 30) return { current: { label: 'Healed', threshold: 30, icon: '❤️‍🩹' }, next: { label: 'Lungs of Steel', threshold: 100, icon: '🫁' } };
       if (streak > 7) return { current: { label: 'Recovering', threshold: 7, icon: '🩹' }, next: { label: 'Healed', threshold: 30, icon: '❤️‍🩹' } };
       return { current: { label: 'Trying', threshold: 0, icon: '🚬' }, next: { label: 'Recovering', threshold: 7, icon: '🩹' } };
    }
  
    if (c === 'RAMADAN') {
       return { current: { label: 'Fasting', threshold: 0, icon: '🏮' }, next: { label: 'Rayyan', threshold: 30, icon: '🚪' } };
    }
    
    if (c === 'MEMORIZE') {
       return { current: { label: 'Hafiz', threshold: 0, icon: '🧠' }, next: { label: 'Scholar', threshold: 100, icon: '📚' } };
    }
  
    // Fallback
    return { current: { label: 'Novice', threshold: 0, icon: '🌱' }, next: { label: 'Initiate', threshold: 7, icon: '🌿' } };
};

export const getStreakTitle = (streak: number) => {
    if (streak > 730) return "Titan";
    if (streak > 365) return "Legend";
    if (streak > 100) return "Grand Master";
    if (streak > 30) return "Master";
    if (streak > 7) return "Apprentice";
    return "Novice";
};

// --- MASSIVE ACHIEVEMENTS LIST ---
export const MASTER_ACHIEVEMENTS: Achievement[] = [
    // --- RAMADAN (EASY TO TITAN) ---
    { id: 'ram_1', title: 'First Fast', description: 'Complete Day 1.', tier: 'BRONZE', icon: '🌙', category: 'RAMADAN', metric: 'COUNT', value: 1 },
    { id: 'ramadan_fast_3', title: 'Three Days', description: '3 Fasts.', tier: 'BRONZE', icon: '🌙', category: 'RAMADAN', metric: 'COUNT', value: 3 },
    { id: 'ramadan_fast_10', title: 'First Ashra', description: '10 Fasts.', tier: 'SILVER', icon: '🌙', category: 'RAMADAN', metric: 'COUNT', value: 10 },
    { id: 'ramadan_fast_20', title: 'Second Ashra', description: '20 Fasts.', tier: 'GOLD', icon: '🌙', category: 'RAMADAN', metric: 'COUNT', value: 20 },
    { id: 'ram_30', title: 'Ramadan Perfect', description: '30 Days Complete.', tier: 'PLATINUM', icon: '👑', category: 'RAMADAN', metric: 'STREAK', value: 30 },
    { id: 'ram_taraweeh_1', title: 'First Taraweeh', description: 'Attend 1 Taraweeh.', tier: 'BRONZE', icon: '🕌', category: 'RAMADAN', metric: 'COUNT', value: 1 },
    { id: 'ram_taraweeh_10', title: 'Taraweeh Regular', description: '10 Taraweehs.', tier: 'SILVER', icon: '🕌', category: 'RAMADAN', metric: 'COUNT', value: 10 },
    { id: 'ram_taraweeh_20', title: 'Night Stand', description: '20 Taraweehs.', tier: 'GOLD', icon: '🕌', category: 'RAMADAN', metric: 'COUNT', value: 20 },
    { id: 'ram_taraweeh_30', title: 'Taraweeh Master', description: '30 Taraweehs.', tier: 'PLATINUM', icon: '🕌', category: 'RAMADAN', metric: 'COUNT', value: 30 },

    // --- SALAH (EASY TO EXTREME) ---
    // Total Count Milestones
    { id: 'salah_total_1', title: 'First Prayer', description: '1 Prayer logged.', tier: 'BRONZE', icon: '🤲', category: 'SALAH', metric: 'COUNT', value: 1 },
    { id: 'salah_total_10', title: 'Double Digit', description: '10 Prayers.', tier: 'BRONZE', icon: '🤲', category: 'SALAH', metric: 'COUNT', value: 10 },
    { id: 'salah_total_50', title: 'Fifty Prayers', description: '50 Prayers.', tier: 'BRONZE', icon: '🤲', category: 'SALAH', metric: 'COUNT', value: 50 },
    { id: 'salah_total_100', title: 'Centurion', description: '100 Prayers.', tier: 'SILVER', icon: '💯', category: 'SALAH', metric: 'COUNT', value: 100 },
    { id: 'salah_total_250', title: 'Devoted', description: '250 Prayers.', tier: 'SILVER', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 250 },
    { id: 'salah_total_500', title: 'Faithful Servant', description: '500 Prayers.', tier: 'GOLD', icon: '🤲', category: 'SALAH', metric: 'COUNT', value: 500 },
    { id: 'salah_total_1000', title: 'The 1K Club', description: '1,000 Prayers.', tier: 'PLATINUM', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 1000 },
    { id: 'salah_total_2500', title: 'Dedicated Soul', description: '2,500 Prayers.', tier: 'DIAMOND', icon: '💎', category: 'SALAH', metric: 'COUNT', value: 2500 },
    { id: 'salah_total_5000', title: 'Abid', description: '5,000 Prayers.', tier: 'TITAN', icon: '💎', category: 'SALAH', metric: 'COUNT', value: 5000 },
    { id: 'salah_total_10000', title: 'Muqim as-Salah', description: '10,000 Prayers.', tier: 'LEGEND', icon: '🕋', category: 'SALAH', metric: 'COUNT', value: 10000 },
    { id: 'salah_total_25000', title: 'Eternal Prostration', description: '25,000 Prayers.', tier: 'ETERNAL', icon: '🌌', category: 'SALAH', metric: 'COUNT', value: 25000 },

    // Streaks
    { id: 'salah_streak_7', title: 'Weekly Warrior', description: '7 Day Streak.', tier: 'BRONZE', icon: '📅', category: 'SALAH', metric: 'STREAK', value: 7 },
    { id: 'salah_streak_30', title: 'Monthly Habit', description: '30 Day Streak.', tier: 'SILVER', icon: '📅', category: 'SALAH', metric: 'STREAK', value: 30 },
    { id: 'salah_streak_100', title: 'Unbreakable', description: '100 Day Streak.', tier: 'GOLD', icon: '🛡️', category: 'SALAH', metric: 'STREAK', value: 100 },
    { id: 'salah_streak_365', title: 'Year of Worship', description: '365 Day Streak.', tier: 'PLATINUM', icon: '👑', category: 'SALAH', metric: 'STREAK', value: 365 },

    // Fajr Specific
    { id: 'salah_fajr_10', title: 'Early Bird', description: '10 Fajr.', tier: 'BRONZE', icon: '🌅', category: 'SALAH', metric: 'COUNT', value: 10 },
    { id: 'salah_fajr_30', title: 'Dawn Warrior', description: '30 Fajr.', tier: 'SILVER', icon: '🌅', category: 'SALAH', metric: 'COUNT', value: 30 },
    { id: 'salah_fajr_100', title: 'Dawn Devotee', description: '100 Fajr.', tier: 'GOLD', icon: '🌅', category: 'SALAH', metric: 'COUNT', value: 100 },
    { id: 'salah_fajr_500', title: 'Light of Fajr', description: '500 Fajr.', tier: 'DIAMOND', icon: '☀️', category: 'SALAH', metric: 'COUNT', value: 500 },

    // Jamaah Specific
    { id: 'salah_jamaah_10', title: 'Group Effort', description: '10 Jamaah.', tier: 'BRONZE', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 10 },
    { id: 'salah_jamaah_50', title: 'Community Pillar', description: '50 Jamaah.', tier: 'SILVER', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 50 },
    { id: 'salah_jamaah_100', title: 'Mosque Regular', description: '100 Jamaah.', tier: 'GOLD', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 100 },
    { id: 'salah_jamaah_500', title: 'Heart of Masjid', description: '500 Jamaah.', tier: 'DIAMOND', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 500 },
    
    // Tahajjud
    { id: 'salah_tahajjud_1', title: 'Night Caller', description: '1 Tahajjud.', tier: 'BRONZE', icon: '🌌', category: 'SALAH', metric: 'COUNT', value: 1 },
    { id: 'salah_tahajjud_10', title: 'Secret Whisperer', description: '10 Tahajjud.', tier: 'SILVER', icon: '🌌', category: 'SALAH', metric: 'COUNT', value: 10 },
    { id: 'salah_tahajjud_50', title: 'Beloved Servant', description: '50 Tahajjud.', tier: 'GOLD', icon: '🌌', category: 'SALAH', metric: 'COUNT', value: 50 },

    // --- DHIKR (EASY TO EXTREME) ---
    { id: 'dhikr_total_100', title: 'First Tasbih', description: '100 Dhikr.', tier: 'BRONZE', icon: '📿', category: 'DHIKR', metric: 'COUNT', value: 100 },
    { id: 'dhikr_total_1000', title: 'Thousand Praises', description: '1,000 Dhikr.', tier: 'BRONZE', icon: '📿', category: 'DHIKR', metric: 'COUNT', value: 1000 },
    { id: 'dhikr_total_5000', title: 'Rememberer', description: '5,000 Dhikr.', tier: 'SILVER', icon: '💎', category: 'DHIKR', metric: 'COUNT', value: 5000 },
    { id: 'dhikr_total_10000', title: 'Heart Polish', description: '10,000 Dhikr.', tier: 'GOLD', icon: '💎', category: 'DHIKR', metric: 'COUNT', value: 10000 },
    { id: 'dhikr_total_50000', title: 'Remembrance Master', description: '50,000 Dhikr.', tier: 'PLATINUM', icon: '🌟', category: 'DHIKR', metric: 'COUNT', value: 50000 },
    { id: 'dhikr_total_100000', title: 'Master of Praise', description: '100,000 Dhikr.', tier: 'DIAMOND', icon: '📿', category: 'DHIKR', metric: 'COUNT', value: 100000 },
    { id: 'dhikr_total_500000', title: 'Tongue of Light', description: '500,000 Dhikr.', tier: 'TITAN', icon: '✨', category: 'DHIKR', metric: 'COUNT', value: 500000 },
    { id: 'dhikr_total_1000000', title: 'Friend of Allah', description: '1,000,000 Dhikr.', tier: 'ETERNAL', icon: '👑', category: 'DHIKR', metric: 'COUNT', value: 1000000 },

    // --- FITNESS (EASY TO EXTREME) ---
    { id: 'fitness_total_100', title: 'Warming Up', description: '100 Pushups.', tier: 'BRONZE', icon: '🏋️', category: 'FITNESS', metric: 'COUNT', value: 100 },
    { id: 'fitness_total_500', title: 'Strength Builder', description: '500 Pushups.', tier: 'SILVER', icon: '🏋️', category: 'FITNESS', metric: 'COUNT', value: 500 },
    { id: 'fitness_total_1000', title: 'Iron Muscle', description: '1,000 Pushups.', tier: 'GOLD', icon: '🦾', category: 'FITNESS', metric: 'COUNT', value: 1000 },
    { id: 'fitness_total_2500', title: 'Iron Body', description: '2,500 Pushups.', tier: 'PLATINUM', icon: '🦾', category: 'FITNESS', metric: 'COUNT', value: 2500 },
    { id: 'fitness_pushups_5000', title: 'Spartan', description: '5,000 Pushups.', tier: 'DIAMOND', icon: '🛡️', category: 'FITNESS', metric: 'COUNT', value: 5000 },
    { id: 'fitness_pushups_10000', title: 'Olympian', description: '10,000 Pushups.', tier: 'TITAN', icon: '🏛️', category: 'FITNESS', metric: 'COUNT', value: 10000 },
    { id: 'fitness_pushups_50000', title: 'God of War', description: '50,000 Pushups.', tier: 'ETERNAL', icon: '🔥', category: 'FITNESS', metric: 'COUNT', value: 50000 },
    { id: 'fitness_streak_7', title: 'Week Strong', description: '7 Day Streak.', tier: 'BRONZE', icon: '📅', category: 'FITNESS', metric: 'STREAK', value: 7 },
    { id: 'fitness_streak_30', title: 'Month of Power', description: '30 Day Streak.', tier: 'SILVER', icon: '📅', category: 'FITNESS', metric: 'STREAK', value: 30 },
    { id: 'fitness_streak_100', title: 'Unstoppable', description: '100 Day Streak.', tier: 'DIAMOND', icon: '🔥', category: 'FITNESS', metric: 'STREAK', value: 100 },

    // --- QURAN (EASY TO EXTREME) ---
    { id: 'quran_juz_1', title: 'First Juz', description: 'Finish Juz 1.', tier: 'BRONZE', icon: '1️⃣', category: 'QURAN', metric: 'VALUE', value: 1 },
    { id: 'quran_juz_5', title: 'Five Juz', description: 'Reach Juz 5.', tier: 'SILVER', icon: '5️⃣', category: 'QURAN', metric: 'VALUE', value: 5 },
    { id: 'quran_juz_15', title: 'Halfway There', description: 'Reach Juz 15.', tier: 'GOLD', icon: '🌓', category: 'QURAN', metric: 'VALUE', value: 15 },
    { id: 'quran_juz_30', title: 'Quran Completed', description: 'Reach Juz 30.', tier: 'PLATINUM', icon: '✅', category: 'QURAN', metric: 'VALUE', value: 30 },
    { id: 'quran_khatam_gen_1', title: 'First Khatam', description: '1 Full Khatam.', tier: 'PLATINUM', icon: '📖', category: 'QURAN', metric: 'VALUE', value: 1 },
    { id: 'quran_khatam_3', title: 'Triple Light', description: '3 Khatams.', tier: 'DIAMOND', icon: '✨', category: 'QURAN', metric: 'VALUE', value: 3 },
    { id: 'quran_khatam_10', title: 'Walking Quran', description: '10 Khatams.', tier: 'TITAN', icon: '👑', category: 'QURAN', metric: 'VALUE', value: 10 },
    { id: 'quran_khatam_50', title: 'Living Miracle', description: '50 Khatams.', tier: 'ETERNAL', icon: '🌟', category: 'QURAN', metric: 'VALUE', value: 50 },
    { id: 'quran_streak_30', title: 'Reciter', description: '30 Day Streak.', tier: 'SILVER', icon: '📖', category: 'QURAN', metric: 'STREAK', value: 30 },

    // --- MDF/NOFAP (EASY TO EXTREME) ---
    { id: 'mdf_streak_3', title: 'First Victory', description: '3 Days Clean.', tier: 'BRONZE', icon: '🎯', category: 'MDF', metric: 'STREAK', value: 3 },
    { id: 'mdf_streak_7', title: 'Clean Week', description: '7 Days Clean.', tier: 'BRONZE', icon: '🛡️', category: 'MDF', metric: 'STREAK', value: 7 },
    { id: 'mdf_streak_14', title: 'Fortnight', description: '14 Days Clean.', tier: 'SILVER', icon: '🛡️', category: 'MDF', metric: 'STREAK', value: 14 },
    { id: 'mdf_streak_30', title: 'Monthly Fort', description: '30 Days Clean.', tier: 'GOLD', icon: '🛡️', category: 'MDF', metric: 'STREAK', value: 30 },
    { id: 'mdf_streak_90', title: 'Guardian', description: '90 Days Clean.', tier: 'PLATINUM', icon: '⚔️', category: 'MDF', metric: 'STREAK', value: 90 },
    { id: 'mdf_streak_180', title: 'Iron Will', description: '180 Days Clean.', tier: 'DIAMOND', icon: '💎', category: 'MDF', metric: 'STREAK', value: 180 },
    { id: 'mdf_streak_365', title: 'Pure Soul', description: '1 Year Clean.', tier: 'TITAN', icon: '🕊️', category: 'MDF', metric: 'STREAK', value: 365 },
    { id: 'mdf_streak_1000', title: 'Angel Status', description: '1000 Days Clean.', tier: 'ETERNAL', icon: '😇', category: 'MDF', metric: 'STREAK', value: 1000 },

    // --- HYGIENE ---
    { id: 'hygiene_total_1', title: 'Clean Start', description: '1 Task Done.', tier: 'BRONZE', icon: '💧', category: 'HYGIENE', metric: 'COUNT', value: 1 },
    { id: 'hygiene_water_50', title: 'Hydration Hero', description: '50 Days 8 Glasses.', tier: 'GOLD', icon: '💧', category: 'HYGIENE', metric: 'COUNT', value: 50 },
    { id: 'hygiene_total_100', title: 'Clean Living', description: '100 Tasks.', tier: 'SILVER', icon: '✨', category: 'HYGIENE', metric: 'COUNT', value: 100 },
    { id: 'hygiene_total_500', title: 'Sparkling', description: '500 Tasks.', tier: 'GOLD', icon: '✨', category: 'HYGIENE', metric: 'COUNT', value: 500 },
    { id: 'hygiene_total_1000', title: 'Purity Master', description: '1,000 Tasks Done.', tier: 'TITAN', icon: '💎', category: 'HYGIENE', metric: 'COUNT', value: 1000 },

    // --- HADEES ---
    { id: 'hadees_total_1', title: 'Daily Insight', description: '1 Hadees Read.', tier: 'BRONZE', icon: '💡', category: 'HADEES', metric: 'COUNT', value: 1 },
    { id: 'hadees_total_50', title: 'Knowledge Seeker', description: '50 Hadees.', tier: 'GOLD', icon: '📜', category: 'HADEES', metric: 'COUNT', value: 50 },
    { id: 'hadees_total_200', title: 'Wisdom Collector', description: '200 Hadees.', tier: 'PLATINUM', icon: '📚', category: 'HADEES', metric: 'COUNT', value: 200 },
    { id: 'hadees_total_500', title: 'Scholar', description: '500 Hadees.', tier: 'DIAMOND', icon: '👳', category: 'HADEES', metric: 'COUNT', value: 500 },
    { id: 'hadees_total_1000', title: 'Sage', description: '1,000 Hadees.', tier: 'TITAN', icon: '🧙', category: 'HADEES', metric: 'COUNT', value: 1000 },

    // --- NIGHT ROUTINE ---
    { id: 'night_total_1', title: 'Nightly Protector', description: '1 Night Routine.', tier: 'BRONZE', icon: '🌌', category: 'NIGHT', metric: 'COUNT', value: 1 },
    { id: 'night_total_25', title: 'Peaceful Sleeper', description: '25 Nights.', tier: 'SILVER', icon: '🛌', category: 'NIGHT', metric: 'COUNT', value: 25 },
    { id: 'night_total_100', title: 'Protected Soul', description: '100 Nights.', tier: 'PLATINUM', icon: '🛡️', category: 'NIGHT', metric: 'COUNT', value: 100 },
    { id: 'night_total_365', title: 'Night Guardian', description: '365 Nights.', tier: 'TITAN', icon: '🦉', category: 'NIGHT', metric: 'COUNT', value: 365 },
    { id: 'night_total_1000', title: 'Awliya of Night', description: '1000 Nights.', tier: 'ETERNAL', icon: '🌟', category: 'NIGHT', metric: 'COUNT', value: 1000 },

    // --- MEMORIZE ---
    { id: 'memorize_1', title: 'First Du\'a', description: 'Memorize 1 Du\'a.', tier: 'BRONZE', icon: '🤲', category: 'MEMORIZE', metric: 'COUNT', value: 1 },
    { id: 'memorize_3', title: 'Quarterly Student', description: '3 Du\'as.', tier: 'SILVER', icon: '📚', category: 'MEMORIZE', metric: 'COUNT', value: 3 },
    { id: 'memorize_10', title: 'Growing Hafiz', description: '10 Duas.', tier: 'GOLD', icon: '🧠', category: 'MEMORIZE', metric: 'COUNT', value: 10 },
    { id: 'memorize_50', title: 'Walking Treasury', description: '50 Duas.', tier: 'PLATINUM', icon: '📜', category: 'MEMORIZE', metric: 'COUNT', value: 50 },
    { id: 'memorize_100', title: 'Walking Quran', description: '100 Duas.', tier: 'TITAN', icon: '🧠', category: 'MEMORIZE', metric: 'COUNT', value: 100 },

    // --- HABITS/DETOX ---
    { id: 'habits_streak_1', title: 'First Control', description: '1 day clean.', tier: 'BRONZE', icon: '🟢', category: 'HABITS', metric: 'STREAK', value: 1 },
    { id: 'habits_streak_14', title: 'Fortnight Free', description: '14 days clean.', tier: 'SILVER', icon: '🛡️', category: 'HABITS', metric: 'STREAK', value: 14 },
    { id: 'habits_streak_30', title: 'Month Free', description: '30 days clean.', tier: 'GOLD', icon: '🛡️', category: 'HABITS', metric: 'STREAK', value: 30 },
    { id: 'habits_streak_100', title: 'New Life', description: '100 days clean.', tier: 'DIAMOND', icon: '🌱', category: 'HABITS', metric: 'STREAK', value: 100 },
    { id: 'habits_streak_365', title: 'Reborn', description: '1 Year Clean.', tier: 'TITAN', icon: '👑', category: 'HABITS', metric: 'STREAK', value: 365 }
];
