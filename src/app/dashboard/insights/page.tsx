'use client';
import { BarChart3, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

export default function Insights() {
  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Insights Emocionais</h1>
        <p style={{ color: 'var(--text-muted)' }}>Análise profunda do seu comportamento e bem-estar.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ background: 'white', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} color="var(--primary)" /> Tendência de Humor Mensal
            </h3>
            <select style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', outline: 'none' }}>
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
            </select>
          </div>
          
          <div style={{ width: '100%', height: '250px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem' }}>
            {[30, 45, 60, 50, 70, 85, 80, 90, 75, 65, 85, 95].map((h, i) => (
              <div key={i} style={{ flex: 1, background: 'var(--accent-soft)', borderRadius: '8px', position: 'relative', height: '100%' }}>
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  width: '100%', 
                  height: `${h}%`, 
                  background: i === 11 ? 'var(--primary)' : 'var(--primary-light)',
                  borderRadius: '8px',
                  opacity: i === 11 ? 1 : 0.6
                }}></div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            <span>Semana 1</span><span>Semana 2</span><span>Semana 3</span><span>Semana 4</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass" style={{ background: 'white', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Principal Gatilho</h4>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--secondary)' }}>Trabalho (45%)</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Identificado em 12 relatos.</p>
          </div>
          
          <div className="glass" style={{ background: 'white', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Melhor Momento</h4>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2ecc71' }}>Sábados à noite</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Maior índice de positividade.</p>
          </div>
        </div>
      </div>

      <div className="glass" style={{ background: 'var(--primary)', color: 'white', padding: '2.5rem' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
            <BarChart3 size={40} />
          </div>
          <div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Sugestão da IA MindLog</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.6' }}>
              "Notamos que sua ansiedade aumenta nas terças-feiras de manhã. Que tal agendarmos um exercício de respiração guiada de 5 minutos antes da sua primeira reunião?"
            </p>
            <button style={{ 
              marginTop: '1.5rem', 
              padding: '0.8rem 1.5rem', 
              background: 'white', 
              color: 'var(--primary)', 
              borderRadius: '12px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Aceitar Sugestão <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
