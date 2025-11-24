


import { Achievement, Exercise } from './types';

export const URDU_CONCEPTS = [
  { urdu: "توکل", english: "Tawakkul (Trust)", description: "Complete reliance on God's plan." },
  { urdu: "صبر", english: "Sabr (Patience)", description: "Perseverance and persistence." },
  { urdu: "شکر", english: "Shukr (Gratitude)", description: "Thankfulness for Allah's blessings." },
  { urdu: "اخلاص", english: "Ikhlas (Sincerity)", description: "Purity of intention." },
  { urdu: "تقویٰ", english: "Taqwa (God-consciousness)", description: "Being mindful of the Divine." },
  { urdu: "احسان", english: "Ihsan (Excellence)", description: "Worshipping as if you see Him." },
  { urdu: "حیاء", english: "Haya (Modesty)", description: "Self-respect and humility." },
  { urdu: "عاجزی", english: "Aajizi (Humility)", description: "Lowering oneself before the Truth." },
  { urdu: "یقین", english: "Yaqeen (Certainty)", description: "Unshakeable belief." },
  { urdu: "استغفار", english: "Istighfar (Repentance)", description: "Seeking forgiveness." },
  { urdu: "ذکر", english: "Dhikr (Remembrance)", description: "Remembering Allah often." },
  { urdu: "فکر", english: "Fikr (Reflection)", description: "Contemplating creation." }
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
  SALAH: ["Prayer is the pillar of religion.", "Sujud is where the heart finds rest.", "Delaying prayer delays success.", "Fajr is your victory over sleep.", "Make your Salah your refuge."],
  DHIKR: ["Keep your tongue moist with remembrance.", "Dhikr is the polish of the heart.", "Remember Me, I will remember you.", "In the remembrance of Allah do hearts find rest.", "The best wealth is a tongue that remembers Allah."],
  QURAN: ["The Quran is a proof for you or against you.", "Recite beautifully, for it is the word of the King.", "A heart without Quran is like a ruined house.", "Quran is the best companion in the grave.", "Read in the name of your Lord."],
  FITNESS: ["A strong believer is better than a weak believer.", "Your body is an Amanah.", "Health is a crown only the sick can see.", "Discipline in body leads to discipline in soul.", "Invest in your health for a longer worship life."],
  HYGIENE: ["Cleanliness is half of faith.", "Purify yourself for the One who is Pure.", "Wudu washes away sins.", "Keep your environment clean like your heart.", "Purity brings tranquility."],
  MDF: ["Guard your gaze, guard your heart.", "Patience in avoiding sin is easier than the pain of regret.", "Real strength is controlling your desires.", "You are a warrior of light.", "Flee from sin as you flee from fire."],
  HABITS: ["Change comes from small consistent steps.", "Break the chains of bad habits today.", "You are what you repeatedly do.", "Self-control is the greatest victory.", "Replace a bad habit with a good Sunnah."],
  NIGHT: ["The night prayer is the honor of the believer.", "Sleep with Wudu, die as a martyr.", "Review your day before you sleep.", "Surah Mulk protects from the punishment of the grave.", "Make your last words of the day remembrance."],
  HADEES: ["Seek knowledge from cradle to grave.", "Whoever travels a path to knowledge, Allah makes the path to Jannah easy.", "The scholars are the heirs of the Prophets.", "Convey from me, even if it is one verse.", "Wisdom is the lost property of the believer."],
  MEMORIZE: ["Fill your heart with the words of Allah.", "Memorization preserves knowledge.", "One Ayat learned is better than the world.", "Keep the Quran close to your heart.", "Review what you have learned."],
  RAMADAN: ["Ramadan is the month of mercy.", "Fast with your eyes, ears, and tongue too.", "The smell of a fasting person's mouth is musk to Allah.", "Open the gates of Rayyan.", "Taraweeh is the comfort of the night."],
  AI_CHAT: ["Ask and you shall learn.", "Guidance is sought, then given.", "Reflect on your day.", "Seek beneficial knowledge.", "A moment of reflection is better than a year of worship."]
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
  { "Hadith": "اعمال کا دارومدار نیتوں پر ہے۔ (بخاری)", "Explanation": "کسی بھی عمل (عبادت یا دنیاوی) کی قبولیت اور اجر کا انحصار اس کے پیچھے موجود خالص ارادے اور نیت پر ہوتا ہے۔" },
  { "Hadith": "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔ (بخاری)", "Explanation": "وہ شخص افضل ہے جو خود قرآن کی تعلیم حاصل کرے، اس کو سمجھے اور پھر دوسروں کو اس کے معانی اور احکام سکھائے۔" },
  { "Hadith": "مسلمان وہ ہے جس کے ہاتھ اور زبان سے دوسرے مسلمان محفوظ رہیں۔ (بخاری)", "Explanation": "حقیقی مسلمان کی اخلاقی پہچان یہ ہے کہ وہ کسی دوسرے کو جسمانی طور پر (ہاتھ سے) یا زبانی طور پر تکلیف نہ پہنچائے۔" },
  { "Hadith": "عافیت مانگو، کیونکہ ایمان کے بعد عافیت سے بڑھ کر کوئی چیز نہیں دی گئی۔ (ترمذی)", "Explanation": "اللہ سے دنیا اور آخرت کی عافیت (سکون، سلامتی، بیماری سے حفاظت) مانگنا سب سے افضل دعا ہے۔" }
];

