'use client';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

export default function Signup() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-soft)', padding: '2rem' }}>
      <div className="glass animate-fade-in" style={{ width: '100%', maxWidth: '500px', background: 'white', padding: '3rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar para o início
        </Link>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Comece sua jornada</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Crie sua conta no MindLog e cuide da sua mente.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Nome Completo</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Seu nome" 
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }}
              />
            </div>
          </div>

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
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Senha</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Confirmar Senha</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                placeholder="Repita sua senha" 
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }}
              />
            </div>
          </div>

          <button className="btn-primary" style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }} type="button">
            Criar Conta Gratuita
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Já tem uma conta? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Fazer Login</Link>
        </div>
      </div>
    </div>
  );
}
