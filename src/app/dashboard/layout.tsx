import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--accent-soft)' }}>
      <Sidebar />
      <main style={{ 
        flex: 1, 
        marginLeft: '280px', 
        padding: '2rem 3rem',
        minHeight: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
