'use client';
import { Heart, MessageCircle, BarChart2, Calendar } from 'lucide-react';

export default function DashboardHome() {
  const stats = [
    { label: 'Check-ins este mês', value: '24', icon: <Calendar />, color: 'var(--primary)' },
    { label: 'Sessões com IA', value: '12', icon: <MessageCircle />, color: 'var(--secondary)' },
    { label: 'Humor Médio', value: 'Radiante', icon: <Heart />, color: '#ff6b6b' },
    { label: 'Insights Gerados', value: '8', icon: <BarChart2 />, color: '#4834d4' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Olá, Nathan! 👋</h1>
        <p style={{ color: 'var(--text-muted)' }}>Como você está se sentindo hoje? Vamos registrar seu humor?</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass" style={{ padding: '1.5rem', background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'var(--accent-soft)', color: stat.color }}>
                {stat.icon}
              </div>
            </div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{stat.label}</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem', background: 'white', minHeight: '300px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Seu Progresso Semanal</h3>
          <div style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem' }}>
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} style={{ flex: 1, background: 'var(--accent-soft)', borderRadius: '8px', position: 'relative', height: '100%' }}>
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  width: '100%', 
                  height: `${h}%`, 
                  background: 'linear-gradient(to top, var(--primary), var(--primary-light))',
                  borderRadius: '8px',
                  transition: 'height 1s ease-out'
                }}></div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
          </div>
        </div>

        <div className="glass" style={{ padding: '2rem', background: 'white' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Ações Rápidas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn-secondary" style={{ textAlign: 'left', padding: '1rem' }}>Fazer Check-in</button>
            <button className="btn-secondary" style={{ textAlign: 'left', padding: '1rem' }}>Novo Relato no Diário</button>
            <button className="btn-primary" style={{ textAlign: 'left', padding: '1rem' }}>Falar com a IA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
