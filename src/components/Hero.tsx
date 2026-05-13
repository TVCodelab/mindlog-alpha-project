'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      padding: '2rem',
      overflow: 'hidden'
    }}>
      {/* Blobs de fundo ANIMADOS e INTERATIVOS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="blob" 
        style={{ width: '600px', height: '600px', background: 'var(--primary)', top: '-200px', left: '-200px', opacity: 0.3 }}
      ></motion.div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="blob" 
        style={{ width: '500px', height: '500px', background: 'var(--accent-pink)', bottom: '-100px', right: '-100px', opacity: 0.3 }}
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{ zIndex: 1 }}
      >
        <motion.h1 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            fontSize: '12rem', 
            fontWeight: '950', 
            color: 'var(--primary-dark)', 
            marginBottom: '-1.5rem', 
            letterSpacing: '-0.06em',
            textShadow: '0 20px 50px rgba(95, 39, 205, 0.2)'
          }}
        >
          MindLog
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '5rem', letterSpacing: '0.1em' }}
        >
          Curando mentes com IA
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}>
            <Link href="/cadastro" className="btn-purple" style={{ fontSize: '1.4rem', padding: '1.2rem 3.5rem' }}>
              Cadastre-se!
            </Link>
          </motion.div>
          
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-dark)' }}
          >
            Ou...
          </motion.span>

          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }}>
            <Link href="/login" className="btn-purple" style={{ fontSize: '1.4rem', padding: '1.2rem 3.5rem' }}>
              Faça Login!
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 968px) {
          h1 { font-size: 6rem !important; }
          p { font-size: 1.5rem !important; }
          div { flex-direction: column; gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
