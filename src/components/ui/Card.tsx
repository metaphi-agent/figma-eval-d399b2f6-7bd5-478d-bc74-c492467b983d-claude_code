import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  action?: ReactNode;
}

export default function Card({ children, className = '', title, action }: CardProps) {
  return (
    <div className={`bg-white rounded-[25px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-5">
          {title && <h3 className="text-[22px] font-semibold text-[#343C6A]">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
