import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <nav style={{ background: '#1e212d', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '800' }}>
          <Shield size={20} color="#a28de0" /> Admin MindLog
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
          <Link href="/admin">Visão Geral</Link>
          <Link href="/admin/usuarios">Usuários</Link>
          <Link href="/admin/configuracoes">Configurações</Link>
          <Link href="/">Sair do Painel</Link>
        </div>
      </nav>
      <main style={{ padding: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
