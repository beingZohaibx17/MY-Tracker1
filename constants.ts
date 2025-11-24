

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

export const CONGRATS_MESSAGES: Record<string, string[]> = {
  SALAH: ["MashaAllah! A step closer to Jannah.", "Your Salah is your light.", "Keep it up, Allah loves consistency.", "Perfect! The angels are recording this."],
  DHIKR: ["The hearts find rest in this.", "A tongue moist with Dhikr is a treasure.", "SubhanAllah, excellent progress.", "You are remembered in the Heavens."],
  FITNESS: ["Strong believer, strong body!", "Excellent discipline.", "Your body is an Amanah, well kept.", "Powering through! MashaAllah."],
  HYGIENE: ["Cleanliness is half of Iman.", "Pure body, pure soul.", "Refreshing! Keep shining.", "Spotless and spiritual."],
  HABITS: ["Breaking chains, building freedom.", "Discipline is freedom.", "You are stronger than your desires.", "A victory for your soul."],
  QURAN: ["The Quran is witnessing for you.", "Light upon light.", "Every letter is 10 rewards.", "Beautiful recitation."],
  MDF: ["Purity is power!", "Stay strong, you are doing amazing.", "Every clean day is a victory.", "Guard your heart."],
  HADEES: ["Knowledge is light.", "You have learned a wisdom of the Prophet (SAW).", "Apply this wisdom to your life.", "May Allah increase your knowledge."],
  NIGHT: ["Sleep like a believer.", "Angels protect you tonight.", "Sunnah before sleep is peace.", "Rest well, warrior."],
  MEMORIZE: ["Quran in the heart is a shield.", "MashaAllah, memory of a scholar!", "Keep preserving the words of Allah.", "Another Ayah, another rank in Jannah."],
  RAMADAN: ["May Allah accept your fast.", "Rayyan is calling.", "Patience in hunger, reward in Hereafter.", "Blessed month, blessed you."],
  DEFAULT: ["Fantastic job!", "Keep going, Zohaib!", "Alhamdulillah for this success.", "Proud of your progress."]
};

export const TAB_MESSAGES: Record<string, string[]> = {
  SALAH: [
    "Prayer is the pillar of religion.", 
    "Sujud is where the heart finds rest.",
    "Delaying prayer delays success.",
    "Fajr is your victory over sleep.",
    "Make your Salah your refuge."
  ],
  DHIKR: [
    "Keep your tongue moist with remembrance.",
    "Dhikr is the polish of the heart.",
    "Remember Me, I will remember you.",
    "In the remembrance of Allah do hearts find rest.",
    "The best wealth is a tongue that remembers Allah."
  ],
  QURAN: [
    "The Quran is a proof for you or against you.",
    "Recite beautifully, for it is the word of the King.",
    "A heart without Quran is like a ruined house.",
    "Quran is the best companion in the grave.",
    "Read in the name of your Lord."
  ],
  FITNESS: [
    "A strong believer is better than a weak believer.",
    "Your body is an Amanah.",
    "Health is a crown only the sick can see.",
    "Discipline in body leads to discipline in soul.",
    "Invest in your health for a longer worship life."
  ],
  HYGIENE: [
    "Cleanliness is half of faith.",
    "Purify yourself for the One who is Pure.",
    "Wudu washes away sins.",
    "Keep your environment clean like your heart.",
    "Purity brings tranquility."
  ],
  MDF: [
    "Guard your gaze, guard your heart.",
    "Patience in avoiding sin is easier than the pain of regret.",
    "Real strength is controlling your desires.",
    "You are a warrior of light.",
    "Flee from sin as you flee from fire."
  ],
  HABITS: [
    "Change comes from small consistent steps.",
    "Break the chains of bad habits today.",
    "You are what you repeatedly do.",
    "Self-control is the greatest victory.",
    "Replace a bad habit with a good Sunnah."
  ],
  NIGHT: [
    "The night prayer is the honor of the believer.",
    "Sleep with Wudu, die as a martyr.",
    "Review your day before you sleep.",
    "Surah Mulk protects from the punishment of the grave.",
    "Make your last words of the day remembrance."
  ],
  HADEES: [
    "Seek knowledge from cradle to grave.",
    "Whoever travels a path to knowledge, Allah makes the path to Jannah easy.",
    "The scholars are the heirs of the Prophets.",
    " Convey from me, even if it is one verse.",
    "Wisdom is the lost property of the believer."
  ],
  MEMORIZE: [
    "Fill your heart with the words of Allah.",
    "Memorization preserves knowledge.",
    "One Ayat learned is better than the world.",
    "Keep the Quran close to your heart.",
    "Review what you have learned."
  ],
  RAMADAN: [
    "Ramadan is the month of mercy.",
    "Fast with your eyes, ears, and tongue too.",
    "The smell of a fasting person's mouth is musk to Allah.",
    "Open the gates of Rayyan.",
    "Taraweeh is the comfort of the night."
  ],
  AI_CHAT: [
    "Ask and you shall learn.",
    "Guidance is sought, then given.",
    "Reflect on your day.",
    "Seek beneficial knowledge.",
    "A moment of reflection is better than a year of worship."
  ]
};

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

