'use client';
import { User, Mail, Shield, Bell, CreditCard } from 'lucide-react';

export default function Perfil() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Seu Perfil</h1>
        <p style={{ color: 'var(--text-muted)' }}>Gerencie suas informações e preferências.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass" style={{ background: 'white', padding: '2.5rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: '800' }}>
            N
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Nathan Silvestri</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Membro desde Maio de 2026</p>
            <span style={{ padding: '0.4rem 1rem', background: 'var(--accent-soft)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>
              PLANO EQUILÍBRIO
            </span>
          </div>
          <button className="btn-secondary" style={{ marginLeft: 'auto' }}>Editar Foto</button>
        </div>

        <div className="glass" style={{ background: 'white', padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Informações Pessoais</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Nome</label>
                <input type="text" defaultValue="Nathan Silvestri" style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" defaultValue="nathan@exemplo.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'var(--accent-soft)', outline: 'none' }} />
              </div>
            </div>
            <button className="btn-primary" style={{ width: 'fit-content' }}>Salvar Alterações</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass" style={{ background: 'white', padding: '1.5rem', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><Shield size={20} /></div>
              <div>
                <div style={{ fontWeight: '600' }}>Privacidade e Segurança</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Senhas e autenticação</div>
              </div>
            </div>
          </div>
          <div className="glass" style={{ background: 'white', padding: '1.5rem', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><Bell size={20} /></div>
              <div>
                <div style={{ fontWeight: '600' }}>Notificações</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lembretes e alertas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
