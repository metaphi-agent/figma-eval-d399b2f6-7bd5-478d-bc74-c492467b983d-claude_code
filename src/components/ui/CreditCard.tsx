interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variant?: 'dark' | 'light';
}

export default function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  variant = 'dark',
}: CreditCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`w-[350px] h-[235px] rounded-[25px] p-6 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white'
          : 'bg-white border border-[#DFEAF2] text-[#343C6A]'
      }`}
    >
      {/* Balance */}
      <div className="mb-8">
        <p className={`text-[12px] ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>Balance</p>
        <p className={`text-[20px] font-semibold ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
          {balance}
        </p>
      </div>

      {/* Card Details */}
      <div className="flex gap-16 mb-8">
        <div>
          <p className={`text-[12px] uppercase ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
            Card Holder
          </p>
          <p className={`text-[15px] font-semibold ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
            {cardHolder}
          </p>
        </div>
        <div>
          <p className={`text-[12px] uppercase ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
            Valid Thru
          </p>
          <p className={`text-[15px] font-semibold ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
            {validThru}
          </p>
        </div>
      </div>

      {/* Card Number */}
      <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-white/20' : 'border-[#DFEAF2]'}`}>
        <p className={`text-[22px] font-semibold tracking-wider ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
          {cardNumber}
        </p>
        {/* Card logo */}
        <div className="flex -space-x-3">
          <div className={`w-[30px] h-[30px] rounded-full ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
          <div className={`w-[30px] h-[30px] rounded-full ${isDark ? 'bg-white/80' : 'bg-[#9199AF]/80'}`}></div>
        </div>
      </div>

      {/* Card chip icon */}
      <div className="absolute top-6 right-6">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="10" width="21" height="15" rx="2" fill={isDark ? 'white' : '#718EBF'} fillOpacity="0.8"/>
          <rect x="10" y="14" width="5" height="3" rx="1" fill={isDark ? '#5B5A6F' : 'white'}/>
          <rect x="10" y="19" width="5" height="3" rx="1" fill={isDark ? '#5B5A6F' : 'white'}/>
          <rect x="17" y="14" width="8" height="3" rx="1" fill={isDark ? '#5B5A6F' : 'white'}/>
          <rect x="17" y="19" width="8" height="3" rx="1" fill={isDark ? '#5B5A6F' : 'white'}/>
        </svg>
      </div>
    </div>
  );
}
