'use client';
import Link from 'next/link';
import { Heart, Book, Sparkles, BarChart, Users, User, Mail, Lock } from 'lucide-react';

export default function Signup() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Lado Esquerdo - Roxo */}
      <div style={{ 
        flex: 1, 
        background: 'linear-gradient(135deg, #7267e0, #5f27cd)', 
        padding: '4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }} className="hide-mobile">
        <div style={{ marginBottom: '2rem' }}>
          <Heart size={80} fill="white" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' }} />
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>MindLog</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '4rem' }}>Sua jornada de bem-estar começa agora.</p>

        <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: <Book size={20} />, text: 'Diário emocional' },
            { icon: <Sparkles size={20} />, text: 'Psicóloga IA 24h' },
            { icon: <BarChart size={20} />, text: 'Insights de humor' },
            { icon: <Users size={20} />, text: 'Comunidade segura' },
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
              {item.icon}
              <span style={{ fontWeight: '600' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lado Direito - Branco */}
      <div style={{ 
        flex: 1.2, 
        background: 'white', 
        padding: '4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Criar conta gratuita</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Preencha os dados abaixo para começar</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="input-group">
              <label>Nome completo</label>
              <div className="input-wrapper">
                <User size={20} />
                <input type="text" placeholder="Digite seu nome completo" />
              </div>
            </div>

            <div className="input-group">
              <label>E-mail</label>
              <div className="input-wrapper">
                <Mail size={20} />
                <input type="email" placeholder="Digite seu e-mail" />
              </div>
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input type="password" placeholder="••••••••" />
              </div>
            </div>

            <div className="input-group">
              <label>Confirmar senha</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input type="password" placeholder="Digite seu confirmar senha" />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px' }} />
              <span>Aceito os Termos de Uso e Política de Privacidade</span>
            </div>

            <button className="btn-purple" style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
              <Sparkles size={20} fill="currentColor" /> Criar minha conta gratuitamente
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
            Já tem conta? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: '700' }}>Fazer login →</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-group label { display: block; font-weight: 700; color: var(--primary-dark); margin-bottom: 0.5rem; font-size: 0.9rem; }
        .input-wrapper { display: flex; alignItems: center; gap: 1rem; padding: 1rem; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 12px; color: var(--primary); }
        .input-wrapper input { border: none; background: transparent; outline: none; flex: 1; font-size: 1rem; color: var(--foreground); }
        @media (max-width: 968px) { .hide-mobile { display: none !important; } }
      `}</style>
    </div>
  );
}
