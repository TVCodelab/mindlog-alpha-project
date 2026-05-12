'use client';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function Login() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-soft)', padding: '2rem' }}>
      <div className="glass animate-fade-in" style={{ width: '100%', maxWidth: '450px', background: 'white', padding: '3rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar para o início
        </Link>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Bem-vindo de volta</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Sua jornada de bem-estar continua aqui.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                placeholder="exemplo@email.com" 
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Senha</label>
              <Link href="#" style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>Esqueci minha senha</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }}
              />
            </div>
          </div>

          <button className="btn-primary" style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }} type="button" onClick={() => window.location.href = '/dashboard'}>
            Entrar
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Ainda não tem uma conta? <Link href="/cadastro" style={{ color: 'var(--primary)', fontWeight: '600' }}>Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
