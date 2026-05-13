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
    <section id="planos" style={{ padding: '120px 0', background: 'var(--bg-lavender)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '4.5rem', color: '#341f97', fontWeight: '950', letterSpacing: '-0.04em' }}>
            Confira nossos <span className="text-gradient">planos</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '1rem' }}>
            Escolha o nível de cuidado que você merece hoje.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, scale: 1.02 }}
              style={{ 
                background: p.bg || 'white', 
                padding: '5rem 2.5rem', 
                borderRadius: '40px', 
                textAlign: 'center',
                boxShadow: p.popular ? '0 30px 60px rgba(114, 103, 224, 0.3)' : '0 20px 40px rgba(0,0,0,0.05)',
                color: p.bg ? 'white' : 'inherit',
                position: 'relative',
                zIndex: p.popular ? 2 : 1,
                border: p.bg ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {p.popular && (
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ 
                    position: 'absolute', 
                    top: '-25px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    background: '#ff70a6', 
                    color: 'white', 
                    padding: '0.6rem 2.5rem', 
                    borderRadius: '100px', 
                    fontSize: '0.9rem', 
                    fontWeight: '900',
                    boxShadow: '0 10px 20px rgba(255, 112, 166, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Sparkles size={16} /> MAIS POPULAR
                </motion.div>
              )}

              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: p.bg ? 'rgba(255,255,255,0.15)' : '#f3f0ff', 
                  color: p.color,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2.5rem'
                }}
              >
                {p.icon}
              </motion.div>

              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '900' }}>{p.name}</h3>
              <div style={{ fontSize: '3.8rem', fontWeight: '950', color: p.bg ? 'white' : p.color, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
                {p.price}
              </div>
              <div style={{ fontSize: '1.1rem', color: p.bg ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', marginBottom: '3.5rem', fontStyle: 'italic', fontWeight: '500' }}>
                {p.period}
              </div>

              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
                {p.features.map((f, j) => (
                  <motion.div key={j} whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1rem', fontSize: '1rem', alignItems: 'flex-start', fontWeight: '500' }}>
                    <Check size={22} style={{ flexShrink: 0, color: p.bg ? 'white' : p.color }} />
                    <span>{f}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  width: '100%', 
                  padding: '1.2rem', 
                  borderRadius: '16px', 
                  border: 'none', 
                  background: p.bg ? 'white' : 'var(--primary)', 
                  color: p.bg ? 'var(--primary)' : 'white',
                  fontWeight: '900',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                Começar Agora
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
