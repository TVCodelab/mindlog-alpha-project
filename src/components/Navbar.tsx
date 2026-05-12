'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 mx-4 mt-4' : 'py-6'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          MindLog
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-links">
          <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
            <Link href="#sobre">Sobre</Link>
            <Link href="#recursos">Recursos</Link>
            <Link href="#planos">Planos</Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} style={{ padding: '0.5rem', borderRadius: '50%' }} className="theme-toggle">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href="/login" className="btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>Entrar</Link>
            <Link href="/cadastro" className="btn-primary" style={{ padding: '0.6rem 1.2rem' }}>Cadastrar</Link>
          </div>
        </div>

        <button className="mobile-menu-btn" style={{ display: 'none' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style jsx>{`
        .desktop-menu a {
          font-weight: 500;
          color: var(--text-muted);
        }
        .desktop-menu a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
