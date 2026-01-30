import CreditCard from '../components/ui/CreditCard';
import Card from '../components/ui/Card';

const accountStats = [
  { label: 'My Balance', value: '$12,750', icon: 'balance', color: '#FFF5D9', iconColor: '#FFBB38' },
  { label: 'Income', value: '$5,600', icon: 'income', color: '#E7EDFF', iconColor: '#396AFF' },
  { label: 'Expense', value: '$3,460', icon: 'expense', color: '#FFE0EB', iconColor: '#FF82AC' },
  { label: 'Total Saving', value: '$7,920', icon: 'saving', color: '#DCFAF8', iconColor: '#16DBCC' },
];

const lastTransactions = [
  { id: 1, icon: 'shopping', name: 'Spotify Subscription', date: '25 Jan 2021', category: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', type: 'expense' },
  { id: 2, icon: 'service', name: 'Mobile Service', date: '25 Jan 2021', category: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', type: 'expense' },
  { id: 3, icon: 'transfer', name: 'Emilly Wilson', date: '25 Jan 2021', category: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', type: 'income' },
];

const invoicesSent = [
  { id: 1, name: 'Apple Store', time: '5h ago', amount: '$450', icon: 'apple', color: '#DCFAF8' },
  { id: 2, name: 'Michael', time: '2 days ago', amount: '$160', icon: 'person', color: '#FFE0EB' },
  { id: 3, name: 'Playstation', time: '5 days ago', amount: '$1085', icon: 'playstation', color: '#E7EDFF' },
  { id: 4, name: 'William', time: '10 days ago', amount: '$90', icon: 'person', color: '#FFF5D9' },
];

const debitCreditData = [
  { day: 'Sat', debit: 280, credit: 180 },
  { day: 'Sun', debit: 320, credit: 210 },
  { day: 'Mon', debit: 260, credit: 180 },
  { day: 'Tue', debit: 440, credit: 280 },
  { day: 'Wed', debit: 340, credit: 220 },
  { day: 'Thu', debit: 380, credit: 300 },
  { day: 'Fri', debit: 460, credit: 350 },
];

const StatIcon = ({ type, color, iconColor }: { type: string; color: string; iconColor: string }) => {
  const icons: Record<string, JSX.Element> = {
    balance: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke={iconColor} strokeWidth="2"/>
        <path d="M12 8V16M9 11H15" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    income: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    expense: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 20V4M12 20L6 14M12 20L18 14" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    saving: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8V12L15 15" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
      {icons[type]}
    </div>
  );
};

export default function Accounts() {
  const maxBarValue = 500;

  return (
    <div className="space-y-6">
      {/* Account Stats */}
      <div className="grid grid-cols-4 gap-6">
        {accountStats.map((stat) => (
          <Card key={stat.label} className="flex items-center gap-4">
            <StatIcon type={stat.icon} color={stat.color} iconColor={stat.iconColor} />
            <div>
              <p className="text-[16px] text-[#718EBF]">{stat.label}</p>
              <p className="text-[25px] font-semibold text-[#343C6A]">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* Last Transaction */}
        <div className="col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Last Transaction</h2>
          <Card>
            <table className="w-full">
              <tbody>
                {lastTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-[#F3F5F9] last:border-b-0">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-[55px] h-[55px] rounded-full flex items-center justify-center ${
                          tx.type === 'income' ? 'bg-[#DCFAF8]' : tx.icon === 'shopping' ? 'bg-[#E7EDFF]' : 'bg-[#FFE0EB]'
                        }`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            {tx.icon === 'shopping' && <path d="M3 3H5L6 14H19L21 6H7" stroke={tx.type === 'income' ? '#41D4A8' : '#396AFF'} strokeWidth="2" strokeLinecap="round"/>}
                            {tx.icon === 'service' && <path d="M12 2L4 6V12C4 16.42 7.36 20.5 12 22C16.64 20.5 20 16.42 20 12V6L12 2Z" stroke="#FF82AC" strokeWidth="2"/>}
                            {tx.icon === 'transfer' && <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12" stroke="#41D4A8" strokeWidth="2" strokeLinecap="round"/>}
                          </svg>
                        </div>
                        <div>
                          <p className="text-[16px] font-medium text-[#343C6A]">{tx.name}</p>
                          <p className="text-[15px] text-[#718EBF]">{tx.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-[16px] text-[#718EBF]">{tx.category}</td>
                    <td className="py-4 text-[16px] text-[#718EBF]">{tx.card}</td>
                    <td className="py-4">
                      <span className={`text-[16px] ${tx.status === 'Pending' ? 'text-[#FFBB38]' : 'text-[#41D4A8]'}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className={`py-4 text-[16px] font-medium text-right ${
                      tx.type === 'income' ? 'text-[#41D4A8]' : 'text-[#FE5C73]'
                    }`}>{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* My Card + Invoices Sent */}
        <div className="col-span-4 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[22px] font-semibold text-[#343C6A]">My Card</h2>
              <button className="text-[17px] font-semibold text-[#343C6A] hover:text-[#396AFF]">See All</button>
            </div>
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="dark"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* Debit & Credit Overview */}
        <div className="col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Debit & Credit Overview</h2>
          <Card>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[16px] text-[#718EBF]">
                <span className="text-[#396AFF] font-medium">$7,560</span> Debited &{' '}
                <span className="text-[#FFBB38] font-medium">$5,420</span> Credited in this Week
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#396AFF]"></div>
                  <span className="text-[15px] text-[#718EBF]">Debit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FFBB38]"></div>
                  <span className="text-[15px] text-[#718EBF]">Credit</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between h-[200px] px-4">
              {debitCreditData.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2">
                  <div className="flex items-end gap-2 h-[160px]">
                    <div
                      className="w-[25px] bg-[#396AFF] rounded-t-lg"
                      style={{ height: `${(item.debit / maxBarValue) * 160}px` }}
                    ></div>
                    <div
                      className="w-[25px] bg-[#FFBB38] rounded-t-lg"
                      style={{ height: `${(item.credit / maxBarValue) * 160}px` }}
                    ></div>
                  </div>
                  <span className="text-[13px] text-[#718EBF]">{item.day}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Invoices Sent */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Invoices Sent</h2>
          <Card>
            <div className="space-y-4">
              {invoicesSent.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center" style={{ backgroundColor: invoice.color }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        {invoice.icon === 'apple' && <path d="M10 2C7 2 5 4 5 7C5 10 7 12 10 12C13 12 15 10 15 7C15 4 13 2 10 2Z" stroke="#16DBCC" strokeWidth="2"/>}
                        {invoice.icon === 'person' && <><circle cx="10" cy="6" r="3" stroke={invoice.color === '#FFE0EB' ? '#FF82AC' : '#FFBB38'} strokeWidth="2"/><path d="M4 18C4 14.134 6.686 11 10 11C13.314 11 16 14.134 16 18" stroke={invoice.color === '#FFE0EB' ? '#FF82AC' : '#FFBB38'} strokeWidth="2"/></>}
                        {invoice.icon === 'playstation' && <rect x="3" y="6" width="14" height="8" rx="2" stroke="#396AFF" strokeWidth="2"/>}
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#343C6A]">{invoice.name}</p>
                      <p className="text-[15px] text-[#718EBF]">{invoice.time}</p>
                    </div>
                  </div>
                  <p className="text-[16px] font-medium text-[#343C6A]">{invoice.amount}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
