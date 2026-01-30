import clsx from 'clsx';

interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variant?: 'blue' | 'white' | 'gradient';
  className?: string;
}

export function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  variant = 'blue',
  className
}: CreditCardProps) {
  const isWhite = variant === 'white';
  const isGradient = variant === 'gradient';

  return (
    <div
      className={clsx(
        'relative w-full aspect-[350/235] rounded-[25px] p-6 flex flex-col justify-between overflow-hidden',
        {
          'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]': variant === 'blue',
          'bg-white border border-[--color-border]': variant === 'white',
          'bg-gradient-to-br from-[#5B5A6F] to-[#000]': variant === 'gradient',
        },
        className
      )}
    >
      {/* Card decorative elements */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-10">
        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full border-[30px] border-white" />
        <div className="absolute top-[20px] right-[20px] w-[100px] h-[100px] rounded-full border-[20px] border-white" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className={clsx('text-xs uppercase mb-1', isWhite ? 'text-[--color-text-secondary]' : 'text-white/70')}>
              Balance
            </p>
            <p className={clsx('text-xl font-semibold', isWhite ? 'text-[--color-text-primary]' : 'text-white')}>
              {balance}
            </p>
          </div>
          <div className={clsx('w-9 h-9 rounded-lg flex items-center justify-center', isWhite ? 'bg-[--color-background]' : 'bg-white/20')}>
            <div className="w-6 h-5 flex items-center justify-center">
              <div className={clsx('w-[10px] h-[10px] rounded-full mr-[-2px]', isWhite ? 'bg-[--color-text-secondary]' : 'bg-white')} />
              <div className={clsx('w-[10px] h-[10px] rounded-full', isWhite ? 'bg-[--color-text-secondary]' : 'bg-white')} />
            </div>
          </div>
        </div>

        <div className="flex gap-16 mb-5">
          <div>
            <p className={clsx('text-[10px] uppercase mb-1', isWhite ? 'text-[--color-text-secondary]' : 'text-white/70')}>
              Card Holder
            </p>
            <p className={clsx('text-[13px] font-semibold', isWhite ? 'text-[--color-text-primary]' : 'text-white')}>
              {cardHolder}
            </p>
          </div>
          <div>
            <p className={clsx('text-[10px] uppercase mb-1', isWhite ? 'text-[--color-text-secondary]' : 'text-white/70')}>
              Valid Thru
            </p>
            <p className={clsx('text-[13px] font-semibold', isWhite ? 'text-[--color-text-primary]' : 'text-white')}>
              {validThru}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className={clsx('text-[17px] font-semibold tracking-wider', isWhite ? 'text-[--color-text-primary]' : 'text-white')}>
            {cardNumber}
          </p>
          <div className="flex gap-[-4px]">
            <div className={clsx('w-7 h-7 rounded-full', isWhite ? 'bg-[#DFE5FA]' : 'bg-white/30')} />
            <div className={clsx('w-7 h-7 rounded-full ml-[-8px]', isWhite ? 'bg-[#DFE5FA]' : 'bg-white/30')} />
          </div>
        </div>
      </div>
    </div>
  );
}
