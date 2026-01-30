import CreditCard from '../components/ui/CreditCard';
import Card from '../components/ui/Card';

// Sample data
const recentTransactions = [
  {
    id: 1,
    icon: 'card',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    type: 'expense',
    color: '#FFECE8',
    iconColor: '#FF7B5C',
  },
  {
    id: 2,
    icon: 'paypal',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    type: 'income',
    color: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    id: 3,
    icon: 'person',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    type: 'income',
    color: '#DCFAF8',
    iconColor: '#41D4A8',
  },
];

const weeklyActivity = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  deposit: [480, 350, 320, 480, 150, 390, 400],
  withdraw: [240, 130, 250, 350, 240, 280, 330],
};

const expenseStats = [
  { label: 'Entertainment', percentage: 30, color: '#343C6A' },
  { label: 'Bill Expense', percentage: 15, color: '#FC7900' },
  { label: 'Investment', percentage: 20, color: '#FF82AC' },
  { label: 'Others', percentage: 35, color: '#396AFF' },
];

const quickTransferUsers = [
  { id: 1, name: 'Livia Bator', role: 'CEO', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=70&h=70&fit=crop' },
  { id: 2, name: 'Randy Press', role: 'Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop' },
  { id: 3, name: 'Workman', role: 'Designer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=70&h=70&fit=crop' },
];

const balanceHistory = [
  { month: 'Jul', value: 200 },
  { month: 'Aug', value: 350 },
  { month: 'Sep', value: 250 },
  { month: 'Oct', value: 650 },
  { month: 'Nov', value: 400 },
  { month: 'Dec', value: 600 },
  { month: 'Jan', value: 550 },
];

// Icon components
const TransactionIcon = ({ type, color, iconColor }: { type: string; color: string; iconColor: string }) => {
  const icons: Record<string, JSX.Element> = {
    card: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <rect x="3" y="5" width="19" height="14" rx="2" stroke={iconColor} strokeWidth="2"/>
        <path d="M3 10H22" stroke={iconColor} strokeWidth="2"/>
      </svg>
    ),
    paypal: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M6.5 21.5H9L10 15.5H13C16.5 15.5 19 13 19 9.5C19 6 16.5 4 13 4H7L4 21.5H6.5Z" stroke={iconColor} strokeWidth="2"/>
      </svg>
    ),
    person: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <circle cx="12.5" cy="8" r="4" stroke={iconColor} strokeWidth="2"/>
        <path d="M5 21C5 17.134 8.134 14 12.5 14C16.866 14 20 17.134 20 21" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <div
      className="w-[55px] h-[55px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {icons[type]}
    </div>
  );
};

