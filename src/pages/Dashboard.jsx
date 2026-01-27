import Card from '../components/ui/Card'
import CreditCard from '../components/ui/CreditCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, CartesianGrid } from 'recharts'

const weeklyActivityData = [
  { day: 'Sat', deposit: 250, withdraw: 480 },
  { day: 'Sun', deposit: 150, withdraw: 350 },
  { day: 'Mon', deposit: 320, withdraw: 250 },
  { day: 'Tue', deposit: 480, withdraw: 380 },
  { day: 'Wed', deposit: 250, withdraw: 150 },
  { day: 'Thu', deposit: 320, withdraw: 480 },
  { day: 'Fri', deposit: 400, withdraw: 320 }
]

const expenseData = [
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Bill Expense', value: 15, color: '#FC7900' },
  { name: 'Investment', value: 20, color: '#FA00FF' },
  { name: 'Others', value: 35, color: '#396AFF' }
]

const balanceHistoryData = [
  { month: 'Jul', balance: 200 },
  { month: 'Aug', balance: 400 },
  { month: 'Sep', balance: 500 },
  { month: 'Oct', balance: 800 },
  { month: 'Nov', balance: 600 },
  { month: 'Dec', balance: 750 },
  { month: 'Jan', balance: 650 }
]

const recentTransactions = [
  { icon: '💳', title: 'Deposit from my Card', date: '28 January 2021', amount: '-$850', type: 'expense' },
  { icon: '💰', title: 'Deposit Paypal', date: '25 January 2021', amount: '+$2,500', type: 'income' },
  { icon: '💵', title: 'Jemi Wilson', date: '21 January 2021', amount: '+$5,400', type: 'income' }
]

const quickTransferUsers = [
  { name: 'Livia Bator', role: 'CEO', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { name: 'Randy Press', role: 'Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: 'Workman', role: 'Designer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' }
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* My Cards & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        {/* My Cards */}
        <Card>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[22px] font-semibold text-text-primary">My Cards</h2>
            <button className="text-[17px] font-semibold text-text-primary hover:text-primary-500 transition-colors">
              See All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCard />
            <CreditCard variant="white" />
          </div>
        </Card>

        {/* Recent Transaction */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Recent Transaction</h2>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-[55px] h-[55px] rounded-full bg-bg-secondary flex items-center justify-center text-[24px]">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-text-primary">{transaction.title}</p>
                    <p className="text-[15px] text-text-secondary">{transaction.date}</p>
                  </div>
                </div>
                <span className={`text-[16px] font-medium ${transaction.type === 'income' ? 'text-success-500' : 'text-error-500'}`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Weekly Activity & Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        {/* Weekly Activity */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivityData} barGap={8}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <Bar dataKey="deposit" fill="#396AFF" radius={[10, 10, 0, 0]} barSize={15} />
              <Bar dataKey="withdraw" fill="#16DBCC" radius={[10, 10, 0, 0]} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#16DBCC]" />
              <span className="text-[15px] text-text-secondary">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#396AFF]" />
              <span className="text-[15px] text-text-secondary">Withdraw</span>
            </div>
          </div>
        </Card>

        {/* Expense Statistics */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Expense Statistics</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[13px] text-text-secondary">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-[445px_1fr] gap-6">
        {/* Quick Transfer */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Quick Transfer</h2>

          <div className="flex items-center gap-4 mb-6">
            {quickTransferUsers.map((user, index) => (
              <div key={index} className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[15px] font-normal text-text-primary text-center">{user.name}</p>
                <p className="text-[13px] text-text-secondary">{user.role}</p>
              </div>
            ))}
            <button className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-bg-tertiary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#718EBF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-[16px] text-text-secondary mb-2">Write Amount</p>
              <input
                type="text"
                defaultValue="525.50"
                className="w-full px-4 py-3 bg-bg-secondary rounded-[50px] text-[16px] text-text-secondary outline-none"
              />
            </div>
            <Button className="flex items-center gap-2">
              Send
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" fill="white" />
              </svg>
            </Button>
          </div>
        </Card>

        {/* Balance History */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Balance History</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={balanceHistoryData}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D60FF" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" stroke="#F3F3F5" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <Area type="monotone" dataKey="balance" stroke="#2D60FF" strokeWidth={3} fill="url(#balanceGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
