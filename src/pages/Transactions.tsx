import CreditCard from '../components/ui/CreditCard';
import Card from '../components/ui/Card';

const transactions = [
  { id: 1, icon: 'up', description: 'Spotify Subscription', transactionId: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', status: 'expense' },
  { id: 2, icon: 'down', description: 'Freepik Sales', transactionId: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', status: 'income' },
  { id: 3, icon: 'up', description: 'Mobile Service', transactionId: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', status: 'expense' },
  { id: 4, icon: 'up', description: 'Wilson', transactionId: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', status: 'expense' },
  { id: 5, icon: 'down', description: 'Emilly', transactionId: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', status: 'income' },
];

const expenseData = [
  { month: 'Aug', value: 8000 },
  { month: 'Sep', value: 6500 },
  { month: 'Oct', value: 7000 },
  { month: 'Nov', value: 8500 },
  { month: 'Dec', value: 10500 },
  { month: 'Jan', value: 12500 },
];

export default function Transactions() {
  const maxValue = 12500;

  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-8">
        {/* My Cards */}
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
            <button className="text-[17px] font-semibold text-[#343C6A] hover:text-[#396AFF]">
              + Add Card
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

        {/* My Expense */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">My Expense</h2>
          <Card className="h-[235px]">
            <div className="flex items-end justify-between h-[180px] px-2">
              {expenseData.map((item, index) => (
                <div key={item.month} className="flex flex-col items-center gap-2">
                  <span className="text-[12px] text-[#718EBF]">${(item.value / 1000).toFixed(1)}k</span>
                  <div
                    className={`w-[40px] rounded-t-lg ${index === expenseData.length - 1 ? 'bg-[#16DBCC]' : 'bg-[#EDF0F7]'}`}
                    style={{ height: `${(item.value / maxValue) * 140}px` }}
                  ></div>
                  <span className="text-[13px] text-[#718EBF]">{item.month}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Recent Transactions</h2>
        <Card>
          {/* Tabs */}
          <div className="flex gap-10 border-b border-[#F3F5F9] mb-6">
            <button className="pb-3 text-[16px] font-medium text-[#396AFF] border-b-2 border-[#396AFF]">
              All Transactions
            </button>
            <button className="pb-3 text-[16px] font-medium text-[#718EBF] hover:text-[#396AFF]">
              Income
            </button>
            <button className="pb-3 text-[16px] font-medium text-[#718EBF] hover:text-[#396AFF]">
              Expense
            </button>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Description</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Transaction ID</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Type</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Card</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Date</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Amount</th>
                <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-t border-[#F3F5F9]">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                        tx.status === 'income' ? 'bg-[#DCFAF8]' : 'bg-[#FFF5D9]'
                      }`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d={tx.icon === 'up' ? 'M8 3V13M8 3L4 7M8 3L12 7' : 'M8 13V3M8 13L4 9M8 13L12 9'}
                            stroke={tx.status === 'income' ? '#41D4A8' : '#FFBB38'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#343C6A]">{tx.description}</span>
                    </div>
                  </td>
                  <td className="py-4 text-[16px] text-[#718EBF]">{tx.transactionId}</td>
                  <td className="py-4 text-[16px] text-[#718EBF]">{tx.type}</td>
                  <td className="py-4 text-[16px] text-[#718EBF]">{tx.card}</td>
                  <td className="py-4 text-[16px] text-[#718EBF]">{tx.date}</td>
                  <td className={`py-4 text-[16px] font-medium ${
                    tx.status === 'income' ? 'text-[#41D4A8]' : 'text-[#FE5C73]'
                  }`}>{tx.amount}</td>
                  <td className="py-4">
                    <button className="px-4 py-2 border border-[#396AFF] text-[#396AFF] rounded-full text-[14px] font-medium hover:bg-[#396AFF] hover:text-white transition-colors">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button className="text-[15px] text-[#396AFF] flex items-center gap-1 hover:underline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Previous
            </button>
            <div className="flex gap-2">
              <button className="w-[40px] h-[40px] rounded-lg bg-[#396AFF] text-white text-[15px] font-medium">1</button>
              <button className="w-[40px] h-[40px] rounded-lg text-[#396AFF] text-[15px] font-medium hover:bg-[#F5F7FA]">2</button>
              <button className="w-[40px] h-[40px] rounded-lg text-[#396AFF] text-[15px] font-medium hover:bg-[#F5F7FA]">3</button>
              <button className="w-[40px] h-[40px] rounded-lg text-[#396AFF] text-[15px] font-medium hover:bg-[#F5F7FA]">4</button>
            </div>
            <button className="text-[15px] text-[#396AFF] flex items-center gap-1 hover:underline">
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