export default function Dashboard() {
  const maxBarValue = 500;

  return (
    <div className="space-y-6">
      {/* Top Section: Cards + Recent Transactions */}
      <div className="grid grid-cols-12 gap-8">
        {/* My Cards */}
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
            <button className="text-[17px] font-semibold text-[#343C6A] hover:text-[#396AFF]">
              See All
            </button>
          </div>
          <div className="flex gap-8">
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="dark"
            />
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="light"
            />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Recent Transaction</h2>
          <Card className="h-[235px]">
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <TransactionIcon
                      type={transaction.icon}
                      color={transaction.color}
                      iconColor={transaction.iconColor}
                    />
                    <div>
                      <p className="text-[16px] font-medium text-[#343C6A]">{transaction.title}</p>
                      <p className="text-[15px] text-[#718EBF]">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`text-[16px] font-medium ${
                      transaction.type === 'income' ? 'text-[#41D4A8]' : 'text-[#FE5C73]'
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Middle Section: Weekly Activity + Expense Statistics */}
      <div className="grid grid-cols-12 gap-8">
        {/* Weekly Activity */}
        <div className="col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Weekly Activity</h2>
          <Card className="h-[322px]">
            <div className="flex items-center justify-end gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#396AFF]"></div>
                <span className="text-[15px] text-[#718EBF]">Diposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF82AC]"></div>
                <span className="text-[15px] text-[#718EBF]">Withdraw</span>
              </div>
            </div>
            <div className="flex items-end justify-between h-[220px] px-4">
              {weeklyActivity.labels.map((day, index) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div className="flex items-end gap-2 h-[180px]">
                    <div
                      className="w-[15px] bg-[#396AFF] rounded-t-lg"
                      style={{ height: `${(weeklyActivity.deposit[index] / maxBarValue) * 180}px` }}
                    ></div>
                    <div
                      className="w-[15px] bg-[#16DBCC] rounded-t-lg"
                      style={{ height: `${(weeklyActivity.withdraw[index] / maxBarValue) * 180}px` }}
                    ></div>
                  </div>
                  <span className="text-[13px] text-[#718EBF]">{day}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Expense Statistics */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Expense Statistics</h2>
          <Card className="h-[322px] flex items-center justify-center">
            <div className="relative w-[260px] h-[260px]">
              {/* Simple pie chart representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#343C6A" strokeWidth="20" strokeDasharray="75.4 175.93" strokeDashoffset="0"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FC7900" strokeWidth="20" strokeDasharray="37.7 213.63" strokeDashoffset="-75.4"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF82AC" strokeWidth="20" strokeDasharray="50.27 200.93" strokeDashoffset="-113.1"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#396AFF" strokeWidth="20" strokeDasharray="87.96 163.3" strokeDashoffset="-163.4"/>
              </svg>
              {/* Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                <p className="text-[15px] font-bold text-white">30%</p>
                <p className="text-[12px] text-white">Entertainment</p>
              </div>
              <div className="absolute top-1/4 right-0 text-center">
                <p className="text-[15px] font-bold text-white">15%</p>
                <p className="text-[12px] text-white">Bill Expense</p>
              </div>
              <div className="absolute bottom-1/4 left-0 text-center">
                <p className="text-[15px] font-bold text-white">20%</p>
                <p className="text-[12px] text-white">Investment</p>
              </div>
              <div className="absolute bottom-0 right-1/4 text-center">
                <p className="text-[15px] font-bold text-white">35%</p>
                <p className="text-[12px] text-white">Others</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Section: Quick Transfer + Balance History */}
      <div className="grid grid-cols-12 gap-8">
        {/* Quick Transfer */}
        <div className="col-span-5">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Quick Transfer</h2>
          <Card className="h-[276px]">
            <div className="flex items-center gap-6 mb-6">
              {quickTransferUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={`text-center cursor-pointer ${index === 0 ? 'font-semibold' : ''}`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={`w-[70px] h-[70px] rounded-full object-cover mx-auto mb-2 ${
                      index === 0 ? 'ring-2 ring-[#396AFF] ring-offset-2' : ''
                    }`}
                    loading="lazy"
                  />
                  <p className="text-[16px] text-[#343C6A]">{user.name}</p>
                  <p className="text-[15px] text-[#718EBF]">{user.role}</p>
                </div>
              ))}
              <button className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center text-[#718EBF] hover:text-[#396AFF] hover:shadow-lg transition-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-[#718EBF]">Write Amount</span>
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  defaultValue="525.50"
                  className="flex-1 h-[50px] bg-[#EDF1F7] rounded-l-full px-6 text-[16px] text-[#718EBF] focus:outline-none"
                />
                <button className="h-[50px] px-6 bg-[#396AFF] text-white rounded-r-full text-[16px] font-medium flex items-center gap-2 hover:bg-[#2D60E8] transition-colors">
                  Send
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10L18 2L14 18L10 12L2 10Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Balance History */}
        <div className="col-span-7">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Balance History</h2>
          <Card className="h-[276px]">
            <div className="h-full flex flex-col">
              {/* Y-axis labels */}
              <div className="flex-1 relative">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[13px] text-[#718EBF]">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>
                {/* Chart area */}
                <div className="ml-10 h-full relative">
                  <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="600" y2="0" stroke="#F3F5FC" strokeWidth="1"/>
                    <line x1="0" y1="50" x2="600" y2="50" stroke="#F3F5FC" strokeWidth="1"/>
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#F3F5FC" strokeWidth="1"/>
                    <line x1="0" y1="150" x2="600" y2="150" stroke="#F3F5FC" strokeWidth="1"/>
                    <line x1="0" y1="200" x2="600" y2="200" stroke="#F3F5FC" strokeWidth="1"/>
                    {/* Line chart */}
                    <path
                      d="M0,150 Q50,100 100,125 T200,75 T300,100 T400,50 T500,75 T600,62"
                      fill="none"
                      stroke="#396AFF"
                      strokeWidth="3"
                    />
                    {/* Area fill */}
                    <path
                      d="M0,150 Q50,100 100,125 T200,75 T300,100 T400,50 T500,75 T600,62 L600,200 L0,200 Z"
                      fill="url(#gradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#396AFF" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#396AFF" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between ml-10 mt-2 text-[13px] text-[#718EBF]">
                {balanceHistory.map((item) => (
                  <span key={item.month}>{item.month}</span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
