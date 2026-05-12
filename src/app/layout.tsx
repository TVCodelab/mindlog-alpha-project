import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MindLog — Sua mente merece ser ouvida',
  description: 'Uma plataforma inteligente de apoio emocional com diário pessoal, monitoramento de humor e suporte com IA 24h.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
