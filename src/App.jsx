import { Routes, Route } from 'react-router-dom'
import Layout from './components/blocks/Layout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Accounts from './pages/Accounts'
import Investments from './pages/Investments'
import CreditCards from './pages/CreditCards'
import Loans from './pages/Loans'
import Services from './pages/Services'
import Settings from './pages/Settings'
import SettingsPreferences from './pages/SettingsPreferences'
import SettingsSecurity from './pages/SettingsSecurity'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/preferences" element={<SettingsPreferences />} />
        <Route path="/settings/security" element={<SettingsSecurity />} />
      </Routes>
    </Layout>
  )
}

export default App
