'use client';
import { Play, Wind, Brain, Moon, Sun, Heart } from 'lucide-react';

const exercises = [
  { title: 'Respiração 4-7-8', duration: '5 min', icon: <Wind />, desc: 'Técnica poderosa para reduzir a ansiedade instantaneamente.', color: '#48dbfb' },
  { title: 'Meditação Matinal', duration: '10 min', icon: <Sun />, desc: 'Comece seu dia com clareza e foco positivo.', color: '#feca57' },
  { title: 'Relaxamento Noturno', duration: '15 min', icon: <Moon />, desc: 'Prepare seu corpo e mente para um sono profundo.', color: '#5f27cd' },
  { title: 'Foco e Concentração', duration: '8 min', icon: <Brain />, desc: 'Ideal para momentos de sobrecarga mental.', color: '#8a70d6' },
  { title: 'Gratidão Guiada', duration: '5 min', icon: <Heart />, desc: 'Exercício para cultivar pensamentos positivos.', color: '#ff6b6b' },
];

export default function Exercicios() {
  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Exercícios de Bem-Estar</h1>
        <p style={{ color: 'var(--text-muted)' }}>Práticas guiadas para equilibrar sua mente.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {exercises.map((ex, i) => (
          <div key={i} className="glass" style={{ background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '14px', 
              background: 'var(--accent-soft)', 
              color: ex.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {ex.icon}
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{ex.title}</h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '1rem' }}>
              DURAÇÃO: {ex.duration}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>{ex.desc}</p>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
              <Play size={18} fill="currentColor" /> Iniciar Agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
