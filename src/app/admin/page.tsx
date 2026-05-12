'use client';
import { Users, MessageSquare, Activity, Settings } from 'lucide-react';

export default function AdminHome() {
  const adminStats = [
    { label: 'Total de Usuários', value: '1.284', icon: <Users />, trend: '+12% este mês' },
    { label: 'Mensagens de IA', value: '45.290', icon: <Activity />, trend: '+5% hoje' },
    { label: 'Posts na Comunidade', value: '856', icon: <MessageSquare />, trend: '+22% esta semana' },
    { label: 'Solicitações Suporte', value: '14', icon: <Settings />, trend: '3 pendentes' },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Painel Administrativo</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {adminStats.map((stat, i) => (
          <div key={i} style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}>{stat.icon}</div>
              <div style={{ fontSize: '0.75rem', color: '#2ecc71', fontWeight: '700' }}>{stat.trend}</div>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '0.2rem' }}>{stat.label}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Últimas Atividades</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
              <th style={{ padding: '1rem', color: '#636e72', fontSize: '0.9rem' }}>Usuário</th>
              <th style={{ padding: '1rem', color: '#636e72', fontSize: '0.9rem' }}>Ação</th>
              <th style={{ padding: '1rem', color: '#636e72', fontSize: '0.9rem' }}>Data</th>
              <th style={{ padding: '1rem', color: '#636e72', fontSize: '0.9rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'João Pedro', action: 'Assinou Plano Equilíbrio', date: 'Hoje, 14:30', status: 'Concluído' },
              { user: 'Mariana Lima', action: 'Novo post na comunidade', date: 'Hoje, 12:15', status: 'Moderado' },
              { user: 'Roberto Souza', action: 'Solicitou suporte técnico', date: 'Ontem, 18:45', status: 'Pendente' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f8f9fa' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>{row.user}</td>
                <td style={{ padding: '1rem' }}>{row.action}</td>
                <td style={{ padding: '1rem', color: '#636e72' }}>{row.date}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '100px', 
                    fontSize: '0.75rem', 
                    fontWeight: '700',
                    background: row.status === 'Concluído' ? '#e1f9eb' : row.status === 'Pendente' ? '#fff4e5' : '#f0ebff',
                    color: row.status === 'Concluído' ? '#2ecc71' : row.status === 'Pendente' ? '#f39c12' : 'var(--primary)'
                  }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
