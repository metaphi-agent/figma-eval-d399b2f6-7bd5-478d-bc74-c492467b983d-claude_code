import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/settings': 'Settings',
  '/settings/preferences': 'Settings',
  '/settings/security': 'Settings'
}

export default function Header() {
  const location = useLocation()
  const pageTitle = pageTitles[location.pathname] || 'Dashboard'

  return (
    <header className="fixed top-0 left-[250px] right-0 h-[100px] bg-white border-b border-border-light z-30 flex items-center justify-between px-10">
      {/* Page Title */}
      <h1 className="text-[28px] font-semibold text-text-primary">{pageTitle}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="w-[255px] pl-12 pr-5 py-3 bg-bg-secondary rounded-[40px] text-[15px] text-text-secondary outline-none focus:ring-2 focus:ring-primary-500/20 transition-shadow"
          />
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
            fill="none"
            stroke="#8BA3CB"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Settings Icon */}
        <button className="w-[50px] h-[50px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-bg-tertiary transition-colors">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M12.5 15.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
              stroke="#718EBF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.313 15.625a1.719 1.719 0 0 0 .343 1.894l.063.062a2.083 2.083 0 1 1-2.948 2.948l-.062-.063a1.719 1.719 0 0 0-1.894-.343 1.719 1.719 0 0 0-1.04 1.573v.179a2.083 2.083 0 0 1-4.167 0v-.094a1.719 1.719 0 0 0-1.125-1.573 1.719 1.719 0 0 0-1.895.343l-.062.063a2.083 2.083 0 1 1-2.948-2.948l.063-.062a1.719 1.719 0 0 0 .343-1.894 1.719 1.719 0 0 0-1.573-1.04h-.18a2.083 2.083 0 0 1 0-4.167h.095a1.719 1.719 0 0 0 1.573-1.125 1.719 1.719 0 0 0-.344-1.895l-.062-.062a2.083 2.083 0 1 1 2.948-2.948l.062.063a1.719 1.719 0 0 0 1.894.343h.083a1.719 1.719 0 0 0 1.042-1.573v-.18a2.083 2.083 0 0 1 4.166 0v.095a1.719 1.719 0 0 0 1.042 1.573 1.719 1.719 0 0 0 1.894-.344l.062-.062a2.083 2.083 0 1 1 2.948 2.948l-.063.062a1.719 1.719 0 0 0-.343 1.894v.083a1.719 1.719 0 0 0 1.573 1.042h.179a2.083 2.083 0 0 1 0 4.166h-.094a1.719 1.719 0 0 0-1.573 1.042Z"
              stroke="#718EBF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Notification Icon */}
        <button className="relative w-[50px] h-[50px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-bg-tertiary transition-colors">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M18.75 8.333a6.25 6.25 0 1 0-12.5 0c0 7.292-3.125 9.375-3.125 9.375h18.75s-3.125-2.083-3.125-9.375ZM14.323 21.875a2.083 2.083 0 0 1-3.646 0"
              stroke="#FE5C73"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full" />
        </button>

        {/* User Avatar */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden cursor-pointer ring-2 ring-border-light hover:ring-primary-500 transition-all">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}
