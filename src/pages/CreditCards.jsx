import Card from '../components/ui/Card'
import CreditCard from '../components/ui/CreditCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const expenseData = [
  { name: 'DBL Bank', value: 35, color: '#396AFF' },
  { name: 'BRC Bank', value: 25, color: '#FC7900' },
  { name: 'ABM Bank', value: 20, color: '#16DBCC' },
  { name: 'MCP Bank', value: 20, color: '#FFBB38' }
]

const cardList = [
  { type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', holder: 'William', icon: '💳' },
  { type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', holder: 'Michel', icon: '💳' },
  { type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', holder: 'Edward', icon: '💳' }
]

const cardSettings = [
  { title: 'Block Card', description: 'Instantly block your card', icon: '🔒', bgColor: 'bg-orange-50' },
  { title: 'Change Pin Code', description: 'Choose another pin code', icon: '🔐', bgColor: 'bg-blue-50' },
  { title: 'Add to Google Pay', description: 'Withdraw without any card', icon: '🔴', bgColor: 'bg-pink-50' },
  { title: 'Add to Apple Pay', description: 'Withdraw without any card', icon: '🍎', bgColor: 'bg-cyan-50' },
  { title: 'Add to Apple Store', description: 'Withdraw without any card', icon: '🍏', bgColor: 'bg-teal-50' }
]

export default function CreditCards() {
  return (
    <div className="space-y-6">
      {/* My Cards */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">My Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreditCard balance="5,756" cardHolder="Eddy Cusuma" validThru="12/22" />
          <CreditCard balance="5,756" cardHolder="Eddy Cusuma" validThru="12/22" variant="blue" />
          <CreditCard balance="5,756" cardHolder="Eddy Cusuma" validThru="12/22" variant="white" />
        </div>
      </Card>

      {/* Card Expense Statistics & Card List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Expense Statistics */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Card Expense Statistics</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
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

        {/* Card List */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Card List</h2>
          <div className="space-y-4">
            {cardList.map((card, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-bg-secondary rounded-[20px]">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[24px] shadow-sm">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[14px] text-text-secondary">Card Type</p>
                    <p className="text-[15px] font-medium text-text-primary">{card.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-[14px] text-text-secondary">Bank</p>
                    <p className="text-[15px] font-medium text-text-primary">{card.bank}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-text-secondary">Card Number</p>
                    <p className="text-[15px] font-medium text-text-primary">{card.number}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-text-secondary">Name On Card</p>
                    <p className="text-[15px] font-medium text-text-primary">{card.holder}</p>
                  </div>
                  <button className="text-[15px] font-semibold text-primary-500 hover:text-primary-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Add New Card & Card Setting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add New Card */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-3">Add New Card</h2>
          <p className="text-[15px] text-text-secondary mb-6 leading-relaxed">
            Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Input label="Card Type" placeholder="Classic" />
            <Input label="Name On Card" placeholder="My Cards" />
            <Input label="Card Number" placeholder="**** **** **** ****" />
            <Input label="Expiration Date" placeholder="25 January 2025" />
          </div>
          <Button className="w-full md:w-auto px-8">Add Card</Button>
        </Card>

        {/* Card Setting */}
        <Card>
          <h2 className="text-[22px] font-semibold text-text-primary mb-5">Card Setting</h2>
          <div className="space-y-4">
            {cardSettings.map((setting, index) => (
              <div key={index} className="flex items-center gap-4 p-4 hover:bg-bg-secondary rounded-[15px] transition-colors cursor-pointer">
                <div className={`w-[60px] h-[60px] ${setting.bgColor} rounded-full flex items-center justify-center text-[28px]`}>
                  {setting.icon}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-text-primary">{setting.title}</p>
                  <p className="text-[14px] text-text-secondary">{setting.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