export const MEMORIZE_CONTENT = [
    { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا", english: "O Allah, I ask You for beneficial knowledge." },
    { arabic: "رَبِّ زِدْنِي عِلْمًا", english: "My Lord, increase me in knowledge." },
    { arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي", english: "O Allah, benefit me with what You have taught me." },
    { arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", english: "O Allah, help me to remember You, to thank You, and to worship You in the best of manners." },
    { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", english: "Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire!" }
];

export const NAMES_OF_ALLAH = [
  { name: "Ar-Rahman", meaning: "The Most Gracious", desc: "He who wills goodness and mercy for all His creatures." },
  { name: "Ar-Rahim", meaning: "The Most Merciful", desc: "He who acts with extreme kindness." },
  { name: "Al-Malik", meaning: "The King", desc: "The Sovereign Lord, The One with the complete Dominion." },
  { name: "Al-Quddus", meaning: "The Most Holy", desc: "The One who is pure from any imperfection." },
  { name: "As-Salam", meaning: "The Peace", desc: "The One who is free from every imperfection and safety." },
  { name: "Al-Mu'min", meaning: "The Guardian of Faith", desc: "The One who witnessed for Himself that no one is God but Him." },
  { name: "Al-Muhaimin", meaning: "The Protector", desc: "The One who witnesses the saying and deeds of His creatures." },
  { name: "Al-Aziz", meaning: "The Almighty", desc: "The Strong, The Defeater who is not defeated." },
  { name: "Al-Jabbar", meaning: "The Compeller", desc: "The One that nothing happens in His Dominion except that which He willed." },
  { name: "Al-Mutakabbir", meaning: "The Majestic", desc: "The One who is clear from the attributes of the creatures and from resembling them." },
  { name: "Al-Khaliq", meaning: "The Creator", desc: "The One who brings everything from non-existence to existence." },
  { name: "Al-Bari", meaning: "The Evolver", desc: "The Maker, The Creator who has the Power to turn the entities." },
  { name: "Al-Musawwir", meaning: "The Fashioner", desc: "The One who forms His creatures in different pictures." },
  { name: "Al-Ghaffar", meaning: "The Great Forgiver", desc: "The Forgiver, The One who forgives the sins of His slaves time and time again." },
  { name: "Al-Qahhar", meaning: "The Subduer", desc: "The Dominant, The One who has the perfect Power and is not unable over anything." },
  { name: "Al-Wahhab", meaning: "The Bestower", desc: "The One who is Generous in giving plenty without any return." },
  { name: "Ar-Razzaq", meaning: "The Provider", desc: "The Sustainer, The Provider." },
  { name: "Al-Fattah", meaning: "The Opener", desc: "The Opener, The Reliever, The Judge, The One who opens for His slaves the closed worldly and religious matters." },
  { name: "Al-Alim", meaning: "The All-Knowing", desc: "The Knowledgeable; The One nothing is absent from His knowledge." },
  { name: "Al-Qabid", meaning: "The Constrictor", desc: "The Constrictor, The Withholder, The One who constricts the sustenance." },
  { name: "Al-Basit", meaning: "The Expander", desc: "The Expander, The Enlarger, The One who expands and widens." },
  { name: "Al-Khafid", meaning: "The Abaser", desc: "The Abaser, The One who lowers whoever He willed by His Destruction." },
  { name: "Ar-Rafi", meaning: "The Exalter", desc: "The Exalter, The Elevator, The One who raises whoever He willed." },
  { name: "Al-Mu'izz", meaning: "The Honorer", desc: "He gives esteem to whoever He willed, hence there is no one to degrade Him." },
  { name: "Al-Mudhill", meaning: "The Dishonorer", desc: "The One who degrades whoever He willed, hence there is no one to give Him esteem." },
  { name: "As-Sami", meaning: "The All-Hearing", desc: "The Hearer, The One who Hears all things that are heard." },
  { name: "Al-Basir", meaning: "The All-Seeing", desc: "The All-Noticing, The One who Sees all things that are seen." },
  { name: "Al-Hakam", meaning: "The Judge", desc: "The Judge, He is the Ruler and His judgment is His Word." },
  { name: "Al-Adl", meaning: "The Just", desc: "The One who is entitled to do what He does." },
  { name: "Al-Latif", meaning: "The Subtle One", desc: "The Gentle, The One who is kind to His slaves and endows upon them." }
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

// --- TASK SPECIFIC ACHIEVEMENTS (Replacing Generic Counters) ---
const createTaskAchievements = () => {
  const ach: Achievement[] = [];

  // SALAH
  ach.push({ id: 'salah_fajr_50', title: 'Fajr Warrior', description: 'Pray Fajr 50 times.', tier: 'SILVER', icon: '🌅', category: 'SALAH', metric: 'COUNT', value: 50 });
  ach.push({ id: 'salah_isha_100', title: 'Night Owl', description: 'Pray Isha 100 times.', tier: 'GOLD', icon: '🌌', category: 'SALAH', metric: 'COUNT', value: 100 });
  ach.push({ id: 'salah_jamaah_500', title: 'Community Pillar', description: 'Pray in Jamaah 500 times.', tier: 'PLATINUM', icon: '🕌', category: 'SALAH', metric: 'COUNT', value: 500 });
  ach.push({ id: 'salah_tahajjud_10', title: 'The Vigilant', description: 'Pray Tahajjud 10 times.', tier: 'MYTHIC', icon: '🌙', category: 'SALAH', metric: 'COUNT', value: 10 });
  
  // DHIKR
  ach.push({ id: 'dhikr_total_1000', title: 'Moist Tongue', description: 'Complete 1,000 Total Dhikr.', tier: 'BRONZE', icon: '📿', category: 'DHIKR', metric: 'COUNT', value: 1000 });
  ach.push({ id: 'dhikr_total_10000', title: 'Remembrance', description: 'Complete 10,000 Total Dhikr.', tier: 'GOLD', icon: '✨', category: 'DHIKR', metric: 'COUNT', value: 10000 });
  ach.push({ id: 'dhikr_completion_100', title: 'Consistency', description: 'Finish daily dhikr target 100 times.', tier: 'PLATINUM', icon: '🎯', category: 'DHIKR', metric: 'COUNT', value: 100 });

  // QURAN
  ach.push({ id: 'quran_juz_5', title: 'The Reader', description: 'Complete 5 Juz.', tier: 'SILVER', icon: '📖', category: 'QURAN', metric: 'VALUE', value: 5 });
  ach.push({ id: 'quran_khatam_1', title: 'The Finisher', description: 'Complete 1 Quran Khatam.', tier: 'DIAMOND', icon: '🏆', category: 'QURAN', metric: 'VALUE', value: 1 });
  
  // FITNESS
  ach.push({ id: 'fitness_pushups_1000', title: 'Iron Chest', description: 'Do 1,000 Total Pushups.', tier: 'GOLD', icon: '💪', category: 'FITNESS', metric: 'COUNT', value: 1000 });
  ach.push({ id: 'fitness_total_5000', title: 'Spartan', description: 'Do 5,000 Total Reps of any exercise.', tier: 'TITAN', icon: '🛡️', category: 'FITNESS', metric: 'COUNT', value: 5000 });
  
  // HYGIENE
  ach.push({ id: 'hygiene_water_100', title: 'Hydrated', description: 'Hit water goal 100 times.', tier: 'SILVER', icon: '💧', category: 'HYGIENE', metric: 'COUNT', value: 100 });
  ach.push({ id: 'hygiene_total_500', title: 'Spotless', description: 'Complete 500 hygiene tasks.', tier: 'GOLD', icon: '🧼', category: 'HYGIENE', metric: 'COUNT', value: 500 });
  
  // HABITS
  ach.push({ id: 'habits_streak_30', title: 'Detoxed', description: '30 Days Clean Streak.', tier: 'GOLD', icon: '🚭', category: 'HABITS', metric: 'STREAK', value: 30 });
  ach.push({ id: 'habits_streak_100', title: 'Pure Lungs', description: '100 Days Clean Streak.', tier: 'DIAMOND', icon: '🌬️', category: 'HABITS', metric: 'STREAK', value: 100 });
  
  // RAMADAN
  ach.push({ id: 'ramadan_fast_30', title: 'Rayyan', description: 'Fast 30 Days.', tier: 'PLATINUM', icon: '🚪', category: 'RAMADAN', metric: 'COUNT', value: 30 });
  ach.push({ id: 'ramadan_taraweeh_20', title: 'Night Stand', description: 'Pray Taraweeh 20 times.', tier: 'GOLD', icon: '🌃', category: 'RAMADAN', metric: 'COUNT', value: 20 });
  
  // HADEES
  ach.push({ id: 'hadees_total_50', title: 'Seeker', description: 'Read 50 Hadees.', tier: 'SILVER', icon: '📜', category: 'HADEES', metric: 'COUNT', value: 50 });
  
  // NIGHT
  ach.push({ id: 'night_total_100', title: 'Protected', description: 'Complete Night Routine 100 times.', tier: 'GOLD', icon: '🛡️', category: 'NIGHT', metric: 'COUNT', value: 100 });

  // NAMES99
  ach.push({ id: 'names99_10', title: 'Student', description: 'Learn 10 Names of Allah.', tier: 'BRONZE', icon: '🧠', category: 'NAMES99', metric: 'VALUE', value: 10 });
  ach.push({ id: 'names99_99', title: 'Hafiz of Names', description: 'Learn all 99 Names.', tier: 'DIVINE', icon: '👑', category: 'NAMES99', metric: 'VALUE', value: 99 });
  
  // MEMORIZE
  ach.push({ id: 'memorize_5', title: 'Memorizer', description: 'Memorize 5 Duas.', tier: 'SILVER', icon: '🧠', category: 'MEMORIZE', metric: 'VALUE', value: 5 });

  return ach;
};

export const MASTER_ACHIEVEMENTS: Achievement[] = createTaskAchievements();

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
