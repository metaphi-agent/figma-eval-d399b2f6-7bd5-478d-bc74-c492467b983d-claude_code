import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[--color-background]">
      <Sidebar />
      <Header title={title} />
      <main className="ml-[250px] pt-[100px] p-10">
        {children}
      </main>
    </div>
  );
}
