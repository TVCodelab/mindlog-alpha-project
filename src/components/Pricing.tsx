'use client';
import { motion } from 'framer-motion';
import { Leaf, Scale, Flower2, Check, Sparkles } from 'lucide-react';

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
    bg: 'linear-gradient(135deg, #6366f1, #a855f7)',
    features: ['Chat com IA ilimitado', '4 personas de IA', 'Insights avançados + detecção de burnout', 'Exportar diário em PDF'],
    popular: true
  },
  {
    name: 'Florescer',
    price: 'R$ 49,90',
    period: 'por mês',
    icon: <Flower2 size={40} />,
    color: '#f43f5e',
    features: ['Tudo do Equilíbrio', 'Persona de IA 100% customizada', 'Relatório de análise profunda', 'Sessões guiadas de meditação', 'Suporte humano prioritário'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="planos" style={{ padding: '150px 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '8rem' }}
        >
          <h2 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-0.04em' }}>
            Confira nossos <span className="text-gradient">planos</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', marginTop: '1rem', fontWeight: '500' }}>
            Tecnologia de ponta para sua evolução pessoal.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ 
                background: p.bg || 'rgba(255,255,255,0.03)',
                padding: '4rem 3rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {p.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '0', 
                  right: '0', 
                  background: 'var(--accent)', 
                  color: 'white', 
                  padding: '0.8rem 2rem', 
                  borderRadius: '0 0 0 20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Mais Popular
                </div>
              )}

              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'rgba(255,255,255,0.05)', 
                color: p.color,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.5rem',
                boxShadow: `0 0 30px ${p.color}33`
              }}>
                {p.icon}
              </div>

              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '800' }}>{p.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '3rem' }}>
                <span style={{ fontSize: '4rem', fontWeight: '900', color: '#fff' }}>{p.price}</span>
                <span style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>/ {p.period}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', textAlign: 'left' }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '1rem', fontSize: '1rem', color: 'var(--text-dim)' }}>
                    <Check size={20} style={{ color: p.color, flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium"
                style={{ 
                  width: '100%', 
                  background: p.bg ? '#fff' : 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  color: p.bg ? 'var(--primary)' : '#fff'
                }}
              >
                Selecionar Plano
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
