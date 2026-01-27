import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const settingsTabs = [
  { name: 'Edit Profile', path: '/settings', active: true },
  { name: 'Preferences', path: '/settings/preferences', active: false },
  { name: 'Security', path: '/settings/security', active: false }
]

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Settings Tabs */}
      <Card>
        <div className="flex gap-8 border-b border-border-light pb-4 mb-6">
          {settingsTabs.map((tab, index) => (
            <button
              key={index}
              className={`text-[16px] font-medium transition-colors ${
                tab.active
                  ? 'text-text-primary border-b-3 border-primary-500'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=180&h=180&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            <Input label="Your Name" defaultValue="Charlene Reed" />
            <Input label="User Name" defaultValue="Charlene Reed" />
            <Input label="Email" defaultValue="charlenereed@gmail.com" type="email" />
            <Input label="Password" defaultValue="**********" type="password" />
            <Input label="Date of Birth" defaultValue="25 January 1990" />
            <Input label="Present Address" defaultValue="San Jose, California, USA" />
            <Input label="Permanent Address" defaultValue="San Jose, California, USA" />
            <Input label="City" defaultValue="San Jose" />
            <Input label="Postal Code" defaultValue="45962" />
            <Input label="Country" defaultValue="USA" />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button>Save</Button>
        </div>
      </Card>
    </div>
  )
}
