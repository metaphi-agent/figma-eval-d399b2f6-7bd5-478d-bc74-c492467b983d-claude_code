import Card from '../components/ui/Card'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const loanData = [
  { month: 'Jan', personal: 4000, corporate: 8000, business: 6000 },
  { month: 'Feb', personal: 5500, corporate: 9500, business: 7500 },
  { month: 'Mar', personal: 5000, corporate: 9000, business: 7000 },
  { month: 'Apr', personal: 6500, corporate: 10500, business: 8500 },
  { month: 'May', personal: 6000, corporate: 10000, business: 8000 },
  { month: 'Jun', personal: 7500, corporate: 11500, business: 9500 }
]

const activeLoans = [
  { id: '01', amount: '$100,000', left: '$40,500', duration: '8 Months Left', repay: '$5,000 / month', rate: '12%' },
  { id: '02', amount: '$500,000', left: '$250,000', duration: '36 Months Left', repay: '$8,000 / month', rate: '10%' },
  { id: '03', amount: '$900,000', left: '$40,500', duration: '12 Months Left', repay: '$5,000 / month', rate: '12%' },
  { id: '04', amount: '$50,000', left: '$40,500', duration: '25 Months Left', repay: '$2,000 / month', rate: '5%' }
]

export default function Loans() {
  return (
    <div className="space-y-6">
      {/* Loan Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Personal Loans</p>
          <h3 className="text-[28px] font-semibold text-text-primary">$50,000</h3>
        </Card>
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Corporate Loans</p>
          <h3 className="text-[28px] font-semibold text-text-primary">$100,000</h3>
        </Card>
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Business Loans</p>
          <h3 className="text-[28px] font-semibold text-text-primary">$500,000</h3>
        </Card>
      </div>

      {/* Active Loans Overview */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">Active Loans Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">SL No</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Loan Money</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Left to repay</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Duration</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Interest rate</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Installment</th>
                <th className="text-left py-3 px-2 text-[16px] font-medium text-text-primary">Repay</th>
              </tr>
            </thead>
            <tbody>
              {activeLoans.map((loan, index) => (
                <tr key={index} className="border-b border-border-light hover:bg-bg-secondary transition-colors">
                  <td className="py-4 px-2 text-[15px] text-text-primary">{loan.id}</td>
                  <td className="py-4 px-2 text-[15px] font-medium text-text-primary">{loan.amount}</td>
                  <td className="py-4 px-2 text-[15px] font-medium text-text-primary">{loan.left}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{loan.duration}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{loan.rate}</td>
                  <td className="py-4 px-2 text-[15px] text-text-primary">{loan.repay}</td>
                  <td className="py-4 px-2">
                    <button className="px-6 py-2 border-2 border-text-primary text-text-primary rounded-[25px] hover:bg-text-primary hover:text-white transition-colors text-[13px] font-medium">
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Total Loans */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">Total Loans</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={loanData}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <Line type="monotone" dataKey="personal" stroke="#396AFF" strokeWidth={2} dot={{ fill: '#396AFF', r: 4 }} />
            <Line type="monotone" dataKey="corporate" stroke="#16DBCC" strokeWidth={2} dot={{ fill: '#16DBCC', r: 4 }} />
            <Line type="monotone" dataKey="business" stroke="#FFBB38" strokeWidth={2} dot={{ fill: '#FFBB38', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#396AFF]" />
            <span className="text-[15px] text-text-secondary">Personal Loans</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#16DBCC]" />
            <span className="text-[15px] text-text-secondary">Corporate Loans</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FFBB38]" />
            <span className="text-[15px] text-text-secondary">Business Loans</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
