'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

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
      {/* Blobs Suaves */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          width: '600px', 
          height: '600px', 
          background: 'rgba(157, 141, 241, 0.15)',
          filter: 'blur(80px)',
          top: '-10%',
          right: '-10%',
          zIndex: 0,
          borderRadius: '50%'
        }}
      />

      <div style={{ zIndex: 1, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            padding: '0.6rem 1.5rem', 
            background: 'white', 
            borderRadius: '100px', 
            boxShadow: '0 4px 15px rgba(157, 141, 241, 0.1)',
            marginBottom: '3rem',
            color: 'var(--primary-dark)',
            fontSize: '0.9rem',
            fontWeight: '700'
          }}
        >
          <Heart size={16} fill="var(--primary)" /> Sua mente em primeiro lugar
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ 
            fontSize: 'clamp(4rem, 12vw, 10rem)', 
            fontWeight: '800', 
            lineHeight: '0.95', 
            marginBottom: '2rem',
            color: 'var(--text-main)'
          }}
        >
          Mind<span className="text-gradient">Log</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ 
            fontSize: '1.4rem', 
            color: 'var(--text-muted)', 
            maxWidth: '650px', 
            margin: '0 auto 4rem auto',
            lineHeight: '1.6'
          }}
        >
          Um espaço seguro e inteligente para cuidar da sua saúde emocional com apoio de IA 24h por dia.
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/cadastro" className="btn-soft" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
              Começar Grátis <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/login" style={{ 
              color: 'var(--primary-dark)', 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              padding: '1.2rem 3rem',
              borderRadius: '100px',
              background: 'white',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              Entrar
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
