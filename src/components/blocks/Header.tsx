interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-[100px] bg-white border-b border-[#E6EFF5] flex items-center justify-between px-10">
      <h1 className="text-[28px] font-semibold text-[#343C6A]">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718EBF]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="w-[255px] h-[50px] bg-[#F5F7FA] rounded-full pl-12 pr-4 text-[15px] text-[#718EBF] placeholder-[#8BA3CB] focus:outline-none focus:ring-2 focus:ring-[#396AFF]/20"
          />
        </div>

        {/* Settings */}
        <button className="w-[50px] h-[50px] bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#718EBF] hover:bg-[#E7EDFF] transition-colors">
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
        </button>

        {/* Notifications */}
        <button className="w-[50px] h-[50px] bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#FE5C73] hover:bg-[#FFE0E6] transition-colors relative">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 3.125C8.7875 3.125 5.72917 6.18333 5.72917 9.89583V12.9792L4.16667 16.6667H20.8333L19.2708 12.9792V9.89583C19.2708 6.18333 16.2125 3.125 12.5 3.125Z" fill="currentColor"/>
            <path d="M10.4167 19.7917C10.4167 20.9375 11.3542 21.875 12.5 21.875C13.6458 21.875 14.5833 20.9375 14.5833 19.7917" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="absolute top-2 right-2 w-3 h-3 bg-[#FE5C73] rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
