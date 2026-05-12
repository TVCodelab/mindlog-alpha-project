'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookText, 
  MessageCircle, 
  Users, 
  BarChart2, 
  Activity, 
  Settings, 
  LogOut,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Activity size={20} />, label: 'Check-in Diário', href: '/dashboard/checkin' },
  { icon: <BookText size={20} />, label: 'Diário Pessoal', href: '/dashboard/diario' },
  { icon: <Users size={20} />, label: 'Comunidade', href: '/dashboard/comunidade' },
  { icon: <MessageCircle size={20} />, label: 'Conversar com IA', href: '/dashboard/chat' },
  { icon: <BarChart2 size={20} />, label: 'Insights', href: '/dashboard/insights' },
  { icon: <MessageSquare size={20} />, label: 'Exercícios', href: '/dashboard/exercicios' },
];

const secondaryItems = [
  { icon: <MessageSquare size={20} />, label: 'Fale Conosco', href: '/dashboard/suporte' },
  { icon: <Settings size={20} />, label: 'Perfil', href: '/dashboard/perfil' },
  { icon: <HelpCircle size={20} />, label: 'Ajuda', href: '/dashboard/ajuda' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ 
      width: '280px', 
      height: '100vh', 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      background: 'var(--background)',
      borderRight: '1px solid var(--glass-border)',
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
        MindLog
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '0.8rem 1rem', 
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: pathname === item.href ? '600' : '500',
              background: pathname === item.href ? 'var(--accent-soft)' : 'transparent',
              color: pathname === item.href ? 'var(--primary)' : 'var(--text-muted)',
              transition: 'var(--transition)'
            }}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        <div style={{ margin: '1.5rem 0', height: '1px', background: 'var(--glass-border)' }}></div>

        {secondaryItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '0.8rem 1rem', 
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: 'var(--text-muted)',
              transition: 'var(--transition)'
            }}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem', 
        padding: '0.8rem 1rem', 
        color: '#ff4757', 
        marginTop: 'auto',
        fontWeight: '600'
      }}>
        <LogOut size={20} />
        Sair
      </button>

      <style jsx>{`
        a:hover {
          background: var(--accent-soft);
          color: var(--primary) !important;
        }
      `}</style>
    </aside>
  );
}
