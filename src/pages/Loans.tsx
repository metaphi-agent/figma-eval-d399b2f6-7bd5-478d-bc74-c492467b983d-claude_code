import Card from '../components/ui/Card';

const loanStats = [
  { label: 'Personal Loans', value: '$50,000', icon: 'personal', color: '#E7EDFF', iconColor: '#396AFF' },
  { label: 'Corporate Loans', value: '$100,000', icon: 'corporate', color: '#FFF5D9', iconColor: '#FFBB38' },
  { label: 'Business Loans', value: '$500,000', icon: 'business', color: '#FFE0EB', iconColor: '#FF82AC' },
  { label: 'Custom Loans', value: 'Choose Money', icon: 'custom', color: '#DCFAF8', iconColor: '#16DBCC' },
];

const activeLoans = [
  { id: 1, loanMoney: '$100,000', leftToRepay: '$40,500', duration: '8 Months', interestRate: '12%', installment: '$2,000 / month' },
  { id: 2, loanMoney: '$500,000', leftToRepay: '$250,000', duration: '36 Months', interestRate: '10%', installment: '$8,000 / month' },
  { id: 3, loanMoney: '$900,000', leftToRepay: '$40,500', duration: '12 Months', interestRate: '12%', installment: '$5,000 / month' },
  { id: 4, loanMoney: '$50,000', leftToRepay: '$40,500', duration: '25 Months', interestRate: '5%', installment: '$2,000 / month' },
  { id: 5, loanMoney: '$50,000', leftToRepay: '$40,500', duration: '5 Months', interestRate: '16%', installment: '$10,000 / month' },
  { id: 6, loanMoney: '$80,000', leftToRepay: '$25,500', duration: '14 Months', interestRate: '8%', installment: '$2,000 / month' },
  { id: 7, loanMoney: '$12,000', leftToRepay: '$5,500', duration: '9 Months', interestRate: '13%', installment: '$500 / month' },
  { id: 8, loanMoney: '$160,000', leftToRepay: '$100,800', duration: '3 Months', interestRate: '12%', installment: '$900 / month' },
];

const totalStats = {
  loanMoney: '$125,000',
  leftToRepay: '$750,000',
  installment: '$50,000 / month',
};

export default function Loans() {
  return (
    <div className="space-y-6">
      {/* Loan Options */}
      <div className="grid grid-cols-4 gap-6">
        {loanStats.map((stat) => (
          <Card key={stat.label} className="flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ backgroundColor: stat.color }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                {stat.icon === 'personal' && (
                  <>
                    <circle cx="14" cy="10" r="5" stroke={stat.iconColor} strokeWidth="2"/>
                    <path d="M6 24C6 19.582 9.582 16 14 16C18.418 16 22 19.582 22 24" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
                {stat.icon === 'corporate' && (
                  <>
                    <rect x="4" y="8" width="20" height="16" rx="2" stroke={stat.iconColor} strokeWidth="2"/>
                    <path d="M8 8V6C8 4.895 8.895 4 10 4H18C19.105 4 20 4.895 20 6V8" stroke={stat.iconColor} strokeWidth="2"/>
                    <line x1="14" y1="12" x2="14" y2="20" stroke={stat.iconColor} strokeWidth="2"/>
                  </>
                )}
                {stat.icon === 'business' && (
                  <>
                    <rect x="3" y="14" width="22" height="10" rx="2" stroke={stat.iconColor} strokeWidth="2"/>
                    <path d="M8 14V8L14 4L20 8V14" stroke={stat.iconColor} strokeWidth="2" strokeLinejoin="round"/>
                  </>
                )}
                {stat.icon === 'custom' && (
                  <>
                    <circle cx="14" cy="14" r="10" stroke={stat.iconColor} strokeWidth="2"/>
                    <path d="M14 8V14L18 16" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </div>
            <div>
              <p className="text-[16px] text-[#718EBF]">{stat.label}</p>
              <p className="text-[20px] font-semibold text-[#343C6A]">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Active Loans Overview */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Active Loans Overview</h2>
        <Card>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">SL No</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Loan Money</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Left to repay</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Duration</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Interest rate</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Installment</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Repay</th>
              </tr>
            </thead>
            <tbody>
              {activeLoans.map((loan, index) => (
                <tr key={loan.id} className="border-t border-[#F3F5F9]">
                  <td className="py-4 text-[16px] text-[#343C6A]">{String(index + 1).padStart(2, '0')}.</td>
                  <td className="py-4 text-[16px] text-[#343C6A]">{loan.loanMoney}</td>
                  <td className="py-4 text-[16px] text-[#FE5C73]">{loan.leftToRepay}</td>
                  <td className="py-4 text-[16px] text-[#343C6A]">{loan.duration}</td>
                  <td className="py-4 text-[16px] text-[#343C6A]">{loan.interestRate}</td>
                  <td className="py-4 text-[16px] text-[#343C6A]">{loan.installment}</td>
                  <td className="py-4">
                    <button className="px-5 py-2 border border-[#396AFF] text-[#396AFF] rounded-full text-[14px] font-medium hover:bg-[#396AFF] hover:text-white transition-colors">
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
              {/* Totals Row */}
              <tr className="bg-[#F5F7FA]">
                <td className="py-4 text-[16px] font-semibold text-[#FE5C73]">Total</td>
                <td className="py-4 text-[16px] font-semibold text-[#FE5C73]">{totalStats.loanMoney}</td>
                <td className="py-4 text-[16px] font-semibold text-[#FE5C73]">{totalStats.leftToRepay}</td>
                <td className="py-4"></td>
                <td className="py-4"></td>
                <td className="py-4 text-[16px] font-semibold text-[#FE5C73]">{totalStats.installment}</td>
                <td className="py-4"></td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
