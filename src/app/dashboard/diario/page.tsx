'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Book, Calendar, Trash2, Sparkles } from 'lucide-react';

export default function DiaryPage() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<{id: number, date: string, content: string}[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('mindlog_entries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const saveEntry = () => {
    if (!entry.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString('pt-BR'),
      content: entry
    };
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('mindlog_entries', JSON.stringify(updated));
    setEntry('');
  };

  const deleteEntry = (id: number) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem('mindlog_entries', JSON.stringify(updated));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        className="glass-card" 
        style={{ padding: '2.5rem' }}
      >
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Book color="var(--primary)" /> Novo Registro
        </h2>
        <textarea 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Como foi o seu dia hoje? Escreva livremente..."
          style={{ minHeight: '300px', marginBottom: '2rem', fontSize: '1.1rem', resize: 'none' }}
        />
        <button onClick={saveEntry} className="btn-soft" style={{ width: '100%', justifyContent: 'center' }}>
          <Save size={20} /> Salvar no meu diário
        </button>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-muted)' }}>Registros Anteriores</h3>
        <AnimatePresence>
          {entries.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
              <Calendar size={40} style={{ marginBottom: '1rem' }} />
              <p>Nenhum registro ainda.</p>
            </div>
          ) : (
            entries.map((e) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)' }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ color: '#ff6b6b', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>{e.content}</p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
