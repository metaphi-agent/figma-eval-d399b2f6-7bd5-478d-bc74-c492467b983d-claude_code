export default function CreditCard({
  balance = '5,756',
  cardHolder = 'Eddy Cusuma',
  validThru = '12/22',
  cardNumber = '3778 **** **** 1234',
  variant = 'blue',
  className = ''
}) {
  const variants = {
    blue: 'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]',
    white: 'bg-white border-2 border-border-light'
  }

  const textColor = variant === 'blue' ? 'text-white' : 'text-text-primary'
  const labelColor = variant === 'blue' ? 'text-white/70' : 'text-text-secondary'

  return (
    <div className={`relative rounded-[25px] p-6 overflow-hidden ${variants[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10">
        {/* Balance */}
        <div className="mb-8">
          <p className={`text-[12px] ${labelColor} mb-1`}>Balance</p>
          <p className={`text-[20px] font-semibold ${textColor}`}>${balance}</p>
        </div>

        {/* Card Holder & Valid Thru */}
        <div className="flex gap-16 mb-6">
          <div>
            <p className={`text-[10px] ${labelColor} mb-1 uppercase`}>CARD HOLDER</p>
            <p className={`text-[15px] font-semibold ${textColor}`}>{cardHolder}</p>
          </div>
          <div>
            <p className={`text-[10px] ${labelColor} mb-1 uppercase`}>VALID THRU</p>
            <p className={`text-[15px] font-semibold ${textColor}`}>{validThru}</p>
          </div>
        </div>

        {/* Card Number & Logo */}
        <div className="flex items-center justify-between">
          <p className={`text-[22px] font-semibold tracking-wider ${textColor}`}>
            {cardNumber}
          </p>
          <div className="flex gap-[-8px]">
            <div className={`w-7 h-7 rounded-full ${variant === 'blue' ? 'bg-white/30' : 'bg-border-light'}`} />
            <div className={`w-7 h-7 rounded-full -ml-3 ${variant === 'blue' ? 'bg-white/30' : 'bg-border-light'}`} />
          </div>
        </div>
      </div>

      {/* Chip Icon */}
      <div className="absolute top-6 right-6">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <rect width="35" height="35" rx="6" fill={variant === 'blue' ? 'white' : '#E6EFF5'} fillOpacity={variant === 'blue' ? '0.3' : '1'}/>
          <rect x="8" y="8" width="19" height="19" rx="3" fill={variant === 'blue' ? 'white' : '#718EBF'} fillOpacity={variant === 'blue' ? '0.5' : '0.5'}/>
        </svg>
      </div>
    </div>
  )
}
