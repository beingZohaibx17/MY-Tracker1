
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2, RefreshCw } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { TabWrapper, HeroCard, RANK_IMAGES } from './SimpleTabs';
import { AppState, ViewState } from '../types';

interface Props {
  state: AppState;
  onBack: () => void;
}

export const AIAssistant: React.FC<Props> = ({ state, onBack }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Assalamu Alaikum, Zohaib. I am your spiritual companion. How can I help you improve your connection with Allah today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are Zohaib AI, a friendly, knowledgeable, and empathetic Islamic spiritual companion within the Zohaib Tracker app.
      
      Your goal is to help the user (Zohaib) improve their spiritual habits (Salah, Dhikr, Quran, Fitness, Hygiene).
      
      Current User Stats Context:
      - Salah Streak: ${state.global.streaks.salah} days
      - Quran Streak: ${state.global.streaks.quranSurah} days
      - Dhikr Streak: ${state.global.streaks.dhikr} days
      - Current Mood: ${state.daily.mood || 'Unknown'}
      - Iman Score: ${state.daily.imanScore}%
      
      Rules:
      1. Keep responses concise, encouraging, and rooted in Islamic wisdom (Quran & Sunnah).
      2. Avoid controversial or divisive topics; focus on self-improvement (Tazkiyah), mindfulness (Muraqabah), and discipline.
      3. If the user asks for a Dua, provide it in Arabic (if possible) and English.
      4. Use a gentle, brotherly tone.
      5. Do not hallucinate app features. You can only track what is listed in the stats.
      `;

      // Construct history for context
      // Note: In a real app we might pass full history, but for simplicity/tokens we'll pass the last few interactions + system instruction logic via prompt structure or a fresh chat.
      // We will use a chat session.
      
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      const result = await chat.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
         const chunkText = (chunk as GenerateContentResponse).text;
         if (chunkText) {
             fullResponse += chunkText;
             setMessages(prev => {
                 const newMessages = [...prev];
                 newMessages[newMessages.length - 1].text = fullResponse;
                 return newMessages;
             });
         }
      }
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
      "Give me motivation for Fajr",
      "Suggest a Dua for anxiety",
      "How to improve Khushu in Salah?",
      "Explain the benefits of Dhikr"
  ];

  return (
    <TabWrapper themeColor="blue" subView="DAILY" setSubView={() => {}} onBack={onBack} visualType="AI_CHAT">
      <div className="space-y-4 pb-24">
        <HeroCard 
            title="Zohaib AI" 
            subtitle="Spiritual Companion" 
            stat="Online" 
            statLabel="Status" 
            icon={<Sparkles size={14} />} 
            bgImage={RANK_IMAGES.AI_CHAT} 
        />

        <div className="flex flex-col space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 animate-slide-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 ${msg.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'}`}>
                        {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-md backdrop-blur-md border border-white/5 ${
                        msg.role === 'user' 
                        ? 'bg-emerald-500/20 text-emerald-100 rounded-tr-none border-emerald-500/20' 
                        : 'bg-white/10 text-white/90 rounded-tl-none'
                    }`}>
                         {/* Simple whitespace handling */}
                        <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>
                    </div>
                </div>
            ))}
            {isLoading && (
                 <div className="flex items-center gap-2 text-blue-400 text-xs pl-12 animate-pulse">
                     <Loader2 size={12} className="animate-spin" /> Thinking...
                 </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length < 3 && !isLoading && (
            <div className="flex flex-wrap gap-2 mt-4">
                {suggestions.map((s, i) => (
                    <button key={i} onClick={() => { setInput(s); setTimeout(handleSend, 100); }} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] text-secondary hover:bg-white/10 hover:text-white transition-all active:scale-95">
                        {s}
                    </button>
                ))}
            </div>
        )}

        {/* Input Area - Fixed at bottom of the scroll view effectively, but within flow for mobile */}
        <div className="pt-4">
             <div className="glass-panel p-2 rounded-[1.5rem] flex items-center gap-2 border-blue-500/20 shadow-lg relative z-20">
                 <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask for guidance..." 
                    className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-secondary/50 text-sm font-medium"
                    disabled={isLoading}
                 />
                 <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-all active:scale-90 shadow-lg shadow-blue-900/50"
                 >
                     <Send size={18} />
                 </button>
             </div>
        </div>
      </div>
    </TabWrapper>
  );
};
