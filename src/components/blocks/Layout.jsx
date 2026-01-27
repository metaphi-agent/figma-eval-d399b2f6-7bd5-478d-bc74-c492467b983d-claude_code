import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <Sidebar />
      <Header />
      <main className="ml-[250px] mt-[100px] p-8">
        {children}
      </main>
    </div>
  )
}
