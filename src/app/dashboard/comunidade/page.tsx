'use client';
import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

const posts = [
  {
    user: 'Ana Clara',
    avatar: 'AC',
    time: '2h atrás',
    content: 'Hoje consegui meditar por 15 minutos seguidos! Pode parecer pouco, mas para quem vive com ansiedade, é uma vitória gigante. 🌸 #BemEstar #Conquista',
    likes: 24,
    comments: 5
  },
  {
    user: 'Marcos Silva',
    avatar: 'MS',
    time: '5h atrás',
    content: 'A IA do MindLog me deu um insight incrível hoje sobre meus gatilhos de estresse. Recomendo muito o plano Equilíbrio para quem quer se aprofundar!',
    likes: 18,
    comments: 2
  },
  {
    user: 'Carla Dias',
    avatar: 'CD',
    time: '1 dia atrás',
    content: 'Alguém tem dicas de exercícios de respiração para antes de dormir? 💤',
    likes: 42,
    comments: 12
  }
];

export default function Community() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Comunidade MindLog</h1>
        <p style={{ color: 'var(--text-muted)' }}>Um espaço seguro para compartilhar e crescer juntos.</p>
      </header>

      <div className="glass" style={{ background: 'white', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary)' }}>N</div>
          <textarea 
            placeholder="O que você quer compartilhar hoje?"
            style={{ 
              flex: 1, 
              border: 'none', 
              resize: 'none', 
              padding: '0.8rem', 
              fontSize: '1rem', 
              outline: 'none',
              background: 'transparent'
            }}
            rows={3}
          ></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Publicar</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map((post, i) => (
          <div key={i} className="glass" style={{ background: 'white', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.8rem' }}>
                  {post.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{post.user}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.time}</div>
                </div>
              </div>
              <button style={{ color: 'var(--text-muted)' }}><MoreHorizontal size={20} /></button>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              {post.content}
            </p>

            <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Heart size={20} /> {post.likes}
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MessageSquare size={20} /> {post.comments}
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
