import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Transactions', path: '/transactions', icon: 'transactions' },
  { name: 'Accounts', path: '/accounts', icon: 'accounts' },
  { name: 'Investments', path: '/investments', icon: 'investments' },
  { name: 'Credit Cards', path: '/credit-cards', icon: 'credit-card' },
  { name: 'Loans', path: '/loans', icon: 'loans' },
  { name: 'Services', path: '/services', icon: 'services' },
  { name: 'My Privileges', path: '/privileges', icon: 'privileges' },
  { name: 'Setting', path: '/settings', icon: 'settings' },
];

// SVG icons inline for better control
const icons: Record<string, JSX.Element> = {
  dashboard: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16666 13.5417H10.4167C10.7013 13.5417 10.9743 13.4286 11.1759 13.227C11.3775 13.0254 11.4907 12.7524 11.4583 12.4583V4.16667C11.4583 3.88207 11.3452 3.60912 11.1435 3.40752C10.9419 3.20592 10.669 3.09375 10.4167 3.09375H4.16666C3.88206 3.09375 3.60911 3.20592 3.40751 3.40752C3.20591 3.60912 3.09375 3.88207 3.09375 4.16667V12.4583C3.09375 12.7429 3.20591 13.0159 3.40751 13.2175C3.60911 13.4191 3.88206 13.5417 4.16666 13.5417Z" fill="currentColor"/>
      <path d="M14.5833 13.5417H20.8333C21.1179 13.5417 21.3909 13.4286 21.5925 13.227C21.7941 13.0254 21.9063 12.7524 21.9063 12.5V4.16667C21.9063 3.88207 21.7941 3.60912 21.5925 3.40752C21.3909 3.20592 21.1179 3.09375 20.8333 3.09375H14.5833C14.2987 3.09375 14.0258 3.20592 13.8242 3.40752C13.6226 3.60912 13.5104 3.88207 13.5104 4.16667V12.5C13.5104 12.7846 13.6226 13.0575 13.8242 13.2591C14.0258 13.4607 14.2987 13.5417 14.5833 13.5417Z" fill="currentColor"/>
      <path d="M4.16666 21.9063H10.4167C10.7013 21.9063 10.9743 21.7941 11.1759 21.5925C11.3775 21.3909 11.4583 21.1179 11.4583 20.8333V16.6667C11.4583 16.3821 11.3452 16.1091 11.1435 15.9075C10.9419 15.7059 10.669 15.5938 10.4167 15.5938H4.16666C3.88206 15.5938 3.60911 15.7059 3.40751 15.9075C3.20591 16.1091 3.09375 16.3821 3.09375 16.6667V20.8333C3.09375 21.1179 3.20591 21.3909 3.40751 21.5925C3.60911 21.7941 3.88206 21.9063 4.16666 21.9063Z" fill="currentColor"/>
      <path d="M14.5833 21.9063H20.8333C21.1179 21.9063 21.3909 21.7941 21.5925 21.5925C21.7941 21.3909 21.9063 21.1179 21.9063 20.8333V16.6667C21.9063 16.3821 21.7941 16.1091 21.5925 15.9075C21.3909 15.7059 21.1179 15.5938 20.8333 15.5938H14.5833C14.2987 15.5938 14.0258 15.7059 13.8242 15.9075C13.6226 16.1091 13.5104 16.3821 13.5104 16.6667V20.8333C13.5104 21.1179 13.6226 21.3909 13.8242 21.5925C14.0258 21.7941 14.2987 21.9063 14.5833 21.9063Z" fill="currentColor"/>
    </svg>
  ),
  transactions: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.9167 7.29167H2.08333C1.5 7.29167 1.04167 6.83333 1.04167 6.25C1.04167 5.66667 1.5 5.20833 2.08333 5.20833H22.9167C23.5 5.20833 23.9583 5.66667 23.9583 6.25C23.9583 6.83333 23.5 7.29167 22.9167 7.29167Z" fill="currentColor"/>
      <path d="M6.25 11.4583L2.08333 6.25L6.25 1.04167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.08333 18.75H22.9167C23.5 18.75 23.9583 18.2917 23.9583 17.7083C23.9583 17.125 23.5 16.6667 22.9167 16.6667H2.08333C1.5 16.6667 1.04167 17.125 1.04167 17.7083C1.04167 18.2917 1.5 18.75 2.08333 18.75Z" fill="currentColor"/>
      <path d="M18.75 23.9583L22.9167 18.75L18.75 13.5417" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  accounts: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 12.5C15.3867 12.5 17.7083 10.1783 17.7083 7.29167C17.7083 4.405 15.3867 2.08333 12.5 2.08333C9.61334 2.08333 7.29166 4.405 7.29166 7.29167C7.29166 10.1783 9.61334 12.5 12.5 12.5Z" fill="currentColor"/>
      <path d="M12.5 14.5833C7.89584 14.5833 4.16666 17.3958 4.16666 20.8333V22.9167H20.8333V20.8333C20.8333 17.3958 17.1042 14.5833 12.5 14.5833Z" fill="currentColor"/>
    </svg>
  ),
  investments: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.08334 22.9167H22.9167" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.16666 18.75V13.5417" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9.375 18.75V10.4167" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14.5833 18.75V13.5417" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.7917 18.75V7.29167" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2.08334 10.4167L9.375 5.20833L14.5833 9.375L22.9167 2.08333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'credit-card': (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.08333" y="4.16667" width="20.8333" height="16.6667" rx="3" fill="currentColor"/>
      <path d="M2.08333 9.375H22.9167" stroke="white" strokeWidth="2"/>
      <path d="M6.25 15.625H10.4167" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  loans: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="9.375" stroke="currentColor" strokeWidth="2"/>
      <path d="M12.5 7.29167V12.5L15.625 15.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8.33333 2.08333L12.5 4.16667L16.6667 2.08333" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  services: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4167 3.125L12.5 6.25L14.5833 3.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.25 10.4167H3.125L6.25 12.5L3.125 14.5833H6.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18.75 10.4167H21.875L18.75 12.5L21.875 14.5833H18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.4167 21.875L12.5 18.75L14.5833 21.875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12.5" cy="12.5" r="4.16667" fill="currentColor"/>
    </svg>
  ),
  privileges: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="8.33333" r="4.16667" fill="currentColor"/>
      <path d="M5.20834 20.8333C5.20834 17.0563 8.4896 14.0625 12.5 14.0625C16.5104 14.0625 19.7917 17.0563 19.7917 20.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12.5" cy="12.5" r="10.4167" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  settings: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="3.125" stroke="currentColor" strokeWidth="2"/>
      <path d="M12.5 2.08333V5.20833" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12.5 19.7917V22.9167" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22.9167 12.5H19.7917" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.20834 12.5H2.08334" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.875 5.125L17.625 7.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7.375 17.625L5.125 19.875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.875 19.875L17.625 17.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7.375 7.375L5.125 5.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-white h-screen fixed left-0 top-0 border-r border-[#E6EFF5] flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-8 py-7">
        <div className="w-9 h-9 bg-[#396AFF] rounded-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="14" height="10" rx="2" fill="white"/>
            <rect x="5" y="4" width="10" height="4" rx="1" fill="white" fillOpacity="0.6"/>
          </svg>
        </div>
        <span className="text-[25px] font-extrabold text-[#343C6A]">
          BankDash.
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 py-4 rounded-lg text-[18px] font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#396AFF] bg-[#E7EDFF]/30'
                      : 'text-[#B1B1B1] hover:text-[#718EBF] hover:bg-gray-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#396AFF] rounded-r-lg" />
                    )}
                    <span className={isActive ? 'text-[#396AFF]' : 'text-[#B1B1B1]'}>
                      {icons[item.icon]}
                    </span>
                    {item.name}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
