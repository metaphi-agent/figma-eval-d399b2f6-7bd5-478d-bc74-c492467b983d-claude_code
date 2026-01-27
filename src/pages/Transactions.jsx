import Card from '../components/ui/Card'
import CreditCard from '../components/ui/CreditCard'
import Button from '../components/ui/Button'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const expenseData = [
  { month: 'Aug', value: 0 },
  { month: 'Sep', value: 0 },
  { month: 'Oct', value: 0 },
  { month: 'Nov', value: 0 },
  { month: 'Dec', value: 12500 },
  { month: 'Jan', value: 0 }
]

const transactions = [
  { id: '#12548796', description: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', status: 'expense' },
  { id: '#12548796', description: 'Freepik Sales', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', status: 'income' },
  { id: '#12548796', description: 'Mobile Service', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', status: 'expense' },
  { id: '#12548796', description: 'Wilson', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', status: 'expense' },
  { id: '#12548796', description: 'Emily', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', status: 'income' }
]

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* My Cards & My Expense */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        {/* My Cards */}
        <Card>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[22px] font-semibold text-text-primary">My Cards</h2>
            <button className="text-[17px] font-semibold text-text-primary hover:text-primary-500 transition-colors">
              + Add Card
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCard />
            <CreditCard variant="white" />
          </div>
        </Card>

        {/* My Expense */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">My Expense</h2>
          <div className="flex justify-end mb-4">
            <span className="text-[20px] font-semibold text-text-primary">$12,500</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={expenseData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
              <Bar dataKey="value" fill="#16DBCC" radius={[8, 8, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">Recent Transactions</h2>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-border-light">
          <button className="pb-3 text-[16px] font-medium text-primary-500 border-b-3 border-primary-500">
            All Transactions
          </button>
          <button className="pb-3 text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Income
          </button>
          <button className="pb-3 text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Expense
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Description</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Transaction ID</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Type</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Card</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Date</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Amount</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b border-border-light hover:bg-bg-secondary transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-[45px] h-[45px] rounded-full bg-bg-secondary flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 5v10M5 10h10" stroke={transaction.status === 'income' ? '#16DBCC' : '#FF4B4A'} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-text-primary">{transaction.description}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{transaction.id}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{transaction.type}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{transaction.card}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{transaction.date}</td>
                  <td className="py-4 px-2">
                    <span className={`text-[15px] font-medium ${transaction.status === 'income' ? 'text-success-500' : 'text-error-500'}`}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <Button variant="outline" size="sm" className="text-[13px]">
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <button className="flex items-center gap-2 text-[16px] text-text-primary hover:text-primary-500 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Previous
          </button>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-md bg-primary-500 text-white text-[15px] font-medium">1</button>
            <button className="w-9 h-9 rounded-md text-primary-500 text-[15px] font-medium hover:bg-bg-tertiary transition-colors">2</button>
            <button className="w-9 h-9 rounded-md text-primary-500 text-[15px] font-medium hover:bg-bg-tertiary transition-colors">3</button>
            <button className="w-9 h-9 rounded-md text-primary-500 text-[15px] font-medium hover:bg-bg-tertiary transition-colors">4</button>
          </div>
          <button className="flex items-center gap-2 text-[16px] text-primary-500 hover:text-primary-600 transition-colors">
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Card>
    </div>
  )
}
