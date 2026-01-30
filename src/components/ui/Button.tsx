import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center font-medium rounded-[15px] transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[--color-primary] text-white hover:bg-[--color-primary-dark] active:scale-[0.98]':
              variant === 'primary',
            'bg-[--color-secondary] text-white hover:opacity-90 active:scale-[0.98]':
              variant === 'secondary',
            'border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white':
              variant === 'outline',
            'text-[--color-text-primary] hover:bg-[--color-border]': variant === 'ghost',
            'px-4 py-2 text-sm h-10': size === 'sm',
            'px-6 py-3 text-base h-12': size === 'md',
            'px-8 py-4 text-lg h-[50px]': size === 'lg',
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
