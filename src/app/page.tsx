import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="sobre" style={{ padding: '100px 0', textAlign: 'center' }} className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>O que é o MindLog?</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          O MindLog ajuda pessoas a entenderem melhor suas emoções através de registros diários, análises inteligentes e conversas com uma IA empática focada em bem-estar emocional. Acreditamos que cada sentimento importa e merece um espaço seguro para ser explorado.
        </p>
      </section>
      <Features />
      <Pricing />
      
      <footer style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem' }}>
            MindLog
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            &copy; 2026 MindLog — Tecnologia com propósito emocional. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
