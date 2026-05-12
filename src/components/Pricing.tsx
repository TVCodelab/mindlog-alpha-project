'use client';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Semente',
    price: 'Grátis',
    desc: 'Ideal para começar sua jornada de autoconhecimento.',
    features: ['Diário emocional', 'Check-in de humor', '20 mensagens/dia com IA', 'Gráficos básicos', 'Comunidade'],
    button: 'Começar Grátis',
    popular: false
  },
  {
    name: 'Equilíbrio',
    price: 'R$19,90',
    period: '/mês',
    desc: 'O suporte completo para o seu dia a dia emocional.',
    features: ['Tudo do Semente', 'IA ilimitada', '4 personas de IA', 'Insights avançados', 'Exportação PDF', 'Histórico ilimitado'],
    button: 'Assinar Agora',
    popular: true
  },
  {
    name: 'Florescer',
    price: 'R$49,90',
    period: '/mês',
    desc: 'Para quem busca o máximo de suporte e personalização.',
    features: ['Tudo do Equilíbrio', 'IA personalizada', 'Relatórios emocionais', 'Meditações guiadas', 'Criação de grupos', 'Suporte prioritário'],
    button: 'Escolher Florescer',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="planos" style={{ padding: '100px 0', background: 'var(--accent-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Planos que crescem com você</h2>
          <p style={{ color: 'var(--text-muted)' }}>Escolha o nível de suporte ideal para o seu momento.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {plans.map((p, i) => (
            <div key={i} className="glass" style={{ 
              padding: '3rem 2rem', 
              position: 'relative',
              background: p.popular ? 'var(--background)' : 'var(--glass-bg)',
              border: p.popular ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              boxShadow: p.popular ? '0 20px 40px rgba(138, 112, 214, 0.2)' : 'var(--shadow)',
              transform: p.popular ? 'scale(1.05)' : 'none',
              zIndex: p.popular ? '2' : '1'
            }}>
              {p.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  padding: '0.4rem 1.2rem', 
                  borderRadius: '100px', 
                  fontSize: '0.85rem', 
                  fontWeight: '700' 
                }}>
                  MAIS POPULAR
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800' }}>{p.price}</span>
                {p.period && <span style={{ color: 'var(--text-muted)' }}>{p.period}</span>}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '3rem' }}>{p.desc}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem' }}>
                    <div style={{ color: 'var(--primary)', display: 'flex' }}><Check size={18} /></div>
                    {f}
                  </div>
                ))}
              </div>

              <button className={p.popular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', padding: '1rem' }}>
                {p.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
