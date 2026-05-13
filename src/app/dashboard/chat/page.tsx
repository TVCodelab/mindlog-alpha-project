'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Sparkles } from 'lucide-react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Olá Nathan! Como você está se sentindo hoje? Estou aqui para te ouvir.' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulando resposta da IA
    setTimeout(() => {
      const botResponse = { 
        role: 'bot', 
        content: `Entendo perfeitamente o que você quis dizer com "${input}". É importante darmos atenção a esses sentimentos. Como isso afeta seu dia no momento?` 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div style={{ height: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column' }} className="glass-card">
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '12px' }}>
          <Bot size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Psicóloga IA</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: '700' }}>• Online agora</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '70%',
                display: 'flex',
                gap: '1rem',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <div style={{ 
                background: msg.role === 'user' ? 'var(--primary)' : 'white', 
                color: msg.role === 'user' ? 'white' : 'var(--text-main)',
                padding: '1rem 1.5rem',
                borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '0 20px 20px 20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.5)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Descreva como você está se sentindo..." 
            style={{ flex: 1, border: 'none', background: 'white' }}
          />
          <button onClick={handleSend} className="btn-soft" style={{ padding: '1rem' }}>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
