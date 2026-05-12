'use client';
import { Leaf, Scale, Flower2, Check } from 'lucide-react';

const plans = [
  {
    name: 'Semente',
    price: 'Grátis',
    period: 'para sempre',
    icon: <Leaf size={40} />,
    color: '#1dd1a1',
    features: ['Diário + check-in de humor', '40 mensagens/dia com a IA', 'Gráficos básicos', 'Acesso à comunidade'],
    popular: false
  },
  {
    name: 'Equilíbrio',
    price: 'R$ 19,90',
    period: 'por mês',
    icon: <Scale size={40} />,
    color: '#ffffff',
    bg: '#7267e0',
    features: ['Chat com IA ilimitado', '4 personas de IA', 'Insights avançados + detecção de burnout', 'Exportar diário em PDF'],
    popular: true
  },
  {
    name: 'Florescer',
    price: 'R$ 49,90',
    period: 'por mês',
    icon: <Flower2 size={40} />,
    color: '#ff9ff3',
    features: ['Tudo do Equilíbrio', 'Persona de IA 100% customizada', 'Relatório de análise profunda', 'Sessões guiadas de meditação', 'Suporte humano prioritário'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="planos" style={{ padding: '100px 0', background: 'var(--bg-lavender)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '3.5rem', color: '#341f97', marginBottom: '5rem', fontWeight: '900' }}>
          Confira nossos planos
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {plans.map((p, i) => (
            <div key={i} style={{ 
              background: p.bg || 'white', 
              padding: '4rem 2rem', 
              borderRadius: '30px', 
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
              color: p.bg ? 'white' : 'inherit',
              position: 'relative',
              transform: p.popular ? 'scale(1.08)' : 'none',
              zIndex: p.popular ? 2 : 1
            }}>
              {p.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: '#ff70a6', 
                  color: 'white', 
                  padding: '0.5rem 2rem', 
                  borderRadius: '100px', 
                  fontSize: '0.8rem', 
                  fontWeight: '800' 
                }}>
                  MAIS POPULAR
                </div>
              )}

              <div style={{ 
                width: '70px', 
                height: '70px', 
                background: p.bg ? 'rgba(0,0,0,0.1)' : '#f3f0ff', 
                color: p.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                {p.icon}
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '800' }}>{p.name}</h3>
              <div style={{ fontSize: '3.2rem', fontWeight: '900', color: p.bg ? 'white' : p.color, marginBottom: '0.2rem' }}>
                {p.price}
              </div>
              <div style={{ fontSize: '1rem', color: p.bg ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', marginBottom: '3rem', fontStyle: 'italic' }}>
                {p.period}
              </div>

              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', alignItems: 'flex-start' }}>
                    <Check size={18} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
