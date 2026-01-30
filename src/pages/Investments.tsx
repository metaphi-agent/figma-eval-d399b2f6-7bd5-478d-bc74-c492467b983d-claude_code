import Card from '../components/ui/Card';

const investmentStats = [
  { label: 'Total Invested Amount', value: '$150,000', icon: 'money', color: '#E7EDFF', iconColor: '#396AFF', change: '+5.6%' },
  { label: 'Number of Investments', value: '1,250', icon: 'chart', color: '#FFE0EB', iconColor: '#FF82AC', change: '+2.3%' },
  { label: 'Rate of Return', value: '+5.80%', icon: 'return', color: '#DCFAF8', iconColor: '#16DBCC', change: '+1.2%' },
];

const trendingStocks = [
  { id: 1, name: 'Trivago', symbol: 'TRVG', price: '$520', change: '+5%', isUp: true },
  { id: 2, name: 'Canon', symbol: 'CAJ', price: '$480', change: '-3%', isUp: false },
  { id: 3, name: 'Uber', symbol: 'UBER', price: '$940', change: '+2%', isUp: true },
  { id: 4, name: 'Nokia', symbol: 'NOK', price: '$250', change: '+6%', isUp: true },
  { id: 5, name: 'Tiktok', symbol: 'TIK', price: '$340', change: '-1%', isUp: false },
];

const myInvestments = [
  { id: 1, name: 'Apple Store', category: 'E-commerce', amount: '$54,000', return: '+16%', color: '#DCFAF8' },
  { id: 2, name: 'Samsung Mobile', category: 'E-commerce', amount: '$25,300', return: '-4%', color: '#FFE0EB' },
  { id: 3, name: 'Tesla Motors', category: 'Electric Vehicle', amount: '$8,200', return: '+25%', color: '#E7EDFF' },
];

const yearlyInvestment = [
  { year: '2016', value: 10000 },
  { year: '2017', value: 18000 },
  { year: '2018', value: 12000 },
  { year: '2019', value: 28000 },
  { year: '2020', value: 18000 },
  { year: '2021', value: 35000 },
];

const monthlyRevenue = [
  { year: '2016', value: 8000 },
  { year: '2017', value: 15000 },
  { year: '2018', value: 10000 },
  { year: '2019', value: 22000 },
  { year: '2020', value: 12000 },
  { year: '2021', value: 20000 },
];

export default function Investments() {
  const maxBarValue = 40000;

  return (
    <div className="space-y-6">
      {/* Investment Stats */}
      <div className="grid grid-cols-3 gap-6">
        {investmentStats.map((stat) => (
          <Card key={stat.label} className="flex items-center gap-4">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ backgroundColor: stat.color }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {stat.icon === 'money' && <path d="M12 2V22M17 7H9.5C8.12 7 7 8.12 7 9.5C7 10.88 8.12 12 9.5 12H14.5C15.88 12 17 13.12 17 14.5C17 15.88 15.88 17 14.5 17H7" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round"/>}
                {stat.icon === 'chart' && <path d="M4 20L8 12L12 16L20 4" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                {stat.icon === 'return' && <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
              </svg>
            </div>
            <div>
              <p className="text-[16px] text-[#718EBF]">{stat.label}</p>
              <p className="text-[25px] font-semibold text-[#343C6A]">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* Yearly Total Investment */}
        <div className="col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Yearly Total Investment</h2>
          <Card>
            <div className="flex items-end justify-between h-[250px] px-4">
              {yearlyInvestment.map((item) => (
                <div key={item.year} className="flex flex-col items-center gap-2">
                  <div
                    className="w-[50px] bg-[#396AFF] rounded-t-lg"
                    style={{ height: `${(item.value / maxBarValue) * 200}px` }}
                  ></div>
                  <span className="text-[13px] text-[#718EBF]">{item.year}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Trending Stock */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Trending Stock</h2>
          <Card className="h-[305px]">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-3 text-[14px] font-medium text-[#718EBF]">SL No</th>
                  <th className="pb-3 text-[14px] font-medium text-[#718EBF]">Name</th>
                  <th className="pb-3 text-[14px] font-medium text-[#718EBF]">Price</th>
                  <th className="pb-3 text-[14px] font-medium text-[#718EBF]">Return</th>
                </tr>
              </thead>
              <tbody>
                {trendingStocks.map((stock, index) => (
                  <tr key={stock.id} className="border-t border-[#F3F5F9]">
                    <td className="py-3 text-[15px] text-[#343C6A]">{String(index + 1).padStart(2, '0')}.</td>
                    <td className="py-3 text-[15px] text-[#343C6A]">{stock.name}</td>
                    <td className="py-3 text-[15px] text-[#343C6A]">{stock.price}</td>
                    <td className={`py-3 text-[15px] ${stock.isUp ? 'text-[#41D4A8]' : 'text-[#FE5C73]'}`}>
                      {stock.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* Monthly Revenue */}
        <div className="col-span-7">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Monthly Revenue</h2>
          <Card>
            <div className="flex items-end justify-between h-[200px] px-4">
              {monthlyRevenue.map((item) => (
                <div key={item.year} className="flex flex-col items-center gap-2">
                  <div
                    className="w-[40px] bg-gradient-to-t from-[#396AFF] to-[#16DBCC] rounded-t-lg"
                    style={{ height: `${(item.value / 25000) * 160}px` }}
                  ></div>
                  <span className="text-[13px] text-[#718EBF]">{item.year}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* My Investment */}
        <div className="col-span-5">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">My Investment</h2>
          <Card>
            <div className="space-y-4">
              {myInvestments.map((investment) => (
                <div key={investment.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center" style={{ backgroundColor: investment.color }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="3" width="14" height="14" rx="2" stroke={investment.color === '#DCFAF8' ? '#16DBCC' : investment.color === '#FFE0EB' ? '#FF82AC' : '#396AFF'} strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#343C6A]">{investment.name}</p>
                      <p className="text-[15px] text-[#718EBF]">{investment.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-medium text-[#343C6A]">{investment.amount}</p>
                    <p className={`text-[15px] ${investment.return.startsWith('+') ? 'text-[#41D4A8]' : 'text-[#FE5C73]'}`}>
                      {investment.return}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
