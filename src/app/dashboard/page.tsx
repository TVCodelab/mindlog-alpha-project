'use client';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Star, 
  Smile, 
  Coffee, 
  Cloud,
  Moon,
  Sun,
  Gift
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DashboardHome() {
  const [greeting, setGreeting] = useState("Bom dia, Nathan! ✨");
  
  const floatingIcons = [
    { icon: <Star fill="var(--accent)" color="var(--accent)" />, top: '10%', left: '5%' },
    { icon: <Heart fill="var(--secondary)" color="var(--secondary)" />, top: '20%', right: '10%' },
    { icon: <Smile color="var(--primary)" />, bottom: '15%', left: '8%' },
    { icon: <Zap fill="#feca57" color="#feca57" />, top: '40%', right: '15%' },
    { icon: <Gift color="var(--primary-dark)" />, bottom: '20%', right: '5%' },
  ];

  return (
    <div style={{ position: 'relative', minHeight: 'calc(100vh - 100px)' }}>
      {/* Ícones flutuantes decorativos para alegria */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', 
            ...item, 
            opacity: 0.4, 
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <header style={{ marginBottom: '4rem', zIndex: 1, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            padding: '0.6rem 1.5rem', 
            background: 'white', 
            borderRadius: '100px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            marginBottom: '2rem',
            color: 'var(--primary-dark)',
            fontWeight: '800'
          }}
        >
          <Sparkles size={18} /> VOCÊ ESTÁ INDO MUITO BEM!
        </motion.div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '1rem' }}>
          {greeting}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '500' }}>
          Que tal darmos um passo em direção ao seu bem-estar hoje? 🌈
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', zIndex: 1, position: 'relative' }}>
        {[
          { title: 'Chat Amigo', desc: 'Desabafe com nossa IA empática', icon: '🤖', color: 'var(--primary)', link: '/dashboard/chat' },
          { title: 'Diário Mágico', desc: 'Guarde seus momentos e reflexões', icon: '📖', color: 'var(--secondary)', link: '/dashboard/diario' },
          { title: 'Meditação Relax', desc: 'Respire fundo e encontre paz', icon: '🧘', color: 'var(--success)', link: '/dashboard/exercicios' },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="fun-card"
            style={{ cursor: 'pointer' }}
            onClick={() => window.location.href = card.link}
          >
            <div className="emoji-badge" style={{ marginBottom: '1.5rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem', color: 'var(--text-main)' }}>{card.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>{card.desc}</p>
            
            <button className="btn-modern" style={{ width: '100%', padding: '0.8rem' }}>
              Vamos lá! <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <motion.div 
          className="fun-card" 
          style={{ 
            background: 'linear-gradient(135deg, #fff, #f8f7ff)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            padding: '3rem'
          }}
        >
          <div style={{ fontSize: '4rem' }} className="floating-icon">🎁</div>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem' }}>Prêmio de Gratidão</h3>
            <p style={{ color: 'var(--text-muted)' }}>Você completou 3 dias de diário seguidos! Continue brilhando. ✨</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
