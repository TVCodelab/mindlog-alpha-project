'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Target, 
  TrendingUp, 
  MessageCircle, 
  Calendar,
  Sun,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DashboardHome() {
  const [greeting, setGreeting] = useState("Bom dia, campeão!");
  const greetings = [
    "Sua mente é poderosa! ✨",
    "Hoje é um dia incrível para brilhar! 🌟",
    "Você é mais forte do que imagina! 💪",
    "Tudo o que você precisa está dentro de você! ❤️",
    "Vamos conquistar o mundo hoje? 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Energia Vital', value: '85%', icon: <Zap size={24} />, color: '#feca57' },
    { label: 'Humor Médio', value: 'Radiante', icon: <Sun size={24} />, color: '#ff9ff3' },
    { label: 'Foco Mental', value: '92%', icon: <Target size={24} />, color: '#48dbfb' },
    { label: 'Gratidão', value: '+12', icon: <Heart size={24} />, color: '#ff6b6b' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="animated-bg"
      style={{ paddingBottom: '4rem' }}
    >
      {/* Header com Saudação Dinâmica */}
      <header style={{ marginBottom: '4rem', position: 'relative' }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ position: 'absolute', right: '0', top: '0', color: 'var(--accent-yellow)', opacity: 0.3 }}
        >
          <Star size={120} fill="currentColor" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem' }}
        >
          Olá, <span className="text-gradient">Nathan Silvestri!</span>
        </motion.h1>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={greeting}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Sparkles size={24} /> {greeting}
          </motion.p>
        </AnimatePresence>
      </header>

      {/* Grid de Stats Animados */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass card-hover"
            style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '24px', 
              border: '1px solid var(--glass-border)',
              cursor: 'pointer'
            }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '16px', 
              background: `${stat.color}20`, 
              color: stat.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {stat.icon}
            </div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {stat.label}
            </h4>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary-dark)' }}>
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Seção Principal: Gráfico e Ações */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <motion.div 
          variants={itemVariants}
          className="glass" 
          style={{ padding: '2.5rem', background: 'white', borderRadius: '32px', boxShadow: 'var(--shadow)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <TrendingUp color="var(--primary)" /> Seu Crescimento Emocional
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ padding: '0.4rem 1rem', background: 'var(--primary)', color: 'white', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>Semana</div>
              <div style={{ padding: '0.4rem 1rem', background: 'var(--accent-soft)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>Mês</div>
            </div>
          </div>
          
          <div style={{ width: '100%', height: '250px', display: 'flex', alignItems: 'flex-end', gap: '1.5rem', paddingBottom: '1rem' }}>
            {[45, 65, 55, 85, 75, 95, 88].map((h, i) => (
              <div key={i} style={{ flex: 1, background: 'var(--bg-lavender)', borderRadius: '12px', position: 'relative', height: '100%' }}>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1, type: 'spring' as const }}
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    width: '100%', 
                    background: i === 5 ? 'linear-gradient(to top, #ff9ff3, #5f27cd)' : 'linear-gradient(to top, #7267e0, #48dbfb)',
                    borderRadius: '12px',
                    boxShadow: i === 5 ? '0 0 20px rgba(255, 159, 243, 0.5)' : 'none'
                  }}
                >
                  {i === 5 && (
                    <motion.div
                      animate={{ y: [-10, 0, -10] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', color: '#ff9ff3' }}
                    >
                      <Sparkles size={20} />
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
            <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            style={{ 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #5f27cd, #706fd3)', 
              borderRadius: '28px', 
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>IA MindLog</h3>
              <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
                "Vi que você teve uma ótima noite de sono! Que tal aproveitar essa energia para o exercício de gratidão?"
              </p>
              <button style={{ 
                marginTop: '1.5rem', 
                background: 'white', 
                color: 'var(--primary)', 
                padding: '0.8rem 1.5rem', 
                borderRadius: '12px', 
                fontWeight: '800',
                border: 'none'
              }}>
                Falar com a IA
              </button>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.2 }}
            >
              <Sparkles size={100} />
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass" 
            style={{ padding: '2rem', background: 'white', borderRadius: '28px' }}
          >
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '800' }}>Sugestões do Dia</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <MessageCircle size={18} />, text: 'Postar na comunidade', color: '#48dbfb' },
                { icon: <Calendar size={18} />, text: 'Check-in de humor', color: '#1dd1a1' },
                { icon: <Heart size={18} />, text: 'Meditação rápida', color: '#ff6b6b' },
              ].map((act, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '1rem', 
                    background: 'var(--bg-lavender)', 
                    borderRadius: '16px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ color: act.color }}>{act.icon}</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{act.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}
