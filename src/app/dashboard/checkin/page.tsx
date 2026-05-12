'use client';
import { useState } from 'react';
import { Smile, Meh, Frown, Sun, CloudRain, Zap, Moon } from 'lucide-react';

export default function CheckIn() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { icon: <Smile size={32} />, label: 'Radiante', color: '#ff6b6b' },
    { icon: <Smile size={32} />, label: 'Bem', color: '#feca57' },
    { icon: <Meh size={32} />, label: 'Ok', color: '#48dbfb' },
    { icon: <Frown size={32} />, label: 'Triste', color: '#54a0ff' },
    { icon: <Frown size={32} />, label: 'Mal', color: '#5f27cd' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Check-in Diário</h1>
        <p style={{ color: 'var(--text-muted)' }}>Passo {step} de 3</p>
      </header>

      <div className="glass" style={{ background: 'white', padding: '3rem' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Como você está se sentindo agora?</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '3rem' }}>
              {moods.map((m, i) => (
                <button 
                  key={i} 
                  onClick={() => { setMood(m.label); setStep(2); }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    flex: 1,
                    padding: '1.5rem 0.5rem',
                    borderRadius: '16px',
                    background: mood === m.label ? 'var(--accent-soft)' : 'transparent',
                    border: mood === m.label ? '2px solid var(--primary)' : '1px solid transparent',
                    color: m.color
                  }}
                >
                  {m.icon}
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--foreground)' }}>{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>O que está influenciando seu humor?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {['Trabalho', 'Saúde', 'Relacionamentos', 'Sono', 'Finanças', 'Lazer'].map((tag, i) => (
                <button key={i} className="btn-secondary" style={{ padding: '1rem' }}>{tag}</button>
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => setStep(3)}>Continuar</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: '#e1f9eb', color: '#2ecc71', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Smile size={40} />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Obrigado pelo seu registro!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Cada registro ajuda nossa IA a entender melhor seus padrões e oferecer o melhor suporte.</p>
            <button className="btn-primary" onClick={() => window.location.href = '/dashboard'}>Voltar ao Início</button>
          </div>
        )}
      </div>
    </div>
  );
}