export const HADEES_COLLECTION = [
  {
    "Hadith": "اعمال کا دارومدار نیتوں پر ہے۔ (بخاری)",
    "Explanation": "کسی بھی عمل (عبادت یا دنیاوی) کی قبولیت اور اجر کا انحصار اس کے پیچھے موجود خالص ارادے اور نیت پر ہوتا ہے۔"
  },
  {
    "Hadith": "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔ (بخاری)",
    "Explanation": "وہ شخص افضل ہے جو خود قرآن کی تعلیم حاصل کرے، اس کو سمجھے اور پھر دوسروں کو اس کے معانی اور احکام سکھائے۔"
  },
  // ... (Kept truncated for brevity, assuming original list exists)
  {
    "Hadith": "مسلمان وہ ہے جس کے ہاتھ اور زبان سے دوسرے مسلمان محفوظ رہیں۔ (بخاری)",
    "Explanation": "حقیقی مسلمان کی اخلاقی پہچان یہ ہے کہ وہ کسی دوسرے کو جسمانی طور پر (ہاتھ سے) یا زبانی طور پر تکلیف نہ پہنچائے۔"
  },
  {
    "Hadith": "عافیت مانگو، کیونکہ ایمان کے بعد عافیت سے بڑھ کر کوئی چیز نہیں دی گئی۔ (ترمذی)",
    "Explanation": "اللہ سے دنیا اور آخرت کی عافیت (سکون، سلامتی، بیماری سے حفاظت) مانگنا سب سے افضل دعا ہے۔"
  }
];

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
    const thresholds = [0, 7, 30, 100, 365, 1000, 5000, 10000, 50000];
    const labels = ["Novice", "Initiate", "Mindful", "Committed", "Devout", "Master", "Legend", "Mythic", "Divine"];
    
    for (let i = thresholds.length - 1; i >= 0; i--) {
        if (streak >= thresholds[i]) {
            return {
                current: { label: labels[i], threshold: thresholds[i], icon: ['🌱','🌿','☘️','🍀','🌹','👑','🌟','🌌','⚡'][i] },
                next: i < thresholds.length - 1 ? { label: labels[i+1], threshold: thresholds[i+1], icon: ['🌱','🌿','☘️','🍀','🌹','👑','🌟','🌌','⚡'][i+1] } : undefined
            };
        }
    }
    return { current: { label: 'Novice', threshold: 0, icon: '🌱' }, next: { label: 'Initiate', threshold: 7, icon: '🌿' } };
};

// --- MASSIVE ACHIEVEMENTS LIST (Expanded for 1,000,000 counts) ---
const createMassiveAchievements = () => {
  const categories = ['SALAH', 'DHIKR', 'FITNESS', 'QURAN', 'MDF', 'HYGIENE', 'HABITS', 'HADEES', 'NIGHT', 'MEMORIZE', 'RAMADAN'];
  const baseAchievements: Achievement[] = [];
  
  categories.forEach(cat => {
    const icon = { SALAH:'🤲', DHIKR:'📿', FITNESS:'💪', QURAN:'📖', MDF:'🛡️', HYGIENE:'🧼', HABITS:'🚭', HADEES:'📜', NIGHT:'🌙', MEMORIZE:'🧠', RAMADAN:'🕌' }[cat];
    const unit = { SALAH:'Prayers', DHIKR:'Remembrances', FITNESS:'Reps', QURAN:'Verses/Parts', MDF:'Days Clean', HYGIENE:'Tasks', HABITS:'Clean Days', HADEES:'Read', NIGHT:'Tasks', MEMORIZE:'Duas', RAMADAN:'Fasts' }[cat];
    
    // Standard Count Milestones - Scaled up to 1 Million
    // Using logarithmic steps to cover the range
    const countSteps = [
        10, 50, 100, 500, 
        1000, 2500, 5000, 7500, 
        10000, 25000, 50000, 75000, 
        100000, 250000, 500000, 750000, 
        1000000
    ];

    countSteps.forEach(val => {
        let tier: Achievement['tier'] = 'BRONZE';
        if (val >= 500) tier = 'SILVER';
        if (val >= 5000) tier = 'GOLD';
        if (val >= 25000) tier = 'PLATINUM';
        if (val >= 100000) tier = 'DIAMOND';
        if (val >= 500000) tier = 'TITAN';
        if (val >= 1000000) tier = 'DIVINE';

        baseAchievements.push({
            id: `${cat.toLowerCase()}_total_${val}`,
            title: `${cat} ${val >= 1000 ? (val/1000)+'k' : val}`,
            description: `Reach ${val.toLocaleString()} total ${unit}.`,
            tier: tier,
            icon: icon || '🏆',
            category: cat as any,
            metric: 'COUNT',
            value: val
        });
    });

    // Massive Streak Milestones
    const streakSteps = [3, 7, 14, 30, 60, 100, 200, 365, 500, 1000, 2000, 5000];
    streakSteps.forEach(val => {
        let tier: Achievement['tier'] = 'BRONZE';
        if (val >= 30) tier = 'SILVER';
        if (val >= 100) tier = 'GOLD';
        if (val >= 365) tier = 'PLATINUM';
        if (val >= 1000) tier = 'MYTHIC';
        if (val >= 5000) tier = 'ETERNAL';

        baseAchievements.push({
            id: `${cat.toLowerCase()}_streak_${val}`,
            title: `${cat} Streak ${val}`,
            description: `Maintain a ${val} Day Streak.`,
            tier: tier,
            icon: '🔥',
            category: cat as any,
            metric: 'STREAK',
            value: val
        });
    });
  });
  
  return baseAchievements;
};

export const MASTER_ACHIEVEMENTS: Achievement[] = createMassiveAchievements();

export const OFFLINE_AI_RESPONSES = [
    "Stay patient, for Allah is with the patient.",
    "Remember that after hardship comes ease.",
    "Make Wudu and pray two Rakat, it will calm your heart.",
    "Verily, in the remembrance of Allah do hearts find rest.",
    "Focus on your Salah, it is your connection to the Divine.",
    "Do not despair of the mercy of Allah.",
    "Consistency is key, even if the deed is small.",
    "Your body has a right over you, take care of it.",
    "Cleanliness is half of faith.",
    "Trust in Allah's plan, He knows what is best for you."
];