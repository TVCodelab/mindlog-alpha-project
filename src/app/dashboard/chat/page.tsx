'use client';
import { useState } from 'react';
import { Send, Sparkles, User } from 'lucide-react';

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou seu assistente do MindLog. Como você está se sentindo hoje? Estou aqui para te ouvir.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Simular resposta da IA
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'Entendo perfeitamente como você se sente. É normal passar por momentos assim. O que você acha que mais está influenciando esse sentimento agora?' 
      }]);
    }, 1000);
  };

  return (
    <div style={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem' }}>Conversar com IA</h1>
          <p style={{ color: 'var(--text-muted)' }}>Seu espaço seguro de escuta ativa.</p>
        </div>
        <div className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2ecc71' }}></div>
          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>IA Online</span>
        </div>
      </header>

      <div className="glass" style={{ 
        flex: 1, 
        background: 'white', 
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '1rem' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              gap: '1rem', 
              maxWidth: '80%',
              alignSelf: m.role === 'assistant' ? 'flex-start' : 'flex-end',
              flexDirection: m.role === 'assistant' ? 'row' : 'row-reverse'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '12px', 
                background: m.role === 'assistant' ? 'var(--primary)' : 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: m.role === 'assistant' ? 'white' : 'var(--primary)',
                flexShrink: 0
              }}>
                {m.role === 'assistant' ? <Sparkles size={20} /> : <User size={20} />}
              </div>
              <div style={{ 
                padding: '1rem 1.2rem', 
                borderRadius: m.role === 'assistant' ? '0 20px 20px 20px' : '20px 0 20px 20px',
                background: m.role === 'assistant' ? 'var(--accent-soft)' : 'var(--primary)',
                color: m.role === 'assistant' ? 'var(--foreground)' : 'white',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Como você está se sentindo?" 
            style={{ 
              flex: 1, 
              padding: '1rem 1.5rem', 
              borderRadius: '14px', 
              border: '1px solid var(--glass-border)',
              background: 'var(--accent-soft)',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
          <button 
            onClick={handleSend}
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '14px', 
              background: 'var(--primary)', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
