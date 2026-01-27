export default function Card({ children, className = '', noPadding = false }) {
  return (
    <div className={`bg-white rounded-[25px] shadow-card ${noPadding ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  )
}
