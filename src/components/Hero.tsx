'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      padding: '4rem 2rem',
      overflow: 'hidden'
    }}>
      {/* Luzes dinâmicas ao fundo */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          width: '800px', 
          height: '800px', 
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '-10%',
          left: '-10%',
          zIndex: 0
        }}
      />

      <div style={{ zIndex: 1, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            padding: '0.6rem 1.5rem', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '100px', 
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '3rem',
            color: 'var(--secondary)',
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          <Sparkles size={16} /> A Revolução da Saúde Mental
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ 
            fontSize: 'clamp(4rem, 15vw, 12rem)', 
            fontWeight: '900', 
            lineHeight: '0.9', 
            marginBottom: '2rem',
            letterSpacing: '-0.05em'
          }}
        >
          <span className="text-gradient">MindLog</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ 
            fontSize: '1.5rem', 
            color: 'var(--text-dim)', 
            maxWidth: '700px', 
            margin: '0 auto 4rem auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}
        >
          Uma experiência imersiva de autoconhecimento guiada por <span style={{ color: '#fff', fontWeight: '800' }}>Inteligência Artificial</span>. Curando mentes com tecnologia e empatia.
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/cadastro" className="btn-premium" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Começar Jornada <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/login" style={{ 
              color: '#fff', 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              padding: '1.2rem 3rem',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              Já tenho conta
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', right: '10%', bottom: '20%', opacity: 0.2, color: 'var(--secondary)' }}
      >
        <Sparkles size={100} />
      </motion.div>
    </section>
  );
}
