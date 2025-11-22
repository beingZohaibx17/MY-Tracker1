
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

const generateMilestones = () => {
  const m: number[] = [];
  for (let i = 1; i <= 90; i++) m.push(i);
  for (let i = 95; i <= 365; i+=5) m.push(i);
  for (let i = 390; i <= 1000; i+=25) m.push(i);
  return m;
};

export const STREAK_MILESTONES = generateMilestones();

const getTier = (day: number): Achievement['tier'] => {
  if (day < 7) return 'BRONZE';      
  if (day < 14) return 'BRONZE';     
  if (day < 30) return 'SILVER';      
  if (day < 90) return 'GOLD';        
  if (day < 150) return 'PLATINUM';    
  if (day < 365) return 'DIAMOND';     
  if (day < 1500) return 'LEGEND';      
  return 'ETERNAL';                     
};

const createStreakAchievements = (
  category: Achievement['category'], 
  prefix: string, 
  icon: string, 
  label: string
): Achievement[] => {
  return STREAK_MILESTONES.map(day => ({
    id: `${prefix}_streak_${day}`,
    title: `${day} Day ${label}`,
    description: `Successfully maintained a continuous engagement streak of ${day} days in ${label}.`,
    category: category,
    tier: getTier(day),
    icon: icon
  }));
};

const achSalah = createStreakAchievements('SALAH', 's', '🕋', 'Salah');
const achDhikr = createStreakAchievements('DHIKR', 'd', '📿', 'Dhikr');
const achMDF = createStreakAchievements('MDF', 'm', '🛡️', 'Purity');
const achHygiene = createStreakAchievements('HYGIENE', 'h', '🧼', 'Hygiene');
const achFitness = createStreakAchievements('FITNESS', 'f', '💪', 'Fitness');
const achHabits = createStreakAchievements('HABITS', 'hb', '🚭', 'Discipline');
const achQuran = createStreakAchievements('QURAN', 'q', '📖', 'Quran');
const achRamadan = createStreakAchievements('RAMADAN', 'r', '🌙', 'Ramadan');

export const MASTER_ACHIEVEMENTS: Achievement[] = [
  ...achSalah, ...achDhikr, ...achMDF, ...achHygiene, ...achFitness, ...achHabits, ...achQuran, ...achRamadan
];

export type GrowthStage = { icon: string; label: string; threshold: number };

export const GROWTH_LEVELS: Record<string, GrowthStage[]> = {
 SALAH: [
  { threshold: 0, icon: '🌱', label: 'Seed' },
  { threshold: 7, icon: '🌿', label: 'Sprout' },
  { threshold: 30, icon: '🪴', label: 'Sapling' },
  { threshold: 90, icon: '🌳', label: 'Tree' },
  { threshold: 365, icon: '🌲', label: 'Forest' }
],
DHIKR: [
  { threshold: 0, icon: '📿', label: 'Bead' },
  { threshold: 7, icon: '🧵', label: 'String' },
  { threshold: 30, icon: '✨', label: 'Tasbeeh' },
  { threshold: 90, icon: '💡', label: 'Noor' },
  { threshold: 365, icon: '☀️', label: 'Radiance' }
],
MDF: [
  { threshold: 0, icon: '🧱', label: 'Brick' },
  { threshold: 7, icon: '🚧', label: 'Wall' },
  { threshold: 30, icon: '🏯', label: 'Tower' },
  { threshold: 90, icon: '🏰', label: 'Fortress' },
  { threshold: 365, icon: '👑', label: 'Kingdom' }
],
QURAN: [
  { threshold: 0, icon: '✍️', label: 'Ink' },
  { threshold: 7, icon: '📄', label: 'Page' },
  { threshold: 30, icon: '📜', label: 'Scroll' },
  { threshold: 90, icon: '📖', label: 'Book' },
  { threshold: 365, icon: '📚', label: 'Library' }
],
HYGIENE: [
  { threshold: 0, icon: '✨', label: 'Clean' },
  { threshold: 7, icon: '🌟', label: 'Fresh' },
  { threshold: 30, icon: '💎', label: 'Pure' },
  { threshold: 90, icon: '💧', label: 'Crystal' },
  { threshold: 365, icon: '💠', label: 'Immaculate' }
],
FITNESS: [
  { threshold: 0, icon: '🪨', label: 'Stone' },
  { threshold: 7, icon: '🌋', label: 'Magma' },
  { threshold: 30, icon: '⛰️', label: 'Hill' },
  { threshold: 90, icon: '🏔️', label: 'Mountain' },
  { threshold: 365, icon: '🪐', label: 'Titan' }
],
RAMADAN: [
  { threshold: 0, icon: '🌑', label: 'New Moon' },
  { threshold: 5, icon: '🌙', label: 'Crescent' },
  { threshold: 15, icon: '🌗', label: 'Half Moon' },
  { threshold: 20, icon: '🏮', label: 'Lantern' },
  { threshold: 29, icon: '🕌', label: 'Eid Ready' }
]
};

export const getGrowthStage = (category: keyof typeof GROWTH_LEVELS, streak: number) => {
  const stages = GROWTH_LEVELS[category] || GROWTH_LEVELS['SALAH'];
  let current = stages[0];
  for (const stage of stages) {
    if (streak >= stage.threshold) {
      current = stage;
    } else {
      break;
    }
  }
  return current;
};

export const getStreakTitle = (streak: number): string => {
  if (streak < 3) return "Novice";
  if (streak < 7) return "Initiate";
  if (streak < 14) return "Apprentice";
  if (streak < 30) return "Disciplined";
  if (streak < 60) return "Guardian";
  if (streak < 90) return "Warrior";
  if (streak < 180) return "Master";
  if (streak < 365) return "Grandmaster";
  return "Legend";
};
