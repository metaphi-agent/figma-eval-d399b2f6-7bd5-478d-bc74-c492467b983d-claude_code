import { NavLink } from 'react-router-dom';
import {
  Home,
  ArrowLeftRight,
  Users,
  TrendingUp,
  CreditCard,
  BadgeDollarSign,
  Wrench,
  Award,
  Settings
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { path: '/', label: 'Dashboard', Icon: Home },
  { path: '/transactions', label: 'Transactions', Icon: ArrowLeftRight },
  { path: '/accounts', label: 'Accounts', Icon: Users },
  { path: '/investments', label: 'Investments', Icon: TrendingUp },
  { path: '/credit-cards', label: 'Credit Cards', Icon: CreditCard },
  { path: '/loans', label: 'Loans', Icon: BadgeDollarSign },
  { path: '/services', label: 'Services', Icon: Wrench },
  { path: '/privileges', label: 'My Privileges', Icon: Award },
  { path: '/settings', label: 'Setting', Icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white border-r border-[--color-border] flex flex-col z-40">
      {/* Logo */}
      <div className="h-[100px] flex items-center px-10 border-b border-[--color-border]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[--color-primary] rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold text-[--color-text-primary]">
            BankDash.
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-1">
          {navItems.map(({ path, label, Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-4 px-5 py-3 rounded-lg transition-all',
                    'hover:bg-[--color-background]',
                    isActive
                      ? 'text-[--color-primary] bg-[--color-background] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-[60%] before:bg-[--color-primary] before:rounded-r-full'
                      : 'text-[--color-text-secondary]'
                  )
                }
              >
                <Icon className="w-6 h-6" />
                <span className="text-lg font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
