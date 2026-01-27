import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: '🏠', label: 'Dashboard', path: '/' },
  { icon: '💳', label: 'Transactions', path: '/transactions' },
  { icon: '👤', label: 'Accounts', path: '/accounts' },
  { icon: '📊', label: 'Investments', path: '/investments' },
  { icon: '💳', label: 'Credit Cards', path: '/credit-cards' },
  { icon: '💰', label: 'Loans', path: '/loans' },
  { icon: '🔧', label: 'Services', path: '/services' },
  { icon: '💡', label: 'My Privileges', path: '/privileges' },
  { icon: '⚙️', label: 'Setting', path: '/settings' }
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white border-r border-border-light z-40">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border-light">
        <div className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-[25px] font-bold text-text-primary">BankDash.</span>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-6 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500/10 to-transparent border-l-4 border-primary-500 text-text-primary'
                      : 'text-text-secondary hover:bg-bg-tertiary'
                  }`
                }
              >
                <span className="text-[20px]">{item.icon}</span>
                <span className="text-[18px] font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
