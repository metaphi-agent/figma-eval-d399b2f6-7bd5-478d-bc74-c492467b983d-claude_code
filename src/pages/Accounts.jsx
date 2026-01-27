import Card from '../components/ui/Card'
import CreditCard from '../components/ui/CreditCard'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const debitCreditData = [
  { month: 'Jan', debit: 5000, credit: 10000 },
  { month: 'Feb', debit: 8000, credit: 15000 },
  { month: 'Mar', debit: 6000, credit: 12000 },
  { month: 'Apr', debit: 9000, credit: 17000 },
  { month: 'May', debit: 7500, credit: 14000 },
  { month: 'Jun', debit: 10000, credit: 18000 },
  { month: 'Jul', debit: 8500, credit: 16000 }
]

const invoices = [
  { name: 'Apple Store', icon: '🍎', date: '5h ago', amount: '$450' },
  { name: 'Michael', icon: '👤', date: '2 days ago', amount: '$160' },
  { name: 'Playstation', icon: '🎮', date: '5 days ago', amount: '$1085' },
  { name: 'William', icon: '👤', date: '10 days ago', amount: '$90' }
]

const accounts = [
  { name: 'My Balance', balance: '$12,750', number: '+$1,456', change: '+5.41%', color: 'text-primary-500' },
  { name: 'Income', balance: '$5,600', number: '+$2,345', change: '+3.2%', color: 'text-success-500' },
  { name: 'Expense', balance: '$3,460', number: '+$2,100', change: '+8.1%', color: 'text-error-500' },
  { name: 'Total Saving', balance: '$7,920', number: '+$1,050', change: '+2.4%', color: 'text-success-500' }
]

export default function Accounts() {
  return (
    <div className="space-y-6">
      {/* Account Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accounts.map((account, index) => (
          <Card key={index}>
            <p className="text-[14px] text-text-secondary mb-1">{account.name}</p>
            <h3 className="text-[28px] font-semibold text-text-primary mb-2">{account.balance}</h3>
            <div className="flex items-center gap-2">
              <span className={`text-[14px] font-medium ${account.color}`}>{account.number}</span>
              <span className="text-[14px] text-text-secondary">{account.change}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Last Transaction & My Card */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        {/* Last Transaction */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Last Transaction</h2>
          <div className="space-y-4">
            {invoices.map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-bg-secondary rounded-[20px] hover:bg-bg-tertiary transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[24px] shadow-sm">
                    {invoice.icon}
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-text-primary">{invoice.name}</p>
                    <p className="text-[14px] text-text-secondary">{invoice.date}</p>
                  </div>
                </div>
                <span className="text-[16px] font-semibold text-error-500">{invoice.amount}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* My Card */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">My Card</h2>
          <CreditCard />
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-[14px] text-text-secondary mb-1">Card Type</p>
              <p className="text-[16px] font-medium text-text-primary">Secondary</p>
            </div>
            <div>
              <p className="text-[14px] text-text-secondary mb-1">Bank</p>
              <p className="text-[16px] font-medium text-text-primary">DBL Bank</p>
            </div>
            <div>
              <p className="text-[14px] text-text-secondary mb-1">Card Number</p>
              <p className="text-[16px] font-medium text-text-primary">**** **** 5600</p>
            </div>
            <div>
              <p className="text-[14px] text-text-secondary mb-1">Card Holder</p>
              <p className="text-[16px] font-medium text-text-primary">William</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Debit & Credit Overview */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">Debit & Credit Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={debitCreditData}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <Line type="monotone" dataKey="debit" stroke="#FF4B4A" strokeWidth={3} dot={{ fill: '#FF4B4A', r: 5 }} />
            <Line type="monotone" dataKey="credit" stroke="#396AFF" strokeWidth={3} dot={{ fill: '#396AFF', r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#396AFF]" />
            <span className="text-[15px] text-text-secondary">Credit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FF4B4A]" />
            <span className="text-[15px] text-text-secondary">Debit</span>
          </div>
        </div>
      </Card>

      {/* Invoices Sent */}
      <Card>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold text-text-primary">Invoices Sent</h2>
          <button className="text-[17px] font-semibold text-text-primary hover:text-primary-500 transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {invoices.map((invoice, index) => (
            <div key={index} className="p-5 bg-bg-secondary rounded-[20px] hover:bg-bg-tertiary transition-colors cursor-pointer">
              <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center text-[28px] shadow-sm mb-4">
                {invoice.icon}
              </div>
              <p className="text-[16px] font-medium text-text-primary mb-1">{invoice.name}</p>
              <p className="text-[14px] text-text-secondary">{invoice.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
