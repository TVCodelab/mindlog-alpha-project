'use client';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ 
      padding: '160px 0 100px 0', 
      background: 'radial-gradient(circle at top right, var(--accent-soft), transparent 40%), radial-gradient(circle at bottom left, var(--accent-soft), transparent 40%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="animate-fade-in">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem', 
            background: 'var(--accent-soft)', 
            borderRadius: '100px', 
            color: 'var(--primary)',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} />
            IA Terapêutica disponível 24h
          </div>
          
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            MindLog — Sua mente <span style={{ color: 'var(--primary)' }}>merece</span> ser ouvida.
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px' }}>
            Uma plataforma inteligente de apoio emocional com diário pessoal, monitoramento de humor, comunidade e suporte com IA focado em você.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/cadastro" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Começar Agora
            </Link>
            <Link href="#planos" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Conhecer Planos <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
          <div className="glass" style={{ 
            width: '100%', 
            aspectRatio: '1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)'
          }}>
             {/* Mock de Ilustração / Imagem */}
             <div style={{ 
               width: '80%', 
               height: '80%', 
               background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
               borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
               opacity: '0.2',
               filter: 'blur(40px)',
               position: 'absolute'
             }}></div>
             <div className="glass" style={{ width: '70%', height: '85%', padding: '2rem' }}>
                <div style={{ width: '100%', height: '12px', background: 'var(--accent-soft)', borderRadius: '6px', marginBottom: '1rem' }}></div>
                <div style={{ width: '60%', height: '12px', background: 'var(--accent-soft)', borderRadius: '6px', marginBottom: '2rem' }}></div>
                
                <div className="glass" style={{ padding: '1rem', marginBottom: '1rem', border: 'none', background: 'white' }}>
                  <div style={{ width: '100%', height: '8px', background: 'var(--accent-soft)', borderRadius: '4px' }}></div>
                </div>
                <div className="glass" style={{ padding: '1rem', marginBottom: '1rem', border: 'none', background: 'white', width: '80%', marginLeft: 'auto' }}>
                  <div style={{ width: '100%', height: '8px', background: 'var(--primary-light)', borderRadius: '4px' }}></div>
                </div>
                
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Sparkles size={24} />
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; text-align: center; }
          .container > div { display: flex; flex-direction: column; align-items: center; }
          h1 { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
