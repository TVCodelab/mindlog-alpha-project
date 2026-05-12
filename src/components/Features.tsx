'use client';
import { BookOpen, Brain, BarChart3, Users, Heart, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <BookOpen />, title: 'Diário Emocional', desc: 'Registre seus sentimentos e pensamentos em um ambiente seguro e acolhedor.' },
  { icon: <Brain />, title: 'IA Terapêutica', desc: 'Converse com uma inteligência artificial empática focada em bem-estar emocional.' },
  { icon: <BarChart3 />, title: 'Insights Inteligentes', desc: 'Visualize padrões em suas emoções com análises profundas geradas por IA.' },
  { icon: <Users />, title: 'Comunidade Segura', desc: 'Compartilhe experiências em um ambiente positivo e moderado.' },
  { icon: <Heart />, title: 'Exercícios de Bem-Estar', desc: 'Práticas de meditação e respiração guiadas para seu equilíbrio diário.' },
  { icon: <ShieldCheck />, title: 'Privacidade Total', desc: 'Seus dados são criptografados e protegidos com os mais altos padrões de segurança.' },
];

export default function Features() {
  return (
    <section id="recursos" style={{ padding: '100px 0', background: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sua jornada para o <span style={{ color: 'var(--primary)' }}>bem-estar</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            O MindLog combina tecnologia de ponta com acolhimento humano para ajudar você a entender e cuidar da sua saúde mental.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((f, i) => (
            <div key={i} className="glass" style={{ 
              padding: '2.5rem', 
              transition: 'var(--transition)',
              cursor: 'default',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '14px', 
                background: 'var(--accent-soft)', 
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {f.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass:hover {
          transform: translateY(-5px);
          border-color: var(--primary-light);
          background: white;
        }
        [data-theme='dark'] .glass:hover {
          background: var(--accent-soft);
        }
      `}</style>
    </section>
  );
}
