'use client';
import { useState } from 'react';
import { Save, Plus, Calendar } from 'lucide-react';

export default function Diary() {
  const [entries, setEntries] = useState([
    { date: '12 de Maio, 2026', title: 'Um dia reflexivo', content: 'Hoje senti que finalmente estou conseguindo lidar melhor com as pressões do trabalho...' },
    { date: '10 de Maio, 2026', title: 'Pequenas vitórias', content: 'Consegui terminar o livro que estava lendo e me senti muito produtivo.' }
  ]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem' }}>Meu Diário Pessoal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Registre seus pensamentos mais profundos.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={20} /> Novo Relato
        </button>
      </header>

      <div className="glass" style={{ background: 'white', padding: '2.5rem', marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Título do seu relato..." 
            style={{ width: '100%', fontSize: '1.5rem', fontWeight: '700', border: 'none', outline: 'none', background: 'transparent' }}
          />
        </div>
        <textarea 
          placeholder="Como foi seu dia? Como você está se sentindo?"
          style={{ width: '100%', minHeight: '300px', border: 'none', outline: 'none', resize: 'none', fontSize: '1.1rem', lineHeight: '1.8', background: 'transparent' }}
        ></textarea>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Save size={20} /> Salvar Relato
          </button>
        </div>
      </div>

      <h3 style={{ marginBottom: '1.5rem' }}>Relatos Anteriores</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {entries.map((entry, i) => (
          <div key={i} className="glass" style={{ background: 'white', padding: '1.5rem', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              <Calendar size={14} /> {entry.date}
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>{entry.title}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {entry.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
