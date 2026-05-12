'use client';
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
      padding: '2rem'
    }}>
      {/* Blobs de fundo conforme imagem */}
      <div className="blob" style={{ width: '400px', height: '400px', background: 'var(--primary)', top: '-100px', left: '-100px' }}></div>
      <div className="blob" style={{ width: '300px', height: '300px', background: 'var(--accent-pink)', bottom: '50px', right: '50px' }}></div>
      <div className="blob" style={{ width: '250px', height: '250px', background: 'var(--primary-dark)', top: '20%', right: '10%' }}></div>

      <div className="animate-fade-in" style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: '10rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '-1rem', letterSpacing: '-0.05em' }}>
          MindLog
        </h1>
        <p style={{ fontSize: '1.8rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '4rem' }}>
          Curando mentes com IA
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          <Link href="/cadastro" className="btn-purple">
            Cadastre-se!
          </Link>
          
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-dark)' }}>Ou...</span>

          <Link href="/login" className="btn-purple">
            Faça Login!
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 { font-size: 5rem !important; }
          p { font-size: 1.2rem !important; }
          div { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
