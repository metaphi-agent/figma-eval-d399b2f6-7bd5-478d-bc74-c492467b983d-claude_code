import Card from '../components/ui/Card'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, AreaChart, Area } from 'recharts'

const investmentData = [
  { month: 'Jan', value: 5000 },
  { month: 'Feb', value: 7000 },
  { month: 'Mar', value: 6500 },
  { month: 'Apr', value: 9000 },
  { month: 'May', value: 8200 },
  { month: 'Jun', value: 11000 },
  { month: 'Jul', value: 10500 }
]

const investments = [
  { name: 'Apple Store', type: 'E-commerce, Marketplace', return: '+16%', amount: '$54,000', color: 'text-success-500', icon: '🍎' },
  { name: 'Samsung Mobile', type: 'E-commerce, Marketplace', return: '-4%', amount: '$25,300', color: 'text-error-500', icon: '📱' },
  { name: 'Tesla Motors', type: 'Cars & Vehicles', return: '+23%', amount: '$8,200', color: 'text-success-500', icon: '🚗' }
]

const yearlyComparison = [
  { year: '2019', value: 20000 },
  { year: '2020', value: 35000 },
  { year: '2021', value: 42000 }
]

const monthlyRevenue = [
  { month: 'Jun', value: 15000 },
  { month: 'Jul', value: 22000 },
  { month: 'Aug', value: 18000 },
  { month: 'Sep', value: 28000 },
  { month: 'Oct', value: 25000 },
  { month: 'Nov', value: 32000 },
  { month: 'Dec', value: 30000 }
]

export default function Investments() {
  return (
    <div className="space-y-6">
      {/* Total Investments & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Total Invested Amount</p>
          <h3 className="text-[28px] font-semibold text-text-primary">$150,000</h3>
        </Card>
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Number of Investments</p>
          <h3 className="text-[28px] font-semibold text-text-primary">1,250</h3>
        </Card>
        <Card>
          <p className="text-[14px] text-text-secondary mb-1">Rate of Return</p>
          <h3 className="text-[28px] font-semibold text-success-500">+5.80%</h3>
        </Card>
      </div>

      {/* Yearly Total Investment & Monthly Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yearly Total Investment */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Yearly Total Investment</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={yearlyComparison}>
              <defs>
                <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16DBCC" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#16DBCC" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <Area type="monotone" dataKey="value" stroke="#16DBCC" strokeWidth={3} fill="url(#investmentGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Monthly Revenue */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyRevenue}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
              <Line type="monotone" dataKey="value" stroke="#396AFF" strokeWidth={3} dot={{ fill: '#396AFF', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* My Investment */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">My Investment</h2>
        <div className="space-y-4">
          {investments.map((investment, index) => (
            <div key={index} className="flex items-center justify-between p-5 bg-bg-secondary rounded-[20px] hover:bg-bg-tertiary transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center text-[32px] shadow-sm">
                  {investment.icon}
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-text-primary">{investment.name}</p>
                  <p className="text-[14px] text-text-secondary">{investment.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-[14px] text-text-secondary mb-1">Return Value</p>
                  <p className={`text-[16px] font-semibold ${investment.color}`}>{investment.return}</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] text-text-secondary mb-1">Total Investment</p>
                  <p className="text-[16px] font-semibold text-text-primary">{investment.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Trending Stock */}
      <Card>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold text-text-primary">Trending Stock</h2>
          <button className="text-[17px] font-semibold text-text-primary hover:text-primary-500 transition-colors">
            View All
          </button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={investmentData}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
            <Line type="monotone" dataKey="value" stroke="#16DBCC" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
