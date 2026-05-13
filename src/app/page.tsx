'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="animated-bg" style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section Ultra Animada */}
      <Hero />

      {/* Seção Sobre com Efeito de Revelação */}
      <section id="sobre" style={{ padding: '120px 0', position: 'relative' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container" 
          style={{ textAlign: 'center' }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}
          >
            <Sparkles size={48} />
          </motion.div>
          
          <h2 style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            O que é o <span className="text-gradient">MindLog?</span>
          </h2>
          
          <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--foreground)', lineHeight: '1.8', fontWeight: '500', opacity: 0.8 }}>
            O MindLog ajuda pessoas a entenderem melhor suas emoções através de registros diários, análises inteligentes e conversas com uma IA empática focada em bem-estar emocional. Acreditamos que cada sentimento importa e merece um espaço seguro para ser explorado.
          </p>
        </motion.div>
      </section>

      {/* Recursos e Planos (Já animados internamente) */}
      <Features />
      <Pricing />
      
      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'white' }}>
        <div className="container">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '1.5rem', cursor: 'pointer' }}
          >
            MindLog
          </motion.div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600' }}>
            &copy; 2026 MindLog — Tecnologia com propósito emocional. <br />
            <span style={{ opacity: 0.5 }}>Feito para transformar mentes.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
