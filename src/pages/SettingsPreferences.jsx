import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const preferences = [
  { title: 'Currency', value: 'USD', options: ['USD', 'EUR', 'GBP', 'JPY'] },
  { title: 'Time Zone', value: '(GMT-12:00) International Date Line West', options: [] },
  { title: 'Notification', value: 'I send or receive digital currency', description: 'Enable notifications for transactions', toggle: true },
  { title: 'Notification', value: 'I receive merchant order', description: 'Get notified when you receive orders', toggle: true },
  { title: 'Notification', value: 'There are recommendation for my account', description: 'Receive personalized recommendations', toggle: true }
]

export default function SettingsPreferences() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex gap-8 border-b border-border-light pb-4 mb-6">
          <button className="text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Edit Profile
          </button>
          <button className="text-[16px] font-medium text-text-primary border-b-3 border-primary-500">
            Preferences
          </button>
          <button className="text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Security
          </button>
        </div>

        <div className="space-y-6">
          {/* Currency */}
          <div className="flex items-center justify-between py-4 border-b border-border-light">
            <div>
              <p className="text-[16px] font-medium text-text-primary mb-1">Currency</p>
            </div>
            <select className="px-6 py-3 border-2 border-border-light rounded-[15px] text-[15px] text-text-primary outline-none focus:border-primary-500 transition-colors">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>

          {/* Time Zone */}
          <div className="flex items-center justify-between py-4 border-b border-border-light">
            <div>
              <p className="text-[16px] font-medium text-text-primary mb-1">Time Zone</p>
            </div>
            <select className="px-6 py-3 border-2 border-border-light rounded-[15px] text-[15px] text-text-primary outline-none focus:border-primary-500 transition-colors">
              <option>(GMT-12:00) International Date Line West</option>
              <option>(GMT-11:00) Midway Island</option>
              <option>(GMT-10:00) Hawaii</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-semibold text-text-primary mb-4">Notification</h3>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-[16px] font-medium text-text-primary mb-1">I send or receive digital currency</p>
                <p className="text-[14px] text-text-secondary">Enable notifications for transactions</p>
              </div>
              <label className="relative inline-block w-14 h-7">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-14 h-7 bg-border-light rounded-full peer peer-checked:bg-primary-500 transition-colors cursor-pointer" />
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7" />
              </label>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-[16px] font-medium text-text-primary mb-1">I receive merchant order</p>
                <p className="text-[14px] text-text-secondary">Get notified when you receive orders</p>
              </div>
              <label className="relative inline-block w-14 h-7">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-border-light rounded-full peer peer-checked:bg-primary-500 transition-colors cursor-pointer" />
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7" />
              </label>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-[16px] font-medium text-text-primary mb-1">There are recommendations for my account</p>
                <p className="text-[14px] text-text-secondary">Receive personalized recommendations</p>
              </div>
              <label className="relative inline-block w-14 h-7">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-14 h-7 bg-border-light rounded-full peer peer-checked:bg-primary-500 transition-colors cursor-pointer" />
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7" />
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button>Save</Button>
        </div>
      </Card>
    </div>
  )
}
