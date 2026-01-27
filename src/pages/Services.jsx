import Card from '../components/ui/Card'

const services = [
  { title: 'Life Insurance', description: 'Unlimited protection', icon: '🛡️', bgColor: 'bg-pink-50' },
  { title: 'Shopping', description: 'Buy. Think. Grow.', icon: '🛍️', bgColor: 'bg-blue-50' },
  { title: 'Safety', description: 'We are your allies', icon: '🔒', bgColor: 'bg-yellow-50' },
  { title: 'Business Loans', description: 'Loans for every one', icon: '💼', bgColor: 'bg-cyan-50' },
  { title: 'Cashback', description: 'Get more than you want', icon: '💰', bgColor: 'bg-purple-50' },
  { title: 'Happy Hours', description: 'Enjoy your saving', icon: '⏰', bgColor: 'bg-orange-50' }
]

const bankServicesData = [
  { label: 'Business loans', value: '$125,000' },
  { label: 'Checking accounts', value: '$125,000' },
  { label: 'Savings accounts', value: '$125,000' },
  { label: 'Debit and credit cards', value: '$125,000' },
  { label: 'Life Insurance', value: '$125,000' },
  { label: 'Business loans', value: '$125,000' }
]

export default function Services() {
  return (
    <div className="space-y-6">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className={`w-[70px] h-[70px] ${service.bgColor} rounded-[20px] flex items-center justify-center text-[36px] mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-[20px] font-semibold text-text-primary mb-2">{service.title}</h3>
            <p className="text-[15px] text-text-secondary">{service.description}</p>
          </Card>
        ))}
      </div>

      {/* Bank Services List */}
      <Card>
        <h2 className="text-[22px] font-semibold text-text-primary mb-5">Bank Services List</h2>
        <div className="space-y-4">
          {bankServicesData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-5 bg-bg-secondary rounded-[20px] hover:bg-bg-tertiary transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7H4M20 12H4M20 17H4" stroke="#718EBF" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-[16px] font-medium text-text-primary">{item.label}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[18px] font-semibold text-text-primary">{item.value}</span>
                <button className="text-[15px] font-semibold text-primary-500 hover:text-primary-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
