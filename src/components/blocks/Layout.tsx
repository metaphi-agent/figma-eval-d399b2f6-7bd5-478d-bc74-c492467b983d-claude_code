import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/privileges': 'My Privileges',
  '/settings': 'Setting',
};

export default function Layout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Overview';

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Sidebar />
      <div className="ml-[250px]">
        <Header title={title} />
        <main className="p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
