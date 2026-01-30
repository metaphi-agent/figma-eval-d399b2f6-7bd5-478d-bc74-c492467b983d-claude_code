import Card from '../components/ui/Card';

const serviceStats = [
  { label: 'Life Insurance', value: 'Unlimited protection', icon: 'life', color: '#E7EDFF', iconColor: '#396AFF' },
  { label: 'Shopping', value: 'Buy. Think. Grow.', icon: 'shopping', color: '#FFF5D9', iconColor: '#FFBB38' },
  { label: 'Safety', value: 'We are your allies', icon: 'safety', color: '#DCFAF8', iconColor: '#16DBCC' },
];

const bankServices = [
  { id: 1, title: 'Business loans', description: 'It is a long established', icon: 'loan', color: '#FFE0EB', iconColor: '#FF82AC', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Checking accounts', description: 'It is a long established', icon: 'check', color: '#E7EDFF', iconColor: '#396AFF', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, title: 'Savings accounts', description: 'It is a long established', icon: 'saving', color: '#DCFAF8', iconColor: '#16DBCC', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, title: 'Debit and credit cards', description: 'It is a long established', icon: 'card', color: '#FFF5D9', iconColor: '#FFBB38', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, title: 'Life Insurance', description: 'It is a long established', icon: 'life', color: '#E7EDFF', iconColor: '#396AFF', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, title: 'Business loans', description: 'It is a long established', icon: 'business', color: '#FFE0EB', iconColor: '#FF82AC', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function Services() {
  return (
    <div className="space-y-6">
      {/* Service Stats */}
      <div className="grid grid-cols-3 gap-6">
        {serviceStats.map((stat) => (
          <Card key={stat.label} className="flex items-center gap-5">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ backgroundColor: stat.color }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                {stat.icon === 'life' && (
                  <>
                    <path d="M16 4L6 9V15C6 21.63 10.28 27.79 16 29C21.72 27.79 26 21.63 26 15V9L16 4Z" stroke={stat.iconColor} strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M12 16L15 19L20 13" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </>
                )}
                {stat.icon === 'shopping' && (
                  <>
                    <path d="M6 8H8L10 24H24L26 10H9" stroke={stat.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="27" r="2" fill={stat.iconColor}/>
                    <circle cx="22" cy="27" r="2" fill={stat.iconColor}/>
                  </>
                )}
                {stat.icon === 'safety' && (
                  <>
                    <rect x="6" y="12" width="20" height="14" rx="2" stroke={stat.iconColor} strokeWidth="2"/>
                    <path d="M10 12V8C10 4.686 12.686 2 16 2C19.314 2 22 4.686 22 8V12" stroke={stat.iconColor} strokeWidth="2"/>
                    <circle cx="16" cy="19" r="2" fill={stat.iconColor}/>
                    <line x1="16" y1="21" x2="16" y2="23" stroke={stat.iconColor} strokeWidth="2"/>
                  </>
                )}
              </svg>
            </div>
            <div>
              <p className="text-[20px] font-semibold text-[#343C6A]">{stat.label}</p>
              <p className="text-[16px] text-[#718EBF]">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bank Services List */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Bank Services List</h2>
        <div className="grid grid-cols-2 gap-6">
          {bankServices.map((service) => (
            <Card key={service.id} className="flex items-start gap-5">
              <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: service.color }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  {service.icon === 'loan' && (
                    <>
                      <circle cx="14" cy="14" r="10" stroke={service.iconColor} strokeWidth="2"/>
                      <path d="M14 8V14L18 16" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                  {service.icon === 'check' && (
                    <>
                      <rect x="4" y="6" width="20" height="16" rx="2" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="4" y1="12" x2="24" y2="12" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="8" y1="17" x2="14" y2="17" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                  {service.icon === 'saving' && (
                    <>
                      <path d="M6 10C6 6 9 4 14 4C19 4 22 6 22 10V24H6V10Z" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="10" y1="4" x2="10" y2="24" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="18" y1="4" x2="18" y2="24" stroke={service.iconColor} strokeWidth="2"/>
                    </>
                  )}
                  {service.icon === 'card' && (
                    <>
                      <rect x="2" y="6" width="24" height="16" rx="2" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="2" y1="12" x2="26" y2="12" stroke={service.iconColor} strokeWidth="2"/>
                      <line x1="6" y1="17" x2="12" y2="17" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                  {service.icon === 'life' && (
                    <>
                      <path d="M14 4L6 8V14C6 19.52 9.48 24.74 14 26C18.52 24.74 22 19.52 22 14V8L14 4Z" stroke={service.iconColor} strokeWidth="2"/>
                      <path d="M10 14L13 17L18 11" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                  {service.icon === 'business' && (
                    <>
                      <rect x="4" y="12" width="20" height="12" rx="2" stroke={service.iconColor} strokeWidth="2"/>
                      <path d="M8 12V8L14 4L20 8V12" stroke={service.iconColor} strokeWidth="2" strokeLinejoin="round"/>
                      <line x1="14" y1="16" x2="14" y2="20" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[18px] font-semibold text-[#343C6A]">{service.title}</p>
                  <button className="text-[15px] text-[#396AFF] font-medium hover:underline">
                    View Details
                  </button>
                </div>
                <p className="text-[15px] text-[#718EBF]">{service.description}</p>
                <p className="text-[15px] text-[#718EBF] mt-2">{service.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
