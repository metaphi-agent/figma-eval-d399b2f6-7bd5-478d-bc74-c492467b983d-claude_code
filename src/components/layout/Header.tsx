import { Search, Settings, Bell } from 'lucide-react';
import { Input } from '../ui/Input';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="fixed top-0 left-[250px] right-0 h-[100px] bg-white border-b border-[--color-border] flex items-center px-10 z-30">
      <div className="flex items-center justify-between w-full">
        {/* Page Title */}
        <h1 className="text-[28px] font-semibold text-[--color-text-primary]">
          {title}
        </h1>

        {/* Right side actions */}
        <div className="flex items-center gap-8">
          {/* Search */}
          <div className="w-[255px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[--color-text-secondary]" />
              <input
                type="search"
                placeholder="Search for something"
                className="w-full h-[50px] pl-12 pr-5 rounded-[40px] bg-[--color-background] border-none text-[--color-text-secondary] text-[15px] placeholder:text-[--color-text-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary]/20"
              />
            </div>
          </div>

          {/* Settings Icon */}
          <button className="w-[50px] h-[50px] rounded-full bg-[--color-background] flex items-center justify-center hover:bg-[--color-border] transition-colors">
            <Settings className="w-6 h-6 text-[--color-text-secondary]" />
          </button>

          {/* Notifications */}
          <button className="relative w-[50px] h-[50px] rounded-full bg-[--color-background] flex items-center justify-center hover:bg-[--color-border] transition-colors">
            <Bell className="w-6 h-6 text-[--color-error]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[--color-error] rounded-full" />
          </button>

          {/* User Avatar */}
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-[--color-border]">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
