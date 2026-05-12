'use client';
import Link from 'next/link';
import { Heart, Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
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
        <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '4rem' }}>
          Bem-vindo de volta!<br />Continue sua jornada.
        </p>

        <div style={{ 
          width: '100%', 
          maxWidth: '400px', 
          background: 'rgba(0,0,0,0.2)', 
          padding: '2.5rem', 
          borderRadius: '20px', 
          textAlign: 'left',
          position: 'relative',
          borderLeft: '4px solid white'
        }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            "Cuidar da mente é o ato mais corajoso que existe."
          </p>
          <span style={{ fontWeight: '700', opacity: 0.8 }}>— MindLog</span>
        </div>
      </div>

      {/* Lado Direito - Branco */}
      <div style={{ 
        flex: 1.2, 
        background: 'white', 
        padding: '4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Entrar na sua conta</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Olá de novo! Sentimos sua falta 💜</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="input-group">
              <label>E-mail</label>
              <div className="input-wrapper">
                <Mail size={20} />
                <input type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ margin: 0 }}>Senha</label>
                <Link href="#" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>Esqueci minha senha</Link>
              </div>
              <div className="input-wrapper">
                <Lock size={20} />
                <input type="password" placeholder="••••••••" />
              </div>
            </div>

            <button className="btn-purple" style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }} onClick={() => window.location.href = '/dashboard'}>
              Entrar <ArrowRight size={20} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
            Não tem conta? <Link href="/cadastro" style={{ color: 'var(--primary)', fontWeight: '700' }}>Cadastre-se grátis →</Link>
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
