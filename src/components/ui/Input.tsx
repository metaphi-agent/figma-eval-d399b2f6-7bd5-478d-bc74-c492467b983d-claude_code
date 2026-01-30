import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-[--color-text-primary] font-normal text-base">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[--color-text-secondary]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              'w-full h-[50px] px-5 rounded-[15px] border border-[--color-border]',
              'text-[--color-text-primary] text-[15px] font-normal',
              'placeholder:text-[--color-text-secondary]',
              'focus:outline-none focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20',
              'transition-colors',
              'disabled:bg-gray-50 disabled:cursor-not-allowed',
              error && 'border-[--color-error] focus:border-[--color-error] focus:ring-[--color-error]/20',
              icon && 'pl-12',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="text-[--color-error] text-sm">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
