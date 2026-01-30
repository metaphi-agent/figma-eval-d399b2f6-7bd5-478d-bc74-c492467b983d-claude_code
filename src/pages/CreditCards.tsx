import CreditCard from '../components/ui/CreditCard';
import Card from '../components/ui/Card';

const cardList = [
  { id: 1, cardType: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', holder: 'William', icon: 'blue' },
  { id: 2, cardType: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', holder: 'Michel', icon: 'pink' },
  { id: 3, cardType: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', holder: 'Edward', icon: 'green' },
];

const cardSettings = [
  { id: 1, title: 'Block Card', description: 'Instantly block your card', icon: 'block', color: '#FFF5D9', iconColor: '#FFBB38' },
  { id: 2, title: 'Change Pin Code', description: 'Choose another pin code', icon: 'pin', color: '#E7EDFF', iconColor: '#396AFF' },
  { id: 3, title: 'Add to Google Pay', description: 'Withdraw without any card', icon: 'google', color: '#FFE0EB', iconColor: '#FF82AC' },
  { id: 4, title: 'Add to Apple Pay', description: 'Withdraw without any card', icon: 'apple', color: '#DCFAF8', iconColor: '#16DBCC' },
  { id: 5, title: 'Add to Apple Store', description: 'Withdraw without any card', icon: 'store', color: '#E7EDFF', iconColor: '#396AFF' },
];

const expenseStats = [
  { label: 'DBL Bank', percentage: 35, color: '#396AFF' },
  { label: 'BRC Bank', percentage: 25, color: '#FF82AC' },
  { label: 'ABM Bank', percentage: 20, color: '#16DBCC' },
  { label: 'MCP Bank', percentage: 20, color: '#FFBB38' },
];

export default function CreditCards() {
  return (
    <div className="space-y-6">
      {/* My Cards */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">My Cards</h2>
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

      {/* Card Expense Statistics + Card List */}
      <div className="grid grid-cols-12 gap-8">
        {/* Card Expense Statistics */}
        <div className="col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Card Expense Statistics</h2>
          <Card className="h-[340px] flex flex-col items-center justify-center">
            {/* Simple pie chart */}
            <div className="relative w-[200px] h-[200px] mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#396AFF" strokeWidth="20" strokeDasharray="87.96 163.3" strokeDashoffset="0"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF82AC" strokeWidth="20" strokeDasharray="62.83 188.5" strokeDashoffset="-87.96"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#16DBCC" strokeWidth="20" strokeDasharray="50.27 200.96" strokeDashoffset="-150.8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FFBB38" strokeWidth="20" strokeDasharray="50.27 200.96" strokeDashoffset="-201"/>
              </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {expenseStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.color }}></div>
                  <span className="text-[14px] text-[#718EBF]">{stat.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Card List */}
        <div className="col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Card List</h2>
          <Card>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Card Type</th>
                  <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Bank</th>
                  <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Card Number</th>
                  <th className="pb-4 text-[16px] font-medium text-[#718EBF]">Namain Card</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {cardList.map((card) => (
                  <tr key={card.id} className="border-t border-[#F3F5F9]">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-[45px] h-[30px] rounded flex items-center justify-center ${
                          card.icon === 'blue' ? 'bg-[#E7EDFF]' : card.icon === 'pink' ? 'bg-[#FFE0EB]' : 'bg-[#DCFAF8]'
                        }`}>
                          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <rect width="20" height="14" rx="2" fill={card.icon === 'blue' ? '#396AFF' : card.icon === 'pink' ? '#FF82AC' : '#16DBCC'}/>
                            <rect x="2" y="5" width="6" height="2" rx="1" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] text-[#343C6A]">{card.cardType}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[16px] text-[#718EBF]">{card.bank}</td>
                    <td className="py-4 text-[16px] text-[#718EBF]">{card.number}</td>
                    <td className="py-4 text-[16px] text-[#343C6A]">{card.holder}</td>
                    <td className="py-4">
                      <button className="text-[#396AFF] text-[15px] font-medium hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      {/* Add New Card + Card Setting */}
      <div className="grid grid-cols-12 gap-8">
        {/* Add New Card */}
        <div className="col-span-6">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Add New Card</h2>
          <Card>
            <p className="text-[16px] text-[#718EBF] mb-6">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[16px] text-[#343C6A] mb-2">Card Type</label>
                <input
                  type="text"
                  placeholder="Classic"
                  className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
                />
              </div>
              <div>
                <label className="block text-[16px] text-[#343C6A] mb-2">Name On Card</label>
                <input
                  type="text"
                  placeholder="My Cards"
                  className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
                />
              </div>
              <div>
                <label className="block text-[16px] text-[#343C6A] mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="**** **** **** ****"
                  className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
                />
              </div>
              <div>
                <label className="block text-[16px] text-[#343C6A] mb-2">Expiration Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="25 January 2025"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718EBF]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <button className="w-[160px] h-[50px] bg-[#396AFF] text-white rounded-[15px] text-[18px] font-medium hover:bg-[#2D60E8] transition-colors">
              Add Card
            </button>
          </Card>
        </div>

        {/* Card Setting */}
        <div className="col-span-6">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Card Setting</h2>
          <Card>
            <div className="space-y-4">
              {cardSettings.map((setting) => (
                <div key={setting.id} className="flex items-center gap-4 cursor-pointer hover:bg-[#F5F7FA] p-2 rounded-lg transition-colors">
                  <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center" style={{ backgroundColor: setting.color }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {setting.icon === 'block' && <rect x="4" y="4" width="16" height="16" rx="2" stroke={setting.iconColor} strokeWidth="2"/>}
                      {setting.icon === 'pin' && <><rect x="6" y="10" width="12" height="10" rx="2" stroke={setting.iconColor} strokeWidth="2"/><circle cx="12" cy="15" r="2" fill={setting.iconColor}/></>}
                      {setting.icon === 'google' && <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke={setting.iconColor} strokeWidth="2" strokeLinecap="round"/>}
                      {setting.icon === 'apple' && <path d="M12 2C8 2 5 5 5 9C5 13 8 17 12 17C16 17 19 13 19 9C19 5 16 2 12 2Z" stroke={setting.iconColor} strokeWidth="2"/>}
                      {setting.icon === 'store' && <rect x="3" y="7" width="18" height="12" rx="2" stroke={setting.iconColor} strokeWidth="2"/>}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-medium text-[#343C6A]">{setting.title}</p>
                    <p className="text-[15px] text-[#718EBF]">{setting.description}</p>
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
