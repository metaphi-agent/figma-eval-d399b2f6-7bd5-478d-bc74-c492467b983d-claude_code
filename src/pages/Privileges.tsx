import Card from '../components/ui/Card';

const privileges = [
  { id: 1, title: 'Premium Support', description: '24/7 priority customer support with dedicated account manager', icon: 'support', color: '#E7EDFF', iconColor: '#396AFF' },
  { id: 2, title: 'Cashback Rewards', description: 'Earn up to 5% cashback on all purchases', icon: 'cashback', color: '#DCFAF8', iconColor: '#16DBCC' },
  { id: 3, title: 'Travel Insurance', description: 'Comprehensive travel insurance for you and your family', icon: 'travel', color: '#FFE0EB', iconColor: '#FF82AC' },
  { id: 4, title: 'Airport Lounge', description: 'Free access to 1000+ airport lounges worldwide', icon: 'lounge', color: '#FFF5D9', iconColor: '#FFBB38' },
  { id: 5, title: 'No Foreign Fees', description: 'Zero foreign transaction fees on international purchases', icon: 'global', color: '#E7EDFF', iconColor: '#396AFF' },
  { id: 6, title: 'Extended Warranty', description: 'Extended warranty protection on eligible purchases', icon: 'warranty', color: '#DCFAF8', iconColor: '#16DBCC' },
];

export default function Privileges() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[28px] font-semibold text-[#343C6A]">My Privileges</h2>
          <p className="text-[16px] text-[#718EBF] mt-1">Exclusive benefits for premium members</p>
        </div>
        <button className="px-6 py-3 bg-[#396AFF] text-white rounded-[15px] text-[16px] font-medium hover:bg-[#2D60E8] transition-colors">
          Upgrade Plan
        </button>
      </div>

      {/* Privileges Grid */}
      <div className="grid grid-cols-3 gap-6">
        {privileges.map((privilege) => (
          <Card key={privilege.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: privilege.color }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  {privilege.icon === 'support' && (
                    <>
                      <circle cx="18" cy="18" r="12" stroke={privilege.iconColor} strokeWidth="2"/>
                      <path d="M12 18C12 14.686 14.686 12 18 12" stroke={privilege.iconColor} strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="18" cy="18" r="3" fill={privilege.iconColor}/>
                    </>
                  )}
                  {privilege.icon === 'cashback' && (
                    <>
                      <circle cx="18" cy="18" r="12" stroke={privilege.iconColor} strokeWidth="2"/>
                      <path d="M18 10V26M22 14H15C13.343 14 12 15.343 12 17C12 18.657 13.343 20 15 20H21C22.657 20 24 21.343 24 23C24 24.657 22.657 26 21 26H14" stroke={privilege.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                  {privilege.icon === 'travel' && (
                    <>
                      <path d="M18 6L22 10L28 8L26 14L30 18L26 22L28 28L22 26L18 30L14 26L8 28L10 22L6 18L10 14L8 8L14 10L18 6Z" stroke={privilege.iconColor} strokeWidth="2" strokeLinejoin="round"/>
                    </>
                  )}
                  {privilege.icon === 'lounge' && (
                    <>
                      <rect x="6" y="14" width="24" height="14" rx="2" stroke={privilege.iconColor} strokeWidth="2"/>
                      <path d="M10 14V10C10 8.895 10.895 8 12 8H24C25.105 8 26 8.895 26 10V14" stroke={privilege.iconColor} strokeWidth="2"/>
                      <path d="M14 20H22" stroke={privilege.iconColor} strokeWidth="2" strokeLinecap="round"/>
                    </>
                  )}
                  {privilege.icon === 'global' && (
                    <>
                      <circle cx="18" cy="18" r="12" stroke={privilege.iconColor} strokeWidth="2"/>
                      <ellipse cx="18" cy="18" rx="5" ry="12" stroke={privilege.iconColor} strokeWidth="2"/>
                      <line x1="6" y1="18" x2="30" y2="18" stroke={privilege.iconColor} strokeWidth="2"/>
                    </>
                  )}
                  {privilege.icon === 'warranty' && (
                    <>
                      <path d="M18 4L8 9V17C8 23.63 12.28 29.79 18 31C23.72 29.79 28 23.63 28 17V9L18 4Z" stroke={privilege.iconColor} strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M13 18L16 21L23 14" stroke={privilege.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-[#343C6A] mb-2">{privilege.title}</h3>
              <p className="text-[15px] text-[#718EBF]">{privilege.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Membership Status */}
      <Card className="bg-gradient-to-r from-[#396AFF] to-[#2D60E8] text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] opacity-80 mb-1">Current Plan</p>
            <h3 className="text-[24px] font-semibold">Premium Membership</h3>
            <p className="text-[16px] opacity-80 mt-2">Valid until December 31, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-[14px] opacity-80 mb-1">Membership ID</p>
            <p className="text-[20px] font-semibold">BANK-2024-PREM</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
