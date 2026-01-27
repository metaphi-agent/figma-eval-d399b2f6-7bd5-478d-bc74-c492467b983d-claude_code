export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-[15px] transition-colors duration-150'

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-text-primary hover:bg-bg-tertiary'
  }

  const sizes = {
    sm: 'px-4 py-2 text-[15px]',
    md: 'px-6 py-3 text-[18px]',
    lg: 'px-8 py-4 text-[18px]'
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
