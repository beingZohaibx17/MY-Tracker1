

import { Achievement } from './types';

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
{ arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ", english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Forgiving." },
{ arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ", english: "My Lord, make me an establisher of prayer, and [make] of my descendants. Our Lord, and accept my supplication." },
{ arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ", english: "Our Lord, forgive me and my parents and the believers the Day the account is established." },
{ arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي وَاجْعَلْ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلْ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ", english: "O Allah, set right for me my religion which is the safeguard of my affairs, and set right for me my worldly affairs wherein is my living, and set right for me my Hereafter to which is my return, and make life for me a source of abundance for every good and make death a source of comfort for me protecting me against every evil." },
{ arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ", english: "O Allah, I seek refuge in You from the withdrawal of Your blessing and the change of Your protection and the sudden onset of Your punishment and all Your displeasure." },
{ arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", english: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous." },
{ arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", english: "Exalted is Allah, and praised is He. Exalted is Allah, the Most Great." },
{ arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنْ النَّارِ", english: "O Allah, I ask You for Paradise and I seek refuge in You from the Fire." },
{ arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ", english: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me." },
{ arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", english: "O Allah, help me to remember You, to thank You, and to worship You in the best manner." },
{ arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", english: "O Ever-Living, O Sustainer, by Your mercy I seek assistance. Correct for me all of my affairs and do not leave me to myself, even for the blink of an eye." },
{ arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", english: "O Allah, suffice me with Your lawful against Your prohibited, and make me independent of all those besides You by Your Grace." },
{ arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَسَيِّئْ الْأَسْقَامِ", english: "O Allah, I seek refuge in You from leucoderma, madness, leprosy, and all evil diseases." },
{ arabic: "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ", english: "My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication." },
{ arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا وَفِي سَمْعِي نُورًا وَفِي بَصَرِي نُورًا وَمِنْ فَوْقِي نُورًا وَمِنْ تَحْتِي نُورًا وَعَنْ يَمِينِي نُورًا وَعَنْ شِمَالِي نُورًا وَمِنْ أَمَامِي نُورًا وَمِنْ خَلْفِي نُورًا وَاجْعَلْ لِي فِي نَفْسِي نُورًا", english: "O Allah, place light in my heart, and light in my tongue, and light in my hearing, and light in my sight, and light above me, and light below me, and light on my right, and light on my left, and light in front of me, and light behind me, and place light in my soul." },
{ arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ", english: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower." }
];

export const MEMORIZE_CONTENT = [
  [
  { "week": 1, "arabic": "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", "english": "O Allah, help me to remember You, to thank You, and to worship You in the best of manners." },
  { "week": 2, "arabic": "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", "english": "O Turner of the hearts, make my heart firm upon Your religion." },
  { "week": 3, "arabic": "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", "english": "Our Lord, let not our hearts deviate after You have guided us." },
  { "week": 4, "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ", "english": "O Allah, I ask You for Paradise and seek Your protection from the Fire." },
  { "week": 5, "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", "english": "Glory be to Allah and His praise, Glory be to Allah the Great." }
]
];

export const RAMADAN_TIPS = [
  { title: "Hydration Strategy", desc: "Drink 250ml water every hour between Iftar and Suhoor rather than chugging." },
  { title: "High-Fiber Suhoor", desc: "Oats, dates, and whole grains release energy slowly, keeping you full longer." },
  { title: "Digital Detox", desc: "Limit social media to 15 mins/day. Replace scrolling with Dhikr." },
  { title: "Qailulah (Power Nap)", desc: "A 20-min nap before Dhuhr boosts energy for Iftar and Taraweeh." },
  { title: "Pre-Iftar Walk", desc: "Light walking 30 mins before Iftar burns fat efficiently." },
  { title: "Home Charity Box", desc: "Put small change in a box daily. Donate total at Eid." },
  { title: "Commute with Quran", desc: "Listen to recitation while driving or traveling." },
  { title: "The Miswak", desc: "Revive the Sunnah. Use Miswak before every wudu." },
  { title: "Dua List", desc: "Prepare a written list of 5 key duas to ask at Iftar time." },
  { title: "Light Iftar", desc: "Break fast with dates/water. Pray Maghrib. Then eat dinner." }
];

export const FITNESS_SCHEDULE: Record<number, string> = {
  0: "Rest Day", 
  1: "Upper Body", 
  2: "Lower Body", 
  3: "Rest Day", 
  4: "Upper Body", 
  5: "Lower Body", 
  6: "Active Recovery" 
};

export const PARAH_NAMES = [
  "الم", "سيقول السفهاء", "تلك الرسل", "لن تنالوا", "المحصنات", "لا يحب الله", "وإذا سمعوا", "ولو أننا", "قال الملأ", "واعلموا",
  "يعتذرون", "وما من دابة", "وما أبرئ", "ربما", "سبحان الذي", "قال ألم", "اقترب للناس", "قد أفلح", "وقال الذين", "أمن خلق",
  "اتل ما أوحي", "ومن يقنت", "وما لي", "فمن أظلم", "إليه يرد", "حم", "قال فما خطبكم", "قد سمع الله", "تبارك الذي", "عم يتساءلون"
];

export const QURAN_PART_LABELS = {
  rub: "رُبْع",
  nisf: "نِصْف",
  thalatha: "ثَلَاثَة",
  kamil: "كَامِل"
};

export const DHIKR_LABELS = {
  astaghfirullah: "أَسْتَغْفِرُ اللَّهَ",
  rabbiInni: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ"
};

export const STREAK_MILESTONES = [3, 7, 30, 100, 365, 500, 1000, 2000, 3000, 3650];

export const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const defineAchievement = (
  id: string, 
  title: string, 
  desc: string, 
  tier: Achievement['tier'], 
  category: Achievement['category'], 
  icon: string,
  metric: Achievement['metric'] = 'STREAK',
  value: number
): Achievement => ({
  id, title, description: desc, tier, category, icon, metric, value
});

export const getStreakTitle = (streak: number): string => {
  if (streak < 3) return "Novice";
  if (streak < 7) return "Initiate";
  if (streak < 14) return "Apprentice";
  if (streak < 30) return "Disciplined";
  if (streak < 60) return "Guardian";
  if (streak < 90) return "Warrior";
  if (streak < 180) return "Master";
  if (streak < 365) return "Grandmaster";
  if (streak < 1000) return "Sage";
  if (streak < 2000) return "Ascendant";
  return "Eternal";
};

// --- ALGORITHMIC ACHIEVEMENT GENERATOR ---
const generateStreakAchievements = (category: Achievement['category'], icon: string) => {
  const levels = [
    1, 3, 5, 7, 10, 14, 21, 30, 40, 45, 50, 60, 70, 80, 90, 100, 
    120, 150, 180, 200, 250, 300, 350, 365, 400, 450, 500, 600, 700, 800, 900, 1000,
    1200, 1500, 1800, 2000, 2500, 3000, 3500, 3650
  ];
  
  return levels.map(day => ({
    id: `${category.toLowerCase()}_streak_${day}`,
    title: `${getStreakTitle(day)} ${category === 'SALAH' ? 'Worshipper' : category === 'DHIKR' ? 'Zakireen' : category === 'QURAN' ? 'Reciter' : 'Guardian'}`,
    description: `Reach ${day} days streak in ${category}.`,
    tier: day >= 3650 ? 'TITAN' : day >= 1000 ? 'ETERNAL' : day >= 365 ? 'LEGEND' : day >= 100 ? 'DIAMOND' : day >= 30 ? 'GOLD' : day >= 7 ? 'SILVER' : 'BRONZE',
    category,
    icon,
    metric: 'STREAK',
    value: day
  } as Achievement));
};

// --- SPECIAL ACHIEVEMENTS (HARDCORE/COUNT/XP) ---

const salahSpecial = [
  defineAchievement('s_titan_fajr', 'Guardian of Dawn', 'Complete 40 Days of consecutive Fajr in Jamaah', 'TITAN', 'SALAH', '⚔️', 'SPECIAL', 40),
  defineAchievement('s_titan_tahajjud', 'Night Vigilante', 'Perform Tahajjud prayer for 40 nights in a row', 'TITAN', 'SALAH', '🌙', 'SPECIAL', 40),
  defineAchievement('s_titan_jamaah', 'Mosque Heart', 'Pray all 5 prayers in Jamaah for 30 days straight', 'TITAN', 'SALAH', '🕌', 'SPECIAL', 30),
];

const quranSpecial = [
  defineAchievement('q_parah_1', 'The Opening', 'Complete reading the 1st Parah of the Quran', 'BRONZE', 'QURAN', '1️⃣', 'VALUE', 1),
  defineAchievement('q_parah_5', 'First Quarter', 'Reach the 5th Parah in your recitation journey', 'SILVER', 'QURAN', '5️⃣', 'VALUE', 5),
  defineAchievement('q_parah_15', 'Halfway There', 'Reach the 15th Parah (Half Quran Completed)', 'GOLD', 'QURAN', '🏁', 'VALUE', 15),
  defineAchievement('q_parah_30', 'The Completion', 'Complete the 30th Parah (Full Khatam)', 'PLATINUM', 'QURAN', '🔚', 'VALUE', 30),
  defineAchievement('q_scholar', 'Quranic Scholar', 'Accrue a total of 1000 XP from Quran activities', 'LEGEND', 'QURAN', '🎓', 'XP', 1000),
];

const ramadanSpecial = [
  defineAchievement('r_fasts_10', 'Ten Days of Fasting', 'Log a total of 10 completed Fasts', 'SILVER', 'RAMADAN', '🗓️', 'COUNT', 10),
  defineAchievement('r_fasts_20', 'Twenty Days of Fasting', 'Log a total of 20 completed Fasts', 'GOLD', 'RAMADAN', '🗓️', 'COUNT', 20),
  defineAchievement('r_fasts_29', 'Month of Fasting', 'Complete the full month (29/30 Fasts)', 'PLATINUM', 'RAMADAN', '🌙', 'COUNT', 29),
  defineAchievement('r_taraweeh_5', 'Night Prayer Novice', 'Log 5 completed Taraweeh sessions', 'BRONZE', 'RAMADAN', '🌃', 'COUNT', 5),
  defineAchievement('r_taraweeh_20', 'Night Prayer Devotee', 'Log 20 completed Taraweeh sessions', 'GOLD', 'RAMADAN', '🌃', 'COUNT', 20),
  defineAchievement('r_taraweeh_30', 'Night Stand', 'Complete all 30 nights of Taraweeh', 'TITAN', 'RAMADAN', '🛐', 'COUNT', 30),
  defineAchievement('r_khatam_1', 'Ramadan Khatam', 'Finish reading the entire Quran during Ramadan', 'TITAN', 'RAMADAN', '📖', 'COUNT', 1),
  defineAchievement('r_khatam_3', 'Triple Khatam', 'Complete 3 full Quran Khatams in one Ramadan', 'TITAN', 'RAMADAN', '⚡', 'COUNT', 3),
];

// Generate Master List
const salahAch = [...generateStreakAchievements('SALAH', '🕌'), ...salahSpecial];
const dhikrAch = generateStreakAchievements('DHIKR', '📿');
const mdfAch = generateStreakAchievements('MDF', '🛡️');
const quranAch = [...generateStreakAchievements('QURAN', '📖'), ...quranSpecial];
const ramadanAch = [...generateStreakAchievements('RAMADAN', '🌙'), ...ramadanSpecial];
const fitnessAch = generateStreakAchievements('FITNESS', '💪');
const hygieneAch = generateStreakAchievements('HYGIENE', '🧼');
const memorizeAch = generateStreakAchievements('MEMORIZE', '🧠');

export const MASTER_ACHIEVEMENTS = [
  ...salahAch,
  ...dhikrAch,
  ...mdfAch,
  ...quranAch,
  ...ramadanAch,
  ...fitnessAch,
  ...hygieneAch,
  ...memorizeAch
];

export const ACHIEVEMENT_CATEGORIES = {
  SALAH: salahAch,
  DHIKR: dhikrAch,
  MDF: mdfAch,
  QURAN: quranAch,
  RAMADAN: ramadanAch,
  FITNESS: fitnessAch,
  HYGIENE: hygieneAch,
  MEMORIZE: memorizeAch
};

export const GROWTH_LEVELS: Record<string, { icon: string; label: string; threshold: number }[]> = {
 SALAH: [
  { threshold: 0, icon: '🌱', label: 'Seed' },
  { threshold: 7, icon: '🌿', label: 'Sprout' },
  { threshold: 30, icon: '🌳', label: 'Tree' },
  { threshold: 100, icon: '🍎', label: 'Fruit Bearing' },
  { threshold: 365, icon: '🏞️', label: 'Sanctuary' },
  { threshold: 1000, icon: '🏔️', label: 'Mountain' },
  { threshold: 2000, icon: '🌍', label: 'Worldly Light' },
  { threshold: 3650, icon: '🌞', label: 'Sun of Deen' }
],
DHIKR: [
  { threshold: 0, icon: '💧', label: 'Drop' },
  { threshold: 30, icon: '🌊', label: 'Stream' },
  { threshold: 100, icon: '⛲', label: 'River' },
  { threshold: 365, icon: '🌅', label: 'Ocean' },
  { threshold: 1000, icon: '🌌', label: 'Cosmos' },
  { threshold: 3650, icon: '✨', label: 'Starlight' }
],
MDF: [
  { threshold: 0, icon: '🥚', label: 'Egg' },
  { threshold: 30, icon: '🐣', label: 'Hatchling' },
  { threshold: 90, icon: '🦅', label: 'Falcon' },
  { threshold: 365, icon: '🐉', label: 'Dragon' },
  { threshold: 1000, icon: '👑', label: 'King' },
  { threshold: 3650, icon: '🦁', label: 'Lionheart' }
],
QURAN: [
  { threshold: 0, icon: '📝', label: 'Student' },
  { threshold: 30, icon: '📚', label: 'Reader' },
  { threshold: 90, icon: '🧠', label: 'Memorizer' },
  { threshold: 365, icon: '🎓', label: 'Scholar' },
  { threshold: 1000, icon: '🕌', label: 'Imam' },
  { threshold: 3650, icon: '🕋', label: 'Guardian' }
],
HYGIENE: [
  { threshold: 0, icon: '✨', label: 'Sparkle' },
  { threshold: 30, icon: '💎', label: 'Crystal' },
  { threshold: 365, icon: '💠', label: 'Diamond' },
  { threshold: 1000, icon: '🌟', label: 'Star' }
],
FITNESS: [
  { threshold: 0, icon: '🚶', label: 'Walker' },
  { threshold: 30, icon: '🏃', label: 'Runner' },
  { threshold: 365, icon: '🏋️', label: 'Lifter' },
  { threshold: 1000, icon: '🤸', label: 'Gymnast' },
  { threshold: 3650, icon: '🦸', label: 'Hero' }
],
RAMADAN: [
  { threshold: 0, icon: '🌑', label: 'New Moon' },
  { threshold: 10, icon: '🌒', label: 'Crescent' },
  { threshold: 20, icon: '🌓', label: 'Quarter' },
  { threshold: 29, icon: '🌕', label: 'Full Moon' }
]
};

export const getGrowthStage = (category: string, streak: number) => {
  const levels = GROWTH_LEVELS[category] || GROWTH_LEVELS['SALAH'];
  let stage = levels[0];
  for (const level of levels) {
    if (streak >= level.threshold) {
      stage = level;
    } else {
        break;
    }
  }
  return stage;
};
