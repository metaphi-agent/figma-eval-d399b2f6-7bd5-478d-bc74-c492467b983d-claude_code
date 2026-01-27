export default function Input({
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[16px] text-text-primary mb-2 font-normal">
          {label}
        </label>
      )}
      <input
        className={`w-full px-5 py-4 text-[15px] text-text-secondary bg-white border border-border-light rounded-[15px] outline-none focus:border-primary-500 transition-colors ${error ? 'border-error-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-[13px] text-error-500">{error}</p>
      )}
    </div>
  )
}
