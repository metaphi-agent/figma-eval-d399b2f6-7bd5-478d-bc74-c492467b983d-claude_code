import { Layout } from '../components/layout/Layout';
import { Card } from '../components/ui/Card';
import { CreditCard } from '../components/ui/CreditCard';
import { Button } from '../components/ui/Button';
import { ArrowUpRight, ArrowDownRight, Send } from 'lucide-react';

export function Dashboard() {
  const transactions = [
    { id: 1, icon: '💳', name: 'Deposit from my Card', date: '28 January 2021', amount: -850, color: 'bg-yellow-100' },
    { id: 2, icon: '💰', name: 'Deposit Paypal', date: '25 January 2021', amount: 2500, color: 'bg-blue-100' },
    { id: 3, icon: '👤', name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, color: 'bg-green-100' },
  ];

  const contacts = [
    { name: 'Livia Bator', role: 'CEO', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Randy Press', role: 'Director', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Workman', role: 'Designer', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <Layout title="Overview">
      <div className="space-y-6">
        {/* My Cards Section */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[22px] font-semibold text-[--color-text-primary]">My Cards</h2>
            <button className="text-[17px] font-semibold text-[--color-text-primary] hover:text-[--color-primary]">
              See All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="blue"
            />
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="white"
            />
            <Card className="bg-[--color-background]" />
          </div>
        </div>

        {/* Recent Transaction & Weekly Activity Row */}
        <div className="grid grid-cols-3 gap-8">
          {/* Recent Transaction */}
          <Card className="col-span-1">
            <h3 className="text-[22px] font-semibold text-[--color-text-primary] mb-6">
              Recent Transaction
            </h3>
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${tx.color} flex items-center justify-center text-2xl`}>
                      {tx.icon}
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[--color-text-primary]">
                        {tx.name}
                      </p>
                      <p className="text-[15px] text-[--color-text-secondary]">
                        {tx.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[16px] font-medium ${
                      tx.amount > 0 ? 'text-[--color-secondary]' : 'text-[--color-error]'
                    }`}
                  >
                    {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount)}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Activity */}
          <Card className="col-span-2">
            <h3 className="text-[22px] font-semibold text-[--color-text-primary] mb-6">
              Weekly Activity
            </h3>
            <div className="flex gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[--color-primary]" />
                <span className="text-[15px] text-[--color-text-secondary]">Diposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[--color-secondary]" />
                <span className="text-[15px] text-[--color-text-secondary]">Withdraw</span>
              </div>
            </div>
            {/* Bar Chart */}
            <div className="flex items-end justify-between h-[280px] gap-8">
              {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-4 h-full justify-end">
                  <div className="flex gap-2 items-end w-full justify-center h-full">
                    <div
                      className="w-[15px] bg-[--color-primary] rounded-t-lg"
                      style={{ height: `${[65, 75, 70, 100, 35, 80, 90][i]}%` }}
                    />
                    <div
                      className="w-[15px] bg-[--color-secondary] rounded-t-lg"
                      style={{ height: `${[55, 25, 55, 50, 80, 50, 65][i]}%` }}
                    />
                  </div>
                  <span className="text-[13px] text-[--color-text-secondary]">{day}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Expense Statistics & Quick Transfer & Balance History Row */}
        <div className="grid grid-cols-3 gap-8">
          {/* Expense Statistics */}
          <Card>
            <h3 className="text-[22px] font-semibold text-[--color-text-primary] mb-6">
              Expense Statistics
            </h3>
            <div className="flex items-center justify-center py-8">
              <div className="relative w-[240px] h-[240px]">
                {/* Pie Chart */}
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#343C6A" strokeWidth="40" strokeDasharray="176 502" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#FC7900" strokeWidth="40" strokeDasharray="75 502" strokeDashoffset="-176" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#FF00FF" strokeWidth="40" strokeDasharray="100 502" strokeDashoffset="-251" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#16DBAA" strokeWidth="40" strokeDasharray="151 502" strokeDashoffset="-351" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80px] h-[80px] rounded-full bg-white" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#343C6A]" />
                <span className="text-[15px] text-[--color-text-secondary]">Entertainment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FC7900]" />
                <span className="text-[15px] text-[--color-text-secondary]">Bill Expense</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FF00FF]" />
                <span className="text-[15px] text-[--color-text-secondary]">Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#16DBAA]" />
                <span className="text-[15px] text-[--color-text-secondary]">Others</span>
              </div>
            </div>
          </Card>

          {/* Quick Transfer */}
          <Card>
            <h3 className="text-[22px] font-semibold text-[--color-text-primary] mb-6">
              Quick Transfer
            </h3>
            <div className="flex items-center gap-4 mb-8">
              {contacts.map((contact) => (
                <div key={contact.name} className="flex flex-col items-center gap-2">
                  <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-[--color-border]">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[16px] font-normal text-[--color-text-primary]">
                      {contact.name}
                    </p>
                    <p className="text-[15px] text-[--color-text-secondary]">
                      {contact.role}
                    </p>
                  </div>
                </div>
              ))}
              <button className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[--color-text-secondary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[16px] text-[--color-text-secondary]">Write Amount</span>
              <div className="flex-1 flex items-center gap-3">
                <input
                  type="text"
                  defaultValue="525.50"
                  className="flex-1 bg-[--color-background] rounded-full px-6 py-3 text-[16px] text-[--color-text-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary]/20"
                />
                <button className="bg-[--color-primary] hover:bg-[--color-primary-dark] text-white rounded-full px-8 py-3 flex items-center gap-2 transition-colors">
                  <span className="text-[16px] font-medium">Send</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>

          {/* Balance History */}
          <Card>
            <h3 className="text-[22px] font-semibold text-[--color-text-primary] mb-6">
              Balance History
            </h3>
            <div className="relative h-[260px]">
              {/* Line Chart */}
              <svg viewBox="0 0 600 260" className="w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1814F3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1814F3" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M 0 180 Q 100 140 150 160 T 300 120 Q 400 140 450 100 T 600 130 L 600 260 L 0 260 Z"
                  fill="url(#lineGradient)"
                />
                {/* Line */}
                <path
                  d="M 0 180 Q 100 140 150 160 T 300 120 Q 400 140 450 100 T 600 130"
                  fill="none"
                  stroke="#1814F3"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((month) => (
                  <span key={month} className="text-[13px] text-[--color-text-secondary]">
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
